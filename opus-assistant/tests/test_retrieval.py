import pytest
import sys
from pathlib import Path

# Add project root to path
sys.path.insert(0, str(Path(__file__).resolve().parent.parent))

from app.retrieval import BM25Retriever

def test_retriever_indexing_and_search():
    retriever = BM25Retriever()
    assert len(retriever.documents) > 0

    results = retriever.search("predictive maintenance factory downtime", top_k=2)
    assert len(results) > 0
    top_doc = results[0]
    assert "Manufacturing" in top_doc["title"] or "predictive" in top_doc["text"].lower()

def test_retriever_empty_query():
    retriever = BM25Retriever()
    results = retriever.search("", top_k=3)
    assert len(results) <= 3

def test_retriever_top_k():
    retriever = BM25Retriever()
    results = retriever.search("OPUS Infiniti enterprise Chennai", top_k=1)
    assert len(results) == 1

