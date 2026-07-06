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

pages = {
    17: "Printed Page 16: HOUSE, DIGANA",
    20: "Printed Page 19: HAYLEY'S HOUSE",
    21: "Printed Page 20: 7TH FLOOR, CINNAMON LAKESIDE",
    22: "Printed Page 21: PRIMA APARTMENTS, COLOMBO",
    23: "Printed Page 22: CINNAMON LAKESIDE",
    26: "Printed Page 25: SOUTH POINT VILLA",
    27: "Printed Page 26: Building Bagatalle ROAD",
    28: "Printed Page 27: HOUSE IN MIRIHANA, HOUSE IN WADDUWA",
    29: "Printed Page 28: AMARASEKARA HOUSE, HOUSE IN WADDUWA",
    30: "Printed Page 29: Renovation of State bank of India Building",
    31: "Printed Page 30: Braganza Villa in Talpe"
}

try:
    reader = pypdf.PdfReader(pdf_path)
    for p_num, label in pages.items():
        page = reader.pages[p_num - 1]
        text = page.extract_text()
        print(f"\n========================================\n{label}\n========================================")
        print(clean_text(text))
except Exception as e:
    print("Error:", e)
