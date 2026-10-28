"""
OPUS Infiniti Website Scraper & Knowledge Base Builder
Fetches public pages, extracts main textual content, cleans formatting,
chunks into ~300 words with overlap, and stores into data/kb.json.
"""

import re
import json
import urllib.request
from pathlib import Path
from typing import List, Dict, Any

BASE_DIR = Path(__file__).resolve().parent.parent
OUTPUT_FILE = BASE_DIR / "data" / "kb.json"

TARGET_PAGES = [
    {"url": "https://opusinfiniti.com/", "title": "OPUS Infiniti Home", "id_prefix": "home"},
    {"url": "https://opusinfiniti.com/about", "title": "About OPUS Infiniti", "id_prefix": "about"},
    {"url": "https://opusinfiniti.com/solutions/products", "title": "OPUS Enterprise Products", "id_prefix": "products"},
    {"url": "https://opusinfiniti.com/case-studies", "title": "OPUS Case Studies", "id_prefix": "case-studies"},
    {"url": "https://opusinfiniti.com/faq", "title": "OPUS Frequently Asked Questions", "id_prefix": "faq"},
    {"url": "https://opusinfiniti.com/domain", "title": "OPUS Domain Solutions", "id_prefix": "domain"},
    {"url": "https://opusinfiniti.com/partners", "title": "OPUS Partner Ecosystem", "id_prefix": "partners"},
    {"url": "https://opusinfiniti.com/contact", "title": "OPUS Offices and Contact", "id_prefix": "contact"}
]

def clean_html(raw_html: str) -> str:
    # Remove script and style tags
    clean = re.sub(r"(?is)<script[^>]*>.*?</script>", " ", raw_html)
    clean = re.sub(r"(?is)<style[^>]*>.*?</style>", " ", clean)
    clean = re.sub(r"(?is)<svg[^>]*>.*?</svg>", " ", clean)
    clean = re.sub(r"(?is)<nav[^>]*>.*?</nav>", " ", clean)
    clean = re.sub(r"(?is)<footer[^>]*>.*?</footer>", " ", clean)
    # Strip HTML tags
    clean = re.sub(r"<[^>]+>", " ", clean)
    # Normalize whitespaces
    clean = re.sub(r"\s+", " ", clean).strip()
    return clean

def chunk_text(text: str, chunk_size: int = 300, overlap: int = 50) -> List[str]:
    words = text.split()
    if not words:
        return []
    chunks = []
    i = 0
    while i < len(words):
        chunk_words = words[i:i + chunk_size]
        chunks.append(" ".join(chunk_words))
        if i + chunk_size >= len(words):
            break
        i += chunk_size - overlap
    return chunks

def scrape_and_build_kb():
    print(f"Starting scraping of {len(TARGET_PAGES)} OPUS Infiniti pages...")
    all_chunks: List[Dict[str, Any]] = []

    # First load existing seed chunks if present
    if OUTPUT_FILE.exists():
        with open(OUTPUT_FILE, "r", encoding="utf-8") as f:
            try:
                seed = json.load(f)
                all_chunks.extend(seed)
                print(f"Loaded {len(seed)} existing baseline chunks from kb.json.")
            except Exception:
                pass

    scraped_count = 0
    for page in TARGET_PAGES:
        url = page["url"]
        print(f"Fetching: {url} ...")
        try:
            req = urllib.request.Request(
                url,
                headers={"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) OPUS-Assistant-Indexer/1.0"}
            )
            with urllib.request.urlopen(req, timeout=10) as resp:
                html = resp.read().decode("utf-8", errors="ignore")
                cleaned = clean_html(html)
                chunks = chunk_text(cleaned, chunk_size=300, overlap=50)

                for idx, chunk in enumerate(chunks):
                    all_chunks.append({
                        "id": f"{page['id_prefix']}-chunk-{idx + 1}",
                        "title": page["title"],
                        "source_url": url,
                        "text": chunk
                    })
                scraped_count += len(chunks)
                print(f"  -> Generated {len(chunks)} chunks.")
        except Exception as e:
            print(f"  -> Warning: Could not scrape {url}: {e} (Using seed baseline)")

    # Deduplicate by text hash or id
    unique_chunks = []
    seen = set()
    for c in all_chunks:
        signature = c["text"][:100]
        if signature not in seen and len(c["text"]) > 40:
            seen.add(signature)
            unique_chunks.append(c)

    OUTPUT_FILE.parent.mkdir(parents=True, exist_ok=True)
    with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
        json.dump(unique_chunks, f, indent=2)

    print(f"\nKnowledge base build complete! Total chunks indexed: {len(unique_chunks)}")
    print(f"Saved to: {OUTPUT_FILE}")

if __name__ == "__main__":
    scrape_and_build_kb()

