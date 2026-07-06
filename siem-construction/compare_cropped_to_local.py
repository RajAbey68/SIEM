import os
from PIL import Image

local_dir = "/Users/arajiv/SIEM/siem-construction/public/images/projects"

# Let's list the original files (before we modified them)
# Wait, we can find original files by looking at their hashes or just listing them
# Let's write the dhash and hamming distance functions
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

# We'll load the original site files: site-01.jpg to site-07.jpg, lobby-area.jpg, sbi-hall.jpg, sbi-after.jpg
original_files = {
    "site-01.jpg": "Wrey House (old mapping)",
    "site-02.jpg": "Prima Apartments (old mapping)",
    "site-03.jpg": "Bagatalle Road (old mapping)",
    "site-04.jpg": "Mirihana/Wadduwa (old mapping)",
    "site-05.jpg": "Hayley's House (old mapping)",
    "site-06.jpg": "South Point Villa (old mapping)",
    "site-07.jpg": "Ravana Gardens (old mapping)",
    "lobby-area.jpg": "Colombo Swimming Club (old mapping)",
    "sbi-hall.jpg": "Cinnamon Lakeside 7th (old mapping)",
    "sbi-after.jpg": "State Bank of India (old mapping)"
}

hashes = {}
for file in original_files:
    path = os.path.join(local_dir, file)
    if os.path.exists(path):
        try:
            with Image.open(path) as img:
                hashes[file] = dhash(img)
        except Exception as e:
            print(f"Error hashing {file}: {e}")

# Now let's hash our newly cropped files
cropped_files = [
    "ravana-gardens.jpg",
    "swimming-club.jpg",
    "hayleys-house.jpg",
    "cinnamon-lakeside.jpg",
    "prima-apartments.jpg",
    "wrey-house.jpg",
    "south-point-villa.jpg",
    "bagatalle-road.jpg",
    "mirihana-house.jpg",
    "amarasekara-house.jpg",
    "state-bank.jpg"
]

print("Comparing newly cropped images with old site-X.jpg files:")
for c_file in cropped_files:
    c_path = os.path.join(local_dir, c_file)
    if not os.path.exists(c_path):
        continue
    try:
        with Image.open(c_path) as img:
            chash = dhash(img)
            
            # Find closest original file
            best_match = None
            min_dist = 64
            for o_file, o_hash in hashes.items():
                dist = hamming_distance(chash, o_hash)
                if dist < min_dist:
                    min_dist = dist
                    best_match = o_file
            
            if min_dist <= 15:
                print(f"  Cropped {c_file} matches {best_match} ({original_files[best_match]}) with distance {min_dist}")
            else:
                print(f"  Cropped {c_file} has no close match in original files (min distance: {min_dist} to {best_match})")
    except Exception as e:
        print(f"Error comparing {c_file}: {e}")
