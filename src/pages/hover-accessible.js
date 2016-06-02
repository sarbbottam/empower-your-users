import React from 'react';
import ReactDOMServer from 'react-dom/server';

import Base from '../components/common/base';
import Layout from '../components/common/layout';
import HoverAccessible from '../components/hover-accessible';

export default () => {
  return ReactDOMServer.renderToStaticMarkup(
    <Base>
      <Layout heading="Hover - Accessible">
        <HoverAccessible/>
      </Layout>
    </Base>
  );
};
