import {Accessible as ButtonAccessible, Inaccessible as ButtonInaccessible} from '../components/buttons';
import {Accessible as FormAccessible, Inaccessible as FormInaccessible} from '../components/forms';
import {Accessible as ImageAccessible, Inaccessible as ImageInaccessible} from '../components/images';
import {Accessible as TableAccessible, Inaccessible as TableInaccessible, Layout as TableLayout} from '../components/tables';

import url from 'url';
import pkg from '../../package.json';
const pathname = url.parse(pkg.homepage).pathname;

export const basePath = `${pathname}/`;

export const pages = [
  {
    text: 'Home',
    relativePath: ''
  },
  {
    component: ButtonAccessible,
    text: 'Accessible Button',
    relativePath: 'button-accessible.html'
  },
  {
    component: ButtonInaccessible,
    text: 'Inaccessible Button',
    relativePath: 'button-inaccessible.html'
  },
  {
    component: FormAccessible,
    text: 'Accessible Form',
    relativePath: 'form-accessible.html'
  },
  {
    component: FormInaccessible,
    text: 'Inaccessible Form',
    relativePath: 'form-inaccessible.html'
  },
  {
    component: ImageAccessible,
    text: 'Accessible Image',
    relativePath: 'image-accessible.html'
  },
  {
    component: ImageInaccessible,
    text: 'Inaccessible Image',
    relativePath: 'image-inaccessible.html'
  },
  {
    component: TableAccessible,
    text: 'Accessible Table',
    relativePath: 'table-accessible.html'
  },
  {
    component: TableInaccessible,
    text: 'Inaccessible Table',
    relativePath: 'table-inaccessible.html'
  },
  {
    component: TableLayout,
    text: 'Table layout',
    relativePath: 'table-layout.html'
  }
];
