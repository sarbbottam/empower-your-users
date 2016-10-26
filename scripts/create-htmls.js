import fs from 'fs';
import path from 'path';
import mkdirp from 'mkdirp';

import React from 'react';
import { renderToString } from 'react-dom/server';
import { ServerRouter, createServerRenderContext } from 'react-router';

import url from 'url';
import pkg from '../package.json';
const pathname = url.parse(pkg.homepage).pathname;

import App from '../src/app';

import routes from '../src/routes';

const buildDir = path.resolve(process.cwd(), 'build');
const encoding = 'utf8';

const html = fs.readFileSync(path.resolve(buildDir, 'index.html'), encoding);

function createHTML (route) {
  const context = createServerRenderContext();
    const markup = renderToString(
      <ServerRouter
        location={route.pattern}
        context={context}
      >
        <App/>
      </ServerRouter>
    )

    const data = html.replace('<div id="root"></div>', `<div id="root">${markup}</div>`);
    const currentDir = path.resolve(buildDir, route.pattern.replace(`${pathname}/`, ''));
    mkdirp(currentDir, (error) => {
      if (!error) {
        fs.writeFile(path.resolve(currentDir, 'index.html'), data, encoding, (error) => {
          if (error) {
            return;
          }
        });
      }
    })

}
function createHTMLs(routes) {
  routes.forEach(route => {
    console.log(`creating html for:`, route.pattern);
    createHTML(route)
    if (route.routes) {
      createHTMLs(route.routes)
    }
  });
}

createHTMLs(routes);

