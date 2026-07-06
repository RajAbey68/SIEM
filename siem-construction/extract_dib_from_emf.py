#!/usr/bin/env python3
"""
Extract DIB bitmap data from EMF files and save as BMP, then convert to JPEG via sips.
No PIL needed - pure Python BMP writing + macOS sips for JPEG conversion.
"""
import struct
import os
import sys
import subprocess

EMF_DIR = "/Users/arajiv/SIEM/siem-construction/public/images/june-updates"
PUBLIC_IMG = "/Users/arajiv/SIEM/siem-construction/public/images"

GALLERY_MAP = {
    7:  ("midigama-villa", "projects"),
    9:  ("gallery-new-02", "gallery"),
    10: ("gallery-new-03", "gallery"),
    11: ("gallery-new-04", "gallery"),
    12: ("gallery-new-05", "gallery"),
    13: ("gallery-new-06", "gallery"),
    14: ("gallery-new-07", "gallery"),
    15: ("gallery-new-08", "gallery"),
    16: ("gallery-new-09", "gallery"),
    17: ("gallery-new-10", "gallery"),
}

def write_bmp(width, height, pixel_data, output_path):
    """Write raw BGRA pixel data as a BMP file (32-bit, no compression)."""
    abs_w = abs(width)
    abs_h = abs(height)
    
    # BMP rows are bottom-up and each row must be a multiple of 4 bytes
    row_size = ((abs_w * 4 + 3) // 4) * 4  # 32bpp = 4 bytes per pixel, rounded up
    pixel_row_size = abs_w * 4
    padding = row_size - pixel_row_size
    
    # Build pixel data (bottom-up, with padding)
    bmp_pixels = bytearray()
    for y in range(abs_h - 1, -1, -1):  # BMP is bottom-up
        row_start = y * pixel_row_size
        row_data = pixel_data[row_start:row_start + pixel_row_size]
        bmp_pixels.extend(row_data)
        bmp_pixels.extend(b'\x00' * padding)
    
    pixel_array_size = len(bmp_pixels)
    
    # BMP file header (14 bytes)
    bmp_header = struct.pack('<H', 0x4D42)  # 'BM' signature
    file_size = 14 + 40 + pixel_array_size  # header + DIB header + pixels
    bmp_header += struct.pack('<I', file_size)
    bmp_header += struct.pack('<HH', 0, 0)  # reserved
    bmp_header += struct.pack('<I', 14 + 40)  # offset to pixel data
    
    # DIB header (BITMAPINFOHEADER, 40 bytes)
    dib_header = struct.pack('<I', 40)  # header size
    dib_header += struct.pack('<i', abs_w)
    dib_header += struct.pack('<i', abs_h)
    dib_header += struct.pack('<H', 1)  # planes
    dib_header += struct.pack('<H', 32)  # bpp
    dib_header += struct.pack('<I', 0)  # BI_RGB (no compression)
    dib_header += struct.pack('<I', pixel_array_size)
    dib_header += struct.pack('<i', 2835)  # horizontal resolution (72 DPI)
    dib_header += struct.pack('<i', 2835)  # vertical resolution (72 DPI)
    dib_header += struct.pack('<I', 0)  # colors used
    dib_header += struct.pack('<I', 0)  # important colors
    
    with open(output_path, 'wb') as f:
        f.write(bmp_header)
        f.write(dib_header)
        f.write(bmp_pixels)
    
    return abs_w, abs_h


def extract_dib_from_emf(emf_path):
    """Extract raw BGRA pixel data and DIB info from an EMF file."""
    with open(emf_path, 'rb') as f:
        data = f.read()
    
    print(f"  File size: {len(data)} bytes")
    
    if len(data) < 108:
        return None
    
    # Record starts at offset 108
    rec_offset = 108
    rec_type = struct.unpack_from('<I', data, rec_offset)[0]
    rec_size = struct.unpack_from('<I', data, rec_offset + 4)[0]
    rec_data = data[rec_offset:rec_offset + rec_size]
    
    print(f"  Record: type=0x{rec_type:08X}, size={rec_size}, available={len(rec_data)}")
    
    # Scan for BITMAPINFOHEADER
    for boff in range(40, min(len(rec_data) - 40, 300)):
        potential = struct.unpack_from('<I', rec_data, boff)[0]
        
        if potential in (40, 56, 108, 124):  # BITMAPINFOHEADER variants
            width = struct.unpack_from('<i', rec_data, boff + 4)[0]
            height = struct.unpack_from('<i', rec_data, boff + 8)[0]
            planes = struct.unpack_from('<H', rec_data, boff + 12)[0]
            bpp = struct.unpack_from('<H', rec_data, boff + 14)[0]
            compression = struct.unpack_from('<I', rec_data, boff + 16)[0]
            
            if planes != 1 or bpp not in (16, 24, 32) or abs(width) > 10000 or abs(width) < 10:
                continue
            
            print(f"  DIB: {abs(width)}x{abs(height)} bpp={bpp} compression={compression}")
            
            # Calculate pixel data offset
            if potential == 40:  # BITMAPINFOHEADER
                if compression == 3:  # BI_BITFIELDS
                    pixel_off = boff + 52  # 40 + 12 bytes of masks
                else:
                    pixel_off = boff + 40
            elif potential == 56:  # BITMAPV3HEADER
                pixel_off = boff + 56
            elif potential == 108:  # BITMAPV4HEADER
                pixel_off = boff + 108
            elif potential == 124:  # BITMAPV5HEADER
                pixel_off = boff + 124
            else:
                pixel_off = boff + potential
            
            raw_pixels = rec_data[pixel_off:]
            abs_w = abs(width)
            abs_h = abs(height)
            expected = abs_w * abs_h * (bpp // 8)
            
            print(f"  Raw pixels available: {len(raw_pixels)}, expected: {expected}")
            
            if len(raw_pixels) >= expected * 0.8:
                # We have enough data
                if bpp == 32:
                    pixels_to_use = raw_pixels[:expected]
                elif bpp == 24:
                    # 24-bit BGR → needs padding
                    pixels_to_use = raw_pixels[:expected]
                elif bpp == 16:
                    # 16-bit RGB 565 or 555
                    pixels_to_use = raw_pixels[:expected]
                else:
                    continue
                
                return abs_w, abs_h, bpp, pixels_to_use
    
    return None


def convert_16bit_to_32bit(pixel_data, width, height):
    """Convert 16-bit RGB565 or RGB555 pixel data to 32-bit BGRA."""
    pixels = []
    for i in range(0, len(pixel_data), 2):
        val = struct.unpack_from('<H', pixel_data, i)[0]
        # Try RGB565 first
        r = ((val >> 11) & 0x1F) << 3  # 5-bit
        g = ((val >> 5) & 0x3F) << 2   # 6-bit
        b = (val & 0x1F) << 3          # 5-bit
        # Check if it's actually RGB555 (5-5-5 with top bit unused)
        if val & 0x8000 == 0:
            # might be RGB555
            pass  # RGB565 handles this fine
        pixels.extend([b, g, r, 255])
    return bytes(pixels)


def main():
    for img_num, (gallery_name, subdir) in sorted(GALLERY_MAP.items()):
        emf_path = os.path.join(EMF_DIR, f"image{img_num}.emf")
        if not os.path.exists(emf_path):
            print(f"SKIP: {emf_path} not found")
            continue
        
        print(f"\n{'='*50}")
        print(f"image{img_num}.emf → {gallery_name}")
        print(f"{'='*50}")
        
        result = extract_dib_from_emf(emf_path)
        if result is None:
            print(f"  FAILED - no DIB data found")
            continue
        
        width, height, bpp, pixel_data = result
        
        # Convert 16-bit to 32-bit if needed
        if bpp == 16:
            pixel_data = convert_16bit_to_32bit(pixel_data, width, height)
            bpp = 32
        
        # Write as BMP
        tmp_bmp = f"/tmp/emf_dib_{img_num}.bmp"
        w, h = write_bmp(width, height, pixel_data, tmp_bmp)
        print(f"  BMP written: {w}x{h}, {os.path.getsize(tmp_bmp)} bytes")
        
        # Verify with sips
        result = subprocess.run(['sips', '-g', 'pixelWidth', '-g', 'pixelHeight', tmp_bmp],
                               capture_output=True, text=True)
        if result.returncode == 0:
            print(f"  sips: {result.stdout.strip()}")
        else:
            print(f"  sips error: {result.stderr}")
        
        # Convert to JPEG
        output_dir = os.path.join(PUBLIC_IMG, subdir)
        os.makedirs(output_dir, exist_ok=True)
        jpg_path = os.path.join(output_dir, f"{gallery_name}.jpg")
        
        # Use sips to convert to JPEG at 85% quality
        result = subprocess.run([
            'sips', '-s', 'format', 'jpeg', '-s', 'formatOptions', '85',
            tmp_bmp, '--out', jpg_path
        ], capture_output=True, text=True)
        
        if result.returncode == 0 and os.path.exists(jpg_path):
            jpg_size = os.path.getsize(jpg_path)
            print(f"  ✅ SAVED: {jpg_path} ({jpg_size} bytes)")
            
            # Verify the JPEG with file command
            result = subprocess.run(['file', jpg_path], capture_output=True, text=True)
            print(f"  Verify: {result.stdout.strip()}")
            
            result = subprocess.run(['sips', '-g', 'pixelWidth', '-g', 'pixelHeight', jpg_path],
                                   capture_output=True, text=True)
            if result.returncode == 0:
                print(f"  Dimensions: {result.stdout.strip()}")
        else:
            print(f"  ❌ Conversion failed: {result.stderr}")
        
        # Clean up temp file
        os.unlink(tmp_bmp)

if __name__ == '__main__':
    main()
