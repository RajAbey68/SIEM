import os
from PIL import Image

extracted_dir = "/Users/arajiv/.gemini/antigravity/scratch/extracted_pdf_images"

files = sorted([f for f in os.listdir(extracted_dir) if f.lower().endswith('.tif')])

for file in files:
    path = os.path.join(extracted_dir, file)
    try:
        with Image.open(path) as img:
            print(f"{file}: mode={img.mode}, size={img.size}, format={img.format}")
    except Exception as e:
        print(f"Error {file}: {e}")
