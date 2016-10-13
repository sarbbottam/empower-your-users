import React from 'react';

import Match from 'react-router/Match';
import Link from 'react-router/Link';

import { basePath, pages } from './routes';

const App = () => (
  <div className="container">
    <h1 className="t-a-c f-z-20px">Examples - Empower your users</h1>
    <div className="row m-t-20px">
      <div className="col col-1-4 col-sm-1-2 v-a-t">
        <ul>
          {
            pages.map(page => {
              return <li key={page.relativePath}><Link to={`${basePath}${page.relativePath}`}>{page.text}</Link></li>
            })
          }
        </ul>
      </div>
      <div className="col col-3-4 col-sm-1-2 v-a-t container-example">
        {
          pages.map(page => {
            if (page.component) {
              return <Match key={page.relativePath} pattern={`${basePath}${page.relativePath}`} component={page.component} />
            }
            return '';
          })
        }
      </div>
    </div>
  </div>
)

export default App;
