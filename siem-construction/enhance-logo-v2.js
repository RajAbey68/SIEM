const sharp = require('sharp');
const fs = require('fs');

const inputPath = '/Users/arajiv/Downloads/WhatsApp Image 2026-05-07 at 06.27.49 (2).jpeg';
const outputPath = 'public/images/logo-v2.jpg';

async function processImage() {
  try {
    // We want to enhance and sharpen it while keeping the midnight blue color
    // A great way to do this for a two-color logo is to use a color matrix or just sharpen aggressively
    await sharp(inputPath)
      .sharpen({ sigma: 2.0, m1: 1.5, m2: 2.5 })
      .modulate({
        brightness: 1.0,
        saturation: 1.2,
      })
      .linear(1.2, -10) // Increase contrast to make edges crisper
      .toFile(outputPath);
      
    // Let's also create a transparent PNG version which might be even better for a Navbar
    await sharp(inputPath)
      .sharpen({ sigma: 2.0, m1: 1.5, m2: 2.5 })
      .toFormat('png')
      .toFile('public/images/logo-v2.png');
      
    console.log('Successfully enhanced and saved logo-v2.jpg and logo-v2.png');
  } catch (err) {
    console.error('Error:', err);
  }
}

processImage();
