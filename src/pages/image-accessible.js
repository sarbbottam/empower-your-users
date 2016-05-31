import React from 'react';
import ReactDOMServer from 'react-dom/server';

import Base from '../components/common/base';
import Layout from '../components/common/layout';
import ImageAccessible from '../components/image-accessible';

export default () => {
  return ReactDOMServer.renderToStaticMarkup(
    <Base>
      <Layout heading="Image - Accessible">
        <ImageAccessible/>
      </Layout>
    </Base>
  );
};
