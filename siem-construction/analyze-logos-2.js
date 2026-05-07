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
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const filePath = path.join(downloadsDir, file);
    if (!fs.existsSync(filePath)) continue;
    
    try {
      // Crop out the top and bottom 100 pixels, then trim
      const { info, data } = await sharp(filePath)
        .extract({ left: 0, top: 100, width: 960, height: 1080 })
        .trim({ threshold: 230 })
        .toBuffer({ resolveWithObject: true });
        
      console.log(`File: ${file}`);
      console.log(`Trimmed size: ${info.width}x${info.height} (Aspect ratio: ${(info.width/info.height).toFixed(2)})`);
      
      // Save it temporarily so I can inspect
      await sharp(data).toFile(`public/images/debug-${i}.jpg`);
    } catch (e) {
      console.log(`Error on ${file}: ${e.message}`);
    }
  }
}

analyze();
