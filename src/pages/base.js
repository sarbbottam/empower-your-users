import React from 'react';
import ReactDOMServer from 'react-dom/server';

import Base from '../components/common/base';
import Layout from '../components/common/layout';

export default config => {
  const Component = require(`../components/${config.component}`).default;
  const heading = config.component.split('-').map(word => {
    return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
  }).join(' - ');
  const js = `js/${config.js}`;

  return ReactDOMServer.renderToStaticMarkup(
    <Base js={js}>
      <Layout heading={heading}>
        <Component data={config.data}/>
      </Layout>
    </Base>
  );
};
