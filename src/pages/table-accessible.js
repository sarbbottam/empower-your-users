import React from 'react';
import ReactDOMServer from 'react-dom/server';

import Base from '../components/common/base';
import Layout from '../components/common/layout';
import TableAccessible from '../components/table-accessible';

export default () => {
  return ReactDOMServer.renderToStaticMarkup(
    <Base>
      <Layout heading="Table - Accessible">
        <TableAccessible/>
      </Layout>
    </Base>
  );
};
