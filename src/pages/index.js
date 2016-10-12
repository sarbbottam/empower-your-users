import {Accessible as ButtonAccessible, Inaccessible as ButtonInaccessible} from '../components/buttons';
import {Accessible as FormAccessible, Inaccessible as FormInaccessible} from '../components/forms';
import {Accessible as ImageAccessible, Inaccessible as ImageInaccessible} from '../components/images';
import {Accessible as TableAccessible, Inaccessible as TableInaccessible, Layout as TableLayout} from '../components/tables';

export default {
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
