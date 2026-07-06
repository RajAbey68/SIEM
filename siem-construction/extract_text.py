import pypdf
import pypdf.filters

# Disable limits for large trusted PDF files
pypdf.filters.ZLIB_MAX_OUTPUT_LENGTH = 0
pypdf.filters.LZW_MAX_OUTPUT_LENGTH = 0
pypdf.filters.RUN_LENGTH_MAX_OUTPUT_LENGTH = 0

pdf_path = "/Users/arajiv/Library/CloudStorage/GoogleDrive-rajabey68@gmail.com/My Drive/SIEM/final company profile (FILE A) final.pdf"

try:
    reader = pypdf.PdfReader(pdf_path)
    print(f"Total pages: {len(reader.pages)}")
    
    target_pages = [16, 19, 20, 21, 22, 25, 26, 27, 28, 29, 30]
    
    for page_num in target_pages:
        idx = page_num - 1
        page = reader.pages[idx]
        print(f"\n========================================")
        print(f"PAGE {page_num}")
        print(f"========================================")
        text = page.extract_text()
        print(text)
except Exception as e:
    print("Error:", e)
