import fs from 'fs';
import path from 'path';
import {html as beautify} from 'js-beautify';
import pages from './pages.js';

const DIST_DIR = 'dist';
const BASE = '../src/pages/base.js';

if (!fs.existsSync(DIST_DIR)) {
  fs.mkdirSync(DIST_DIR);
}

pages.forEach(page => {
  let markup = require(path.resolve(__dirname, BASE)).default(page);
  markup = beautify(markup, {indent_size: 2}); // eslint-disable-line camelcase
  const fileName = path.join(process.cwd(), 'dist', `${page.component}.html`);

  fs.writeFile(fileName, markup, error => {
    if (error) {
      return console.log(error);
    }
    console.log('created', fileName);
  });
});
