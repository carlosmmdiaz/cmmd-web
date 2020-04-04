import { html } from 'lit-html';
import '../cmmd-styles.js';
import { crossIcon, plusIcon, tickIcon } from './../src/icons.js';

export default {
  title: 'Styles',
  component: 'Colors',
};

export const colors = () =>
  html`
    <cmmd-styles></cmmd-styles>
  `;
export const icons = () =>
  html`
    ${crossIcon} ${plusIcon} ${tickIcon}
  `;
