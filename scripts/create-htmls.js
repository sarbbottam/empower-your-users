import fs from 'fs';
import path from 'path';

import React from 'react';
import { renderToString } from 'react-dom/server';
import { ServerRouter, createServerRenderContext } from 'react-router';

import App from '../src/app';

import { basePath, pages } from '../src/routes';

const dir = path.resolve(process.cwd(), 'build');
const encoding = 'utf8';

const html = fs.readFileSync(path.resolve(dir, 'index.html'), encoding);

function createHTML (page) {
  const context = createServerRenderContext();
    const markup = renderToString(
      <ServerRouter
        location={`${basePath}${page.relativePath}`}
        context={context}
      >
        <App/>
      </ServerRouter>
    )

    const data = html.replace('<div id="root"></div>', `<div id="root">${markup}</div>`);

    fs.writeFile(path.resolve(dir, page.relativePath), data, encoding, (error) => {
      if (error) {
        return;
      }
    });
}

pages.forEach(createHTML);

