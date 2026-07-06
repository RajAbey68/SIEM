import os
import re

src_dir = "/Users/arajiv/SIEM/siem-construction/src"
public_dir = "/Users/arajiv/SIEM/siem-construction/public"

image_pattern = re.compile(r'["\'](/images/[^"\']+)["\']')

referenced_images = set()

# Scan all tsx/ts files for image paths starting with /images
for root, _, files in os.walk(src_dir):
    for file in files:
        if file.endswith(('.tsx', '.ts')):
            file_path = os.path.join(root, file)
            with open(file_path, 'r', encoding='utf-8', errors='ignore') as f:
                content = f.read()
                matches = image_pattern.findall(content)
                for match in matches:
                    # Strip any trailing queries or hashes
                    clean_path = match.split('?')[0].split('#')[0]
                    referenced_images.add(clean_path)

print(f"Found {len(referenced_images)} unique image references in code:")
missing_images = []

for img in sorted(referenced_images):
    # Check if file exists under public directory
    disk_path = os.path.join(public_dir, img.lstrip('/'))
    exists = os.path.exists(disk_path)
    status = "✓ EXISTS" if exists else "❌ MISSING"
    print(f"  {img:50s} : {status}")
    if not exists:
        missing_images.append(img)

print("\nSummary:")
if missing_images:
    print(f"❌ {len(missing_images)} missing images found!")
    for mi in missing_images:
        print(f"  - {mi}")
else:
    print("🎉 All referenced images exist in the public folder!")
