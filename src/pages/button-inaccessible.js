import React from 'react';
import ReactDOMServer from 'react-dom/server';

import Base from '../components/common/base';
import Layout from '../components/common/layout';
import ButtonInaccessible from '../components/button-inaccessible';

export default () => {
  return ReactDOMServer.renderToStaticMarkup(
    <Base js="js/button.js">
      <Layout heading="Button - Inaccessible">
        <ButtonInaccessible/>
      </Layout>
    </Base>
  );
};
