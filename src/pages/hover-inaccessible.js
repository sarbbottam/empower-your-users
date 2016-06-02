import React from 'react';
import ReactDOMServer from 'react-dom/server';

import Base from '../components/common/base';
import Layout from '../components/common/layout';
import HoverInaccessible from '../components/hover-inaccessible';

export default () => {
  return ReactDOMServer.renderToStaticMarkup(
    <Base>
      <Layout heading="Hover - Inaccessible">
        <HoverInaccessible/>
      </Layout>
    </Base>
  );
};
