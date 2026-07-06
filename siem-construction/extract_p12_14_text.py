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
    return text.strip()

try:
    reader = pypdf.PdfReader(pdf_path)
    for p_num in range(11, 16):
        page = reader.pages[p_num - 1]
        text = page.extract_text()
        print(f"\n========================================\nPHYSICAL PAGE {p_num}\n========================================")
        print(clean_text(text))
except Exception as e:
    print("Error:", e)
