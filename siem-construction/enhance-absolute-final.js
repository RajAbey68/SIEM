const sharp = require('sharp');

const inputPath = 'public/images/New-SIEM-LoGo.jpeg';
const outputPath = 'public/images/New-SIEM-LoGo-Enhanced.png';

async function processImage() {
  try {
    await sharp(inputPath)
      .sharpen({ sigma: 1.5, m1: 1.5, m2: 2.0 }) // Sharpen the edges
      .normalize() // Boost contrast to keep midnight blue rich
      .toFile(outputPath);
    console.log('Successfully enhanced the absolute final logo!');
  } catch (err) {
    console.error('Error:', err);
  }
}

processImage();
