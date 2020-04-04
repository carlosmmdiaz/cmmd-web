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
    <cmmd-button danger>Cancel</cmmd-button>
  `;

export const roundButton = () =>
  html`
    <cmmd-button rounded>${plusIcon}</cmmd-button>
    <cmmd-button rounded danger>${crossIcon}</cmmd-button>
  `;

export const disabledButton = () =>
  html`
    <cmmd-button disabled>Acept</cmmd-button>
    <cmmd-button rounded disabled>${plusIcon}</cmmd-button>
  `;
