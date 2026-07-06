import pypdf
import pypdf.filters
import re

pypdf.filters.ZLIB_MAX_OUTPUT_LENGTH = 0
pypdf.filters.LZW_MAX_OUTPUT_LENGTH = 0
pypdf.filters.RUN_LENGTH_MAX_OUTPUT_LENGTH = 0

pdf_path = "/Users/arajiv/Library/CloudStorage/GoogleDrive-rajabey68@gmail.com/My Drive/SIEM/final company profile (FILE A) final.pdf"

def clean_text(text):
    if not text:
        return ""
    text = re.sub(r'/[iI]\.001', 'i', text)
    text = text.replace('\n', ' ')
    return text.strip()

try:
    reader = pypdf.PdfReader(pdf_path)
    print("Catalog of projects in the PDF:")
    for i, page in enumerate(reader.pages):
        page_num = i + 1
        text = page.extract_text()
        cleaned = clean_text(text)
        
        # Look for page number indicators like "<<<" or ">>>"
        printed_num = ""
        num_match = re.search(r'(\d+)\s*(?:<<<|>>>)', cleaned)
        if num_match:
            printed_num = num_match.group(1)
        else:
            num_match = re.search(r'(?:<<<|>>>)\s*(\d+)', cleaned)
            if num_match:
                printed_num = num_match.group(1)
                
        # Find potential project titles
        # Projects seem to start around page 15-16
        if page_num >= 15 and page_num <= 32:
            print(f"Physical Page {page_num:02d} | Printed Page {printed_num:4s} | Text: {cleaned[:100]}...")
except Exception as e:
    print("Error:", e)
