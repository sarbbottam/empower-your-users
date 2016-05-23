import React from 'react';
import ReactDOMServer from 'react-dom/server';

import Base from '../components/common/base';
import Layout from '../components/common/layout';
import TableInaccessible from '../components/table-inaccessible';

export default () => {
  return ReactDOMServer.renderToStaticMarkup(
    <Base>
      <Layout heading="Table - Inaccessible">
        <TableInaccessible/>
      </Layout>
    </Base>
  );
};
