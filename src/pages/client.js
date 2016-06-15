import React from 'react';
import {render} from 'react-dom';

import Layout from '../components/common/layout.jsx';

import Index from '../components/index.jsx';
import ButtonAccessible from '../components/button-accessible.jsx';
import ButtonInaccessible from '../components/button-inaccessible.jsx';
import FormAccessible from '../components/form-accessible.jsx';
import FormInaccessible from '../components/form-inaccessible.jsx';
import HoverAccessible from '../components/hover-accessible.jsx';
import HoverInaccessible from '../components/hover-inaccessible.jsx';
import ImageAccessible from '../components/image-accessible.jsx';
import ImageInaccessible from '../components/image-inaccessible.jsx';
import TableAccessible from '../components/table-accessible.jsx';
import TableInaccessible from '../components/table-inaccessible.jsx';
import TableLayout from '../components/table-layout.jsx';

import pages from './';

const components = {
  'index': Index,
  'button-accessible': ButtonAccessible,
  'button-inaccessible': ButtonInaccessible,
  'form-accessible': FormAccessible,
  'form-inaccessible': FormInaccessible,
  'hover-accessible': HoverAccessible,
  'hover-inaccessible': HoverInaccessible,
  'image-accessible': ImageAccessible,
  'image-inaccessible': ImageInaccessible,
  'table-accessible': TableAccessible,
  'table-inaccessible': TableInaccessible,
  'table-layout': TableLayout
};

const contents = [];

pages.forEach(page => {
  contents.push({
    title: page.component,
    path: `${page.component}.html`
  });
});

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      component: 'index',
      data: contents
    };
    this.updateState = this.updateState.bind(this);
  }

  updateState(e) {
    const href = e.target.getAttribute('href');
    const component = href.split('.')[0];
    this.setState({
      component
    });
  }

  render() {
    const Component = components[this.state.component];
    const heading = this.state.component.split('-').map(word => {
      return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
    }).join(' - ');

    return (
      <Layout heading={heading} isIndex={this.state.component === 'index'}>
        <Component data={this.state.data} updateState={this.updateState}/>
      </Layout>
    );
  }
}

render(
  <App/>,
  document.getElementById('app')
);
