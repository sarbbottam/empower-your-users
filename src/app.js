import React from 'react';

import Router from 'react-router/BrowserRouter';
import Match from 'react-router/Match';
import Link from 'react-router/Link';

import {Accessible as ButtonAccessible, Inaccessible as ButtonInaccessible} from './components/buttons';
import {Accessible as FormAccessible, Inaccessible as FormInaccessible} from './components/forms';
import {Accessible as ImageAccessible, Inaccessible as ImageInaccessible} from './components/images';
import {Accessible as TableAccessible, Inaccessible as TableInaccessible, Layout as TableLayout} from './components/tables';

const App = () => (
  <Router>
    <div className="container">
      <h1 className="t-a-c f-z-20px">Examples - Empower your users</h1>
      <div className="row m-t-20px">
        <div className="col col-1-4 col-sm-1-2 v-a-t">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/button-accessible">Button Accessible</Link></li>
            <li><Link to="/button-inaccessible">Button Inaccessible</Link></li>
            <li><Link to="/form-accessible">Form Accessible</Link></li>
            <li><Link to="/form-inaccessible">Form Inaccessible</Link></li>
            <li><Link to="/image-accessible">Image Accessible</Link></li>
            <li><Link to="/image-inaccessible">Image Inaccessible</Link></li>
            <li><Link to="/table-accessible">Table Accessible</Link></li>
            <li><Link to="/table-inaccessible">Table Inaccessible</Link></li>
            <li><Link to="/table-layout">Table Layout</Link></li>
          </ul>
        </div>
        <div className="col col-3-4 col-sm-1-2 v-a-t container-example">
          <Match pattern="/button-accessible" component={ButtonAccessible} />
          <Match pattern="/button-inaccessible" component={ButtonInaccessible} />
          <Match pattern="/form-accessible" component={FormAccessible} />
          <Match pattern="/form-inaccessible" component={FormInaccessible} />
          <Match pattern="/image-accessible" component={ImageAccessible} />
          <Match pattern="/image-inaccessible" component={ImageInaccessible} />
          <Match pattern="/table-accessible" component={TableAccessible} />
          <Match pattern="/table-inaccessible" component={TableInaccessible} />
          <Match pattern="/table-layout" component={TableLayout} />
        </div>
      </div>
    </div>
  </Router>
)

export default App;
