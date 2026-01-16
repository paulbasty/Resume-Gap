import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inPath = path.join(__dirname, '..', 'public', 'timex.html');
const outPath = path.join(__dirname, '..', 'AppAssets', 'timex_html.js');

async function main() {
  try {
    if (!(await fs.stat(inPath))) {
      console.error('Source HTML not found:', inPath);
      process.exit(1);
    }

    const html = await fs.readFile(inPath, 'utf8');
    const out = 'export default ' + JSON.stringify(html) + '\n';
    await fs.writeFile(outPath, out, 'utf8');
    console.log('Wrote', outPath);
  } catch (err) {
    if (err.code === 'ENOENT') {
      console.error('Source HTML not found:', inPath);
    } else {
      console.error('Error:', err);
    }
    process.exit(1);
  }
}

main();
