import fs from 'fs';
import path from 'path';
import {html as beautify} from 'js-beautify';
import pages from './pages.js';

const DIST_DIR = 'dist';
const BASE = '../src/pages/base.js';

if (!fs.existsSync(DIST_DIR)) {
  fs.mkdirSync(DIST_DIR);
}

// build static htmls from component
function build(page) {
  let markup = require(path.resolve(__dirname, BASE)).default(page);
  markup = beautify(markup, {indent_size: 2}); // eslint-disable-line camelcase
  const fileName = path.join(process.cwd(), 'dist', `${page.component}.html`);

  fs.writeFile(fileName, markup, error => {
    if (error) {
      return console.log(error);
    }
    console.log('created', fileName);
  });
}

// build example pages
pages.forEach(build);

const contents = [];

pages.forEach(page => {
  contents.push({
    title: page.component,
    path: `${page.component}.html`
  });
});

// build index page for example pages
build({
  component: 'index',
  data: contents
});
