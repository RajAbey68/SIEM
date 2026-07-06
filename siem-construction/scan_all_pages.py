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
    
    for i, page in enumerate(reader.pages):
        page_num = i + 1
        text = page.extract_text()
        first_lines = [line.strip() for line in text.split('\n') if line.strip()][:3]
        img_count = len(page.images)
        print(f"Page {page_num:02d}: Images={img_count} | Lines: {first_lines}")
except Exception as e:
    print("Error:", e)
