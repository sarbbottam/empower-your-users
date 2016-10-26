import React from 'react';

import Match from 'react-router/Match';
import Link from 'react-router/Link';

const Main = ({ routes }) => {
  return (
    <div>
      <ul>
        {
          routes.map(route => {
            return <li key={route.pattern}><Link to={route.pattern}>{route.text}</Link></li>
          })
        }
      </ul>
      {
        routes.map(route => {
          if (route.component) {
            return <Match key={route.pattern} pattern={route.pattern} component={route.component} />
          }
          return '';
        })
      }
    </div>
  );
}

export default Main;
