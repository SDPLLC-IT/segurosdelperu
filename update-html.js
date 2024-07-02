import fs from 'fs';
import path from 'path';

// Get the directory path of the current module
const __dirname = path.dirname(new URL(import.meta.url).pathname);

// Specify the path to your HTML file
const htmlFilePath = path.resolve(__dirname, 'dist/index.html');

// Specify the filename of the obfuscated JavaScript file
const obfuscatedFileName = 'index-DNwCemSa.min.js';

// Read the HTML file
fs.readFile(htmlFilePath, 'utf8', (err, html) => {
  if (err) {
    console.error('Error reading HTML file:', err);
    return;
  }

  // Replace the original JavaScript file reference
  const updatedHtml = html.replace(/<script type="module" crossorigin src="\/assets\/index-DNwCemSa\.js"><\/script>/, `<script type="module" crossorigin src="/assets/${obfuscatedFileName}"></script>`);
  // Write the updated HTML back to the file
  fs.writeFile(htmlFilePath, updatedHtml, 'utf8', (err) => {
    if (err) {
      console.error('Error writing updated HTML file:', err);
      return;
    }
    console.log('HTML file updated successfully!');
  });
});
