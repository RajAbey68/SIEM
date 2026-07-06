import os
import sys

pdf_path = "/Users/arajiv/Library/CloudStorage/GoogleDrive-rajabey68@gmail.com/My Drive/SIEM/final company profile (FILE A) final.pdf"

print("PDF file exists:", os.path.exists(pdf_path))
if os.path.exists(pdf_path):
    print("PDF size:", os.path.getsize(pdf_path))

try:
    import pypdf
    print("pypdf version:", pypdf.__version__)
except ImportError:
    print("pypdf is not installed")

try:
    import fitz # PyMuPDF
    print("PyMuPDF (fitz) is installed")
except ImportError:
    print("PyMuPDF is not installed")

try:
    from PIL import Image
    print("Pillow is installed")
except ImportError:
    print("Pillow is not installed")
