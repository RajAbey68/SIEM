import os
from PIL import Image, ImageChops

rendered_dir = "/Users/arajiv/.gemini/antigravity/scratch/rendered_pages"
output_dir = "/Users/arajiv/SIEM/siem-construction/public/images/projects"
os.makedirs(output_dir, exist_ok=True)

# Let's check a rendered page's dimensions first
sample_file = os.path.join(rendered_dir, "page-16.png")
if os.path.exists(sample_file):
    with Image.open(sample_file) as img:
        print(f"Sample page-16 size: {img.size}, mode: {img.mode}")

# We want to crop the main photograph from pages:
# printed page 16 -> physical page 17 (page-17.png) -> House, Digana
# printed page 19 -> physical page 20 (page-20.png) -> Hayley's House
# printed page 20 -> physical page 21 (page-21.png) -> 7th Floor, Cinnamon Lakeside
# printed page 21 -> physical page 22 (page-22.png) -> Prima Apartments, Colombo
# printed page 22 -> physical page 23 (page-23.png) -> Cinnamon Lakeside
# printed page 25 -> physical page 26 (page-26.png) -> South Point Villa
# printed page 26 -> physical page 27 (page-27.png) -> Building Bagatalle Road
# printed page 27 -> physical page 28 (page-28.png) -> House in Mirihana
# printed page 28 -> physical page 29 (page-29.png) -> Amarasekara House / House in Wadduwa
# printed page 29 -> physical page 30 (page-30.png) -> Renovation of State Bank of India
# printed page 30 -> physical page 31 (page-31.png) -> Braganza Villa in Talpe

# Wait, let's also look at physical page 16 (page-16.png) which is printed page 15 (Boutique Hotel, Ravana Gardens)
# and physical page 19 (page-19.png) which is printed page 18 (Colombo Swimming Club)
# Let's map physical pages to projects:
page_projects = {
    16: "ravana-gardens.jpg",
    17: "house-digana.jpg",
    18: "colombo-courtyard.jpg",
    19: "swimming-club.jpg",
    20: "hayleys-house.jpg",
    21: "cinnamon-lakeside-7th.jpg",
    22: "prima-apartments.jpg",
    23: "cinnamon-lakeside-general.jpg",
    24: "victoria-golf.jpg",
    25: "wrey-house.jpg",
    26: "south-point-villa.jpg",
    27: "bagatalle-road.jpg",
    28: "mirihana-house.jpg",
    29: "amarasekara-house.jpg",
    30: "state-bank.jpg",
    31: "braganza-villa.jpg"
}

# Let's write a simple bounding box detection or just crop the main visual area of the page.
# Typically, these PDF pages have white margins. Let's find the bounding box of non-white pixels.
for p_num, name in page_projects.items():
    page_file = os.path.join(rendered_dir, f"page-{p_num}.png")
    if not os.path.exists(page_file):
        print(f"File {page_file} does not exist!")
        continue
        
    try:
        with Image.open(page_file) as img:
            # Convert to RGB if not already
            rgb_img = img.convert('RGB')
            
            # Find bounding box of non-white content
            # We define "white" as pixels where R, G, B > 250
            bg = Image.new(rgb_img.mode, rgb_img.size, (255, 255, 255))
            diff = ImageChops.difference(rgb_img, bg)
            bbox = diff.getbbox()
            
            if bbox:
                print(f"Page {p_num} non-white bbox: {bbox}")
                # Let's save a cropped version of the bbox or crop the image specifically
                # Let's see if the page has a photograph inside it.
                # If we just crop the bbox, does it include titles/text? Yes, it will.
                # Let's write a script to save the full page, or just the bbox, or find the photo.
                # Wait, if we crop the photo itself:
                # Let's find the largest solid rectangular colored block.
                # Let's just save the bbox cropped image first to see how it looks, or save the full page.
                # Actually, let's look at the images inside the PDF using page.images!
                # Wait, if the PDF contains raw images, we already extracted them!
                # Let's see if we can find which raw image belongs to which project by matching them to the rendered page!
                # Yes! We can compare each raw image from page.images to the rendered page-X.png.
                # If a raw image is present on page X, it will match a portion of page-X.png!
                # This is a robust way to match raw images to pages.
            else:
                print(f"Page {p_num} is completely white!")
    except Exception as e:
        print(f"Error analyzing page {p_num}: {e}")
