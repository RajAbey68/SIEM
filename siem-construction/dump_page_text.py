import pypdf
import pypdf.filters

# Disable limits for large trusted PDF files
pypdf.filters.ZLIB_MAX_OUTPUT_LENGTH = 0
pypdf.filters.LZW_MAX_OUTPUT_LENGTH = 0
pypdf.filters.RUN_LENGTH_MAX_OUTPUT_LENGTH = 0

pdf_path = "/Users/arajiv/Library/CloudStorage/GoogleDrive-rajabey68@gmail.com/My Drive/SIEM/final company profile (FILE A) final.pdf"

try:
    reader = pypdf.PdfReader(pdf_path)
    for p in range(15, 32):
        print(f"\n--- PAGE {p+1} ---")
        text = reader.pages[p].extract_text()
        print(text)
except Exception as e:
    print("Error:", e)
