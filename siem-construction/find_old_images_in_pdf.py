import os
from PIL import Image

local_dir = "/Users/arajiv/SIEM/siem-construction/public/images/projects"
extracted_dir = "/Users/arajiv/.gemini/antigravity/scratch/extracted_pdf_images"

# Define the dhash and hamming distance functions
def dhash(image, hash_size=8):
    image = image.convert('L').resize((hash_size + 1, hash_size), Image.Resampling.LANCZOS)
    pixels = list(image.getdata())
    difference = []
    for row in range(hash_size):
        for col in range(hash_size):
            pixel_left = pixels[row * (hash_size + 1) + col]
            pixel_right = pixels[row * (hash_size + 1) + col + 1]
            difference.append(pixel_left > pixel_right)
    decimal_value = 0
    hex_string = []
    for index, value in enumerate(difference):
        if value:
            decimal_value += 2**(index % 8)
        if (index % 8) == 7:
            hex_string.append(hex(decimal_value)[2:].zfill(2))
            decimal_value = 0
    return "".join(hex_string)

def hamming_distance(h1, h2):
    return sum(c1 != c2 for c1, c2 in zip(bin(int(h1, 16))[2:].zfill(64), bin(int(h2, 16))[2:].zfill(64)))

original_files = ["site-01.jpg", "site-02.jpg", "site-03.jpg", "site-04.jpg", "site-05.jpg", "site-06.jpg", "site-07.jpg", "lobby-area.jpg", "sbi-hall.jpg", "sbi-after.jpg"]
original_hashes = {}

for file in original_files:
    path = os.path.join(local_dir, file)
    if os.path.exists(path):
        try:
            with Image.open(path) as img:
                original_hashes[file] = dhash(img)
        except Exception as e:
            print(f"Error hashing original {file}: {e}")

extracted_files = sorted([f for f in os.listdir(extracted_dir) if f.lower().endswith('.tif')])

print("Mapping of original website images to PDF pages:")
for o_file, o_hash in original_hashes.items():
    matches = []
    for e_file in extracted_files:
        e_path = os.path.join(extracted_dir, e_file)
        try:
            with Image.open(e_path) as img:
                ehash = dhash(img)
                dist = hamming_distance(o_hash, ehash)
                if dist <= 10:
                    matches.append((e_file, dist))
        except Exception as e:
            pass
    if matches:
        print(f"Original {o_file:15s} matches PDF: " + ", ".join([f"{e} (dist {d})" for e, d in matches]))
    else:
        print(f"Original {o_file:15s} has NO match in extracted PDF images!")
