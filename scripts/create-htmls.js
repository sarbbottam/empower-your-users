const fs = require('fs');
const path = require('path');

const pages = require('../config/pages');
const dir = path.resolve(process.cwd(), 'build');
const encoding = 'utf8';

pages.forEach(page => {
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