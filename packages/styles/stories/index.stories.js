import './demo.js';
import { crossIcon, plusIcon, tickIcon } from '../src/icons.js';

export default {
  title: 'Styles',
  component: 'Colors',
};

export const colors = () => `<cmmd-styles></cmmd-styles>`;

export const icons = () => `${crossIcon} ${plusIcon} ${tickIcon}`;
