import fs from 'fs';
import path from 'path';
import {html as beautify} from 'js-beautify';

const DIST_DIR = 'dist';
const PAGES_DIR = '../src/pages';

if (!fs.existsSync(DIST_DIR)) {
  fs.mkdirSync(DIST_DIR);
}

fs.readdirSync(path.resolve(__dirname, PAGES_DIR)).forEach(page => {
  let markup = require(path.resolve(__dirname, PAGES_DIR, page)).default();
  markup = beautify(markup, {indent_size: 2}); // eslint-disable-line camelcase
  const fileName = path.join(process.cwd(), 'dist', `${page.replace('js', 'html')}`);

  fs.writeFile(fileName, markup, error => {
    if (error) {
      return console.log(error);
    }
    console.log('created', fileName);
  });
});
