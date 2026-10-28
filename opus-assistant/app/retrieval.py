import json
import math
import re
from abc import ABC, abstractmethod
from typing import List, Dict, Any, Optional
from pathlib import Path
from app.config import settings

def tokenize(text: str) -> List[str]:
    """Basic alphanumeric lowercased word tokenization."""
    if not text:
        return []
    return re.findall(r"\w+", text.lower())

class BaseRetriever(ABC):
    """Abstract retrieval interface so BM25 can be replaced by Vector DB later."""
    
    @abstractmethod
    def search(self, query: str, top_k: int = 4) -> List[Dict[str, Any]]:
        pass

    @abstractmethod
    def reload(self):
        pass

class BM25Retriever(BaseRetriever):
    """
    In-memory BM25 Okapi retriever over json knowledge chunks.
    No heavy C++ dependencies required; guarantees 100% reliability on any machine.
    """
    def __init__(self, kb_path: Optional[Path] = None, k1: float = 1.5, b: float = 0.75):
        self.kb_path = kb_path or settings.KB_FILE_PATH
        self.k1 = k1
        self.b = b
        self.documents: List[Dict[str, Any]] = []
        self.doc_tokens: List[List[str]] = []
        self.doc_lens: List[int] = []
        self.avg_dl: float = 0.0
        self.idf: Dict[str, float] = {}
        self.reload()

    def reload(self):
        """Loads or reloads the knowledge base JSON file and builds the BM25 index."""
        if not self.kb_path.exists():
            self.documents = []
            return

        with open(self.kb_path, "r", encoding="utf-8") as f:
            try:
                self.documents = json.load(f)
            except Exception:
                self.documents = []

        self.doc_tokens = []
        self.doc_lens = []
        df: Dict[str, int] = {}
        n_docs = len(self.documents)

        for doc in self.documents:
            # Combine title and text for index representation
            full_text = f"{doc.get('title', '')} {doc.get('text', '')}"
            tokens = tokenize(full_text)
            self.doc_tokens.append(tokens)
            self.doc_lens.append(len(tokens))

            # Document frequency
            unique_terms = set(tokens)
            for t in unique_terms:
                df[t] = df.get(t, 0) + 1

        total_len = sum(self.doc_lens)
        self.avg_dl = (total_len / n_docs) if n_docs > 0 else 1.0

        # IDF calculation with standard BM25 smoothing
        self.idf = {}
        for term, freq in df.items():
            # Standard Lucene/BM25Okapi IDF formula
            self.idf[term] = math.log(1.0 + (n_docs - freq + 0.5) / (freq + 0.5))

    def search(self, query: str, top_k: int = 4) -> List[Dict[str, Any]]:
        if not self.documents:
            return []

        query_tokens = tokenize(query)
        if not query_tokens:
            return self.documents[:top_k]

        scores = [0.0] * len(self.documents)

        for i, doc_tokens in enumerate(self.doc_tokens):
            if not doc_tokens:
                continue
            doc_len = self.doc_lens[i]
            # Count term frequencies in this document
            tf_dict: Dict[str, int] = {}
            for t in doc_tokens:
                tf_dict[t] = tf_dict.get(t, 0) + 1

            doc_score = 0.0
            for q_term in query_tokens:
                tf = tf_dict.get(q_term, 0)
                if tf > 0:
                    idf_val = self.idf.get(q_term, 0.5)
                    # BM25 numerator and denominator
                    numerator = tf * (self.k1 + 1.0)
                    denominator = tf + self.k1 * (1.0 - self.b + self.b * (doc_len / self.avg_dl))
                    doc_score += idf_val * (numerator / denominator)

            scores[i] = doc_score

        # Sort indices by score descending
        ranked_indices = sorted(range(len(scores)), key=lambda idx: scores[idx], reverse=True)

        results = []
        for idx in ranked_indices[:top_k]:
            doc = self.documents[idx]
            results.append({
                "id": doc.get("id", str(idx)),
                "title": doc.get("title", "OPUS Information"),
                "source_url": doc.get("source_url", "https://opusinfiniti.com/"),
                "text": doc.get("text", ""),
                "score": round(scores[idx], 4)
            })

        return results

# Singleton retriever instance
retriever: BaseRetriever = BM25Retriever()

