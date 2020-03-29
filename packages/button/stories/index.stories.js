import { html } from 'lit-html';
import '../cmmd-button.js';
import { plusIcon, crossIcon } from '@cmmd-web/styles';

export default {
  title: 'Components',
  component: 'Button',
};

export const button = () =>
  html`
    <cmmd-button>Acept</cmmd-button>
    <br />
    <cmmd-button secondary>Cancel</cmmd-button>
    <br />
    <cmmd-button rounded>${plusIcon}</cmmd-button>
    <br />
    <cmmd-button rounded secondary>${crossIcon}</cmmd-button>
  `;
