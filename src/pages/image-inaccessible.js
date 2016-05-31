import React from 'react';
import ReactDOMServer from 'react-dom/server';

import Base from '../components/common/base';
import Layout from '../components/common/layout';
import ImageInaccessible from '../components/image-inaccessible';

export default () => {
  return ReactDOMServer.renderToStaticMarkup(
    <Base>
      <Layout heading="Image - Inaccessible">
        <ImageInaccessible/>
      </Layout>
    </Base>
  );
};
