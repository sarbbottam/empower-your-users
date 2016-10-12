const {Accessible: ButtonAccessible, Inaccessible: ButtonInaccessible} = require('../components/buttons');
const {Accessible: FormAccessible, Inaccessible: FormInaccessible} = require('../components/forms');
const {Accessible: ImageAccessible, Inaccessible: ImageInaccessible} = require('../components/images');
const {Accessible: TableAccessible, Inaccessible: TableInaccessible, Layout: TableLayout} = require('../components/tables');

module.exports = {
  'button-accessible': {
    component: ButtonAccessible,
    text: 'Accessible Button'
  },
  'button-inaccessible': {
    component: ButtonInaccessible,
    text: 'Inaccessible Button'
  },
  'form-accessible': {
    component: FormAccessible,
    text: 'Accessible Form'
  },
  'form-inaccessible': {
    component: FormInaccessible,
    text: 'Inaccessible Form'
  },
  'image-accessible': {
    component: ImageAccessible,
    text: 'Accessible Image'
  },
  'image-inaccessible': {
    component: ImageInaccessible,
    text: 'Inaccessible Image'
  },
  'table-accessible': {
    component: TableAccessible,
    text: 'Accessible Table'
  },
  'table-inaccessible': {
    component: TableInaccessible,
    text: 'Inaccessible Table'
  },
  'table-layout': {
    component: TableLayout,
    text: 'Table layout'
  }
};
