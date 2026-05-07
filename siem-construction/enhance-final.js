const sharp = require('sharp');

const inputPath = '/Users/arajiv/Downloads/siem-logo-final.png';
const outputPath = 'public/images/logo-final.png';

async function processImage() {
  try {
    await sharp(inputPath)
      .sharpen({ sigma: 1.5, m1: 1.5, m2: 2.0 })
      .toFormat('png')
      .toFile(outputPath);
    console.log('Successfully enhanced siem-logo-final.png');
  } catch (err) {
    console.error('Error:', err);
  }
}

processImage();
