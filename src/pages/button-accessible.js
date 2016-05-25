import React from 'react';
import ReactDOMServer from 'react-dom/server';

import Base from '../components/common/base';
import Layout from '../components/common/layout';
import ButtonAccessible from '../components/button-accessible';

export default () => {
  return ReactDOMServer.renderToStaticMarkup(
    <Base js="js/button.js">
      <Layout heading="Button - Accessible">
        <ButtonAccessible/>
      </Layout>
    </Base>
  );
};
