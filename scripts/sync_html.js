const fs = require('fs');
const path = require('path');

const inPath = path.join(__dirname, '..', 'public', 'timex.html');
const outPath = path.join(__dirname, '..', 'AppAssets', 'timex_html.js');

if (!fs.existsSync(inPath)) {
  console.error('Source HTML not found:', inPath);
  process.exit(1);
}

const html = fs.readFileSync(inPath, 'utf8');
const out = 'export default ' + JSON.stringify(html) + '\n';
fs.writeFileSync(outPath, out, 'utf8');
console.log('Wrote', outPath);
