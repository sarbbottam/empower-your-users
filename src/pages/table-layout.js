import React from 'react';
import ReactDOMServer from 'react-dom/server';

import Base from '../components/common/base';
import Layout from '../components/common/layout';
import TableLayout from '../components/table-layout';

export default () => {
  return ReactDOMServer.renderToStaticMarkup(
    <Base>
      <Layout heading="Table - Layout">
        <TableLayout/>
      </Layout>
    </Base>
  );
};
