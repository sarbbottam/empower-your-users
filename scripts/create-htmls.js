import fs from 'fs';
import path from 'path';

import pages from '../src/pages';
const dir = path.resolve(process.cwd(), 'build');
const encoding = 'utf8';

Object.keys(pages).forEach(page => {
  fs.readFile(path.resolve(dir, 'index.html'), encoding, (error, data) => {
    if (error) {
      return;
    }
    fs.writeFile(path.resolve(dir, `${page}.html`), data, encoding, (error) => {
      if (error) {
        return;
      }
    });
  });
});
