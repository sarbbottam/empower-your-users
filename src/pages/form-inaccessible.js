import React from 'react';
import ReactDOMServer from 'react-dom/server';

import Base from '../components/common/base';
import Layout from '../components/common/layout';
import FormInaccessible from '../components/form-inaccessible';

export default () => {
  return ReactDOMServer.renderToStaticMarkup(
    <Base>
      <Layout>
        <FormInaccessible/>
      </Layout>
    </Base>
  );
};
