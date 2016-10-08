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
            <li><Link to="/empower-your-users/">Home</Link></li>
            <li><Link to="/empower-your-users/button-accessible">Button Accessible</Link></li>
            <li><Link to="/empower-your-users/button-inaccessible">Button Inaccessible</Link></li>
            <li><Link to="/empower-your-users/form-accessible">Form Accessible</Link></li>
            <li><Link to="/empower-your-users/form-inaccessible">Form Inaccessible</Link></li>
            <li><Link to="/empower-your-users/image-accessible">Image Accessible</Link></li>
            <li><Link to="/empower-your-users/image-inaccessible">Image Inaccessible</Link></li>
            <li><Link to="/empower-your-users/table-accessible">Table Accessible</Link></li>
            <li><Link to="/empower-your-users/table-inaccessible">Table Inaccessible</Link></li>
            <li><Link to="/empower-your-users/table-layout">Table Layout</Link></li>
          </ul>
        </div>
        <div className="col col-3-4 col-sm-1-2 v-a-t container-example">
          <Match pattern="/empower-your-users/button-accessible" component={ButtonAccessible} />
          <Match pattern="/empower-your-users/button-inaccessible" component={ButtonInaccessible} />
          <Match pattern="/empower-your-users/form-accessible" component={FormAccessible} />
          <Match pattern="/empower-your-users/form-inaccessible" component={FormInaccessible} />
          <Match pattern="/empower-your-users/image-accessible" component={ImageAccessible} />
          <Match pattern="/empower-your-users/image-inaccessible" component={ImageInaccessible} />
          <Match pattern="/empower-your-users/table-accessible" component={TableAccessible} />
          <Match pattern="/empower-your-users/table-inaccessible" component={TableInaccessible} />
          <Match pattern="/empower-your-users/table-layout" component={TableLayout} />
        </div>
      </div>
    </div>
  </Router>
)

export default App;
