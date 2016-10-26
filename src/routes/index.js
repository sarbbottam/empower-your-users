import Main from '../components/routes/main';
import {Accessible as ButtonAccessible, Inaccessible as ButtonInaccessible} from '../components/routes/buttons';
import {Accessible as FormAccessible, Inaccessible as FormInaccessible} from '../components/routes/forms';
import {Accessible as ImageAccessible, Inaccessible as ImageInaccessible} from '../components/routes/images';
import {Accessible as TableAccessible, Inaccessible as TableInaccessible, Layout as TableLayout} from '../components/routes/tables';

import url from 'url';
import pkg from '../../package.json';
const pathname = url.parse(pkg.homepage).pathname;

const routes = [
  {
    text: 'Home',
    pattern: `${pathname}/`
  },
  {
    component: Main,
    text: 'Button',
    pattern: `${pathname}/button`,
    routes: [{
      component: ButtonAccessible,
      text: 'Accessible Button',
      pattern: `${pathname}/button/accessible`
    },
    {
      component: ButtonInaccessible,
      text: 'Inaccessible Button',
      pattern: `${pathname}/button/inaccessible`
    }]
  },
  {
    component: Main,
    text: 'Form',
    pattern: `${pathname}/form`,
    routes: [{
      component: FormAccessible,
      text: 'Accessible Form',
      pattern: `${pathname}/form/accessible`
    },
    {
      component: FormInaccessible,
      text: 'Inaccessible Form',
      pattern: `${pathname}/form/inaccessible`
    }]
  },
  {
    component: Main,
    text: 'Image',
    pattern: `${pathname}/image`,
    routes: [{
      component: ImageAccessible,
      text: 'Accessible Image',
      pattern: `${pathname}/image/accessible`
    },
    {
      component: ImageInaccessible,
      text: 'Inaccessible Image',
      pattern: `${pathname}/image/inaccessible`
    }]
  },
  {
    component: Main,
    text: 'Table',
    pattern: `${pathname}/table`,
    routes: [{
      component: TableAccessible,
      text: 'Accessible Table',
      pattern: `${pathname}/table/accessible`
    },
    {
      component: TableInaccessible,
      text: 'Inaccessible Table',
      pattern: `${pathname}/table/inaccessible`
    },
    {
      component: TableLayout,
      text: 'Table layout',
      pattern: `${pathname}/table/layout`
    }]
  }
];

export default routes;
