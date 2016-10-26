import React from 'react';

import Match from 'react-router/Match';
import Link from 'react-router/Link';

import routes from './routes';

const MatchWithSubRoutes = (route) => (
  <Match {...route} render={(props) => (
    <route.component {...props} routes={route.routes}/>
  )}/>
)

const App = () => (
  <div className="container">
    <h1 className="t-a-c f-z-20px">Examples - Empower your users</h1>
    <div className="row m-t-20px">
      <div className="col col-1-4 col-sm-1-2 v-a-t">
        <ul>
          {
            routes.map(route => {
              return <li key={route.pattern}><Link to={route.pattern}>{route.text}</Link></li>
            })
          }
        </ul>
      </div>
      <div className="col col-3-4 col-sm-1-2 v-a-t container-example">
        {
          routes.map((route,i) => {
            if (route.component) {
              return <MatchWithSubRoutes key={i} {...route}/>
            }
            return '';
          })
        }
      </div>
    </div>
  </div>
)

export default App;
