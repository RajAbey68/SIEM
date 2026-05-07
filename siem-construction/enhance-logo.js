const sharp = require('sharp');
const fs = require('fs');

async function processImage(inputPath, outputPath) {
  try {
    await sharp(inputPath)
      .sharpen({ sigma: 1.5, m1: 1.5, m2: 2.0 })
      .normalize()
      .toFile(outputPath);
    console.log(`Processed ${inputPath} to ${outputPath}`);
  } catch (err) {
    console.error(`Error processing ${inputPath}:`, err);
  }
}

const downloadsDir = '/Users/arajiv/Downloads';
const files = [
  'WhatsApp Image 2026-05-07 at 06.27.49 (2).jpeg',
  'WhatsApp Image 2026-05-07 at 06.27.49 (1).jpeg',
  'WhatsApp Image 2026-05-07 at 06.27.49.jpeg',
  'WhatsApp Image 2026-05-07 at 06.27.48.jpeg'
];

async function main() {
  for (let i = 0; i < files.length; i++) {
    const input = `${downloadsDir}/${files[i]}`;
    if (fs.existsSync(input)) {
      await processImage(input, `public/images/logo-cand-${i+1}.jpg`);
    }
  }
}

main();
