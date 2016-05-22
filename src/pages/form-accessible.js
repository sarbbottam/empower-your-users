import React from 'react';
import ReactDOMServer from 'react-dom/server';

import Base from '../components/common/base';
import Layout from '../components/common/layout';
import FormAccessible from '../components/form-accessible';

export default () => {
  return ReactDOMServer.renderToStaticMarkup(
    <Base>
      <Layout heading="Form - Accessible">
        <FormAccessible/>
      </Layout>
    </Base>
  );
};
