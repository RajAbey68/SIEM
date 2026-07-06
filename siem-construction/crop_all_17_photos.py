import os
from PIL import Image

rendered_dir = "/Users/arajiv/.gemini/antigravity/scratch/rendered_pages"
output_dir = "/Users/arajiv/SIEM/siem-construction/public/images/projects"
os.makedirs(output_dir, exist_ok=True)

all_mappings = {
    15: "anilana-pasikudah.jpg",
    16: "ravana-gardens.jpg",
    17: "house-digana.jpg",
    18: "colombo-courtyard.jpg",
    19: "swimming-club.jpg",
    20: "hayleys-house.jpg",
    21: "cinnamon-lakeside-7th.jpg",
    22: "prima-apartments.jpg",
    23: "cinnamon-lakeside.jpg",
    24: "victoria-golf.jpg",
    25: "wrey-house.jpg",
    26: "south-point-villa.jpg",
    27: "bagatalle-road.jpg",
    28: "mirihana-house.jpg",
    29: "amarasekara-house.jpg",
    30: "state-bank.jpg",
    31: "braganza-villa.jpg"
}

def crop_main_photo(page_num, output_name):
    path = os.path.join(rendered_dir, f"page-{page_num}.png")
    if not os.path.exists(path):
        print(f"Page {page_num} rendered file not found at {path}!")
        return False
        
    with Image.open(path) as img:
        width, height = img.size
        img_rgb = img.convert('RGB')
        
        # Scan row densities to find non-white content boundary
        row_non_white = []
        for y in range(height):
            non_white_count = 0
            for x in range(0, width, width // 100):
                r, g, b = img_rgb.getpixel((x, y))
                if r < 240 or g < 240 or b < 240:
                    non_white_count += 1
            row_non_white.append(non_white_count > 10)
            
        start_y = -1
        end_y = -1
        max_len = 0
        curr_start = -1
        
        for y, is_content in enumerate(row_non_white):
            if is_content:
                if curr_start == -1:
                    curr_start = y
            else:
                if curr_start != -1:
                    length = y - curr_start
                    if length > max_len:
                        max_len = length
                        start_y = curr_start
                        end_y = y
                    curr_start = -1
        if curr_start != -1:
            length = height - curr_start
            if length > max_len:
                max_len = length
                start_y = curr_start
                end_y = height
                
        if start_y != -1 and end_y != -1:
            col_non_white = []
            for x in range(width):
                non_white_count = 0
                for y in range(start_y, end_y, max(1, (end_y - start_y) // 100)):
                    r, g, b = img_rgb.getpixel((x, y))
                    if r < 240 or g < 240 or b < 240:
                        non_white_count += 1
                col_non_white.append(non_white_count > 5)
                
            start_x = -1
            end_x = -1
            max_w_len = 0
            curr_x_start = -1
            for x, is_content in enumerate(col_non_white):
                if is_content:
                    if curr_x_start == -1:
                        curr_x_start = x
                else:
                    if curr_x_start != -1:
                        length = x - curr_x_start
                        if length > max_w_len:
                            max_w_len = length
                            start_x = curr_x_start
                            end_x = x
                        curr_x_start = -1
            if curr_x_start != -1:
                length = width - curr_x_start
                if length > max_w_len:
                    max_w_len = length
                    start_x = curr_x_start
                    end_x = width
                    
            if start_x != -1 and end_x != -1:
                margin = 5
                crop_box = (
                    max(0, start_x - margin),
                    max(0, start_y - margin),
                    min(width, end_x + margin),
                    min(height, end_y + margin)
                )
                cropped = img_rgb.crop(crop_box)
                out_path = os.path.join(output_dir, output_name)
                cropped.thumbnail((1200, 1200))
                cropped.save(out_path, 'JPEG', quality=85)
                print(f"Page {page_num} -> Cropped saved as {output_name}: size={cropped.size}")
                return True
                
        print(f"Failed to find photo on page {page_num}")
        return False

for page_num, name in all_mappings.items():
    crop_main_photo(page_num, name)
print("Finished cropping all 17 photos.")
