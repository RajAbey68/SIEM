const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const downloadsDir = '/Users/arajiv/Downloads';
const files = [
  'WhatsApp Image 2026-05-07 at 06.27.48.jpeg',
  'WhatsApp Image 2026-05-07 at 06.27.49.jpeg',
  'WhatsApp Image 2026-05-07 at 06.27.49 (1).jpeg',
  'WhatsApp Image 2026-05-07 at 06.27.49 (2).jpeg'
];

async function analyze() {
  for (const file of files) {
    const filePath = path.join(downloadsDir, file);
    if (!fs.existsSync(filePath)) continue;
    
    try {
      const { info, data } = await sharp(filePath)
        .trim({ threshold: 240 }) // Remove near-white pixels
        .toBuffer({ resolveWithObject: true });
        
      console.log(`File: ${file}`);
      console.log(`Trimmed size: ${info.width}x${info.height} (Aspect ratio: ${(info.width/info.height).toFixed(2)})`);
    } catch (e) {
      console.log(`Error on ${file}: ${e.message}`);
    }
  }
}

analyze();
