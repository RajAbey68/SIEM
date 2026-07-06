import os
from PIL import Image

dir_path = "/Users/arajiv/SIEM/siem-construction/public/images/projects"
files = sorted(os.listdir(dir_path))

for file in files:
    path = os.path.join(dir_path, file)
    if not os.path.isfile(path) or file.startswith('.'):
        continue
    try:
        with Image.open(path) as img:
            print(f"{file:30s} : size={str(img.size):12s} format={img.format} mode={img.mode}")
    except Exception as e:
        print(f"Error {file}: {e}")
