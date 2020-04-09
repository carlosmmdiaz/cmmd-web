import { html } from 'lit-html';
import '../cmmd-header.js';

import { plusIcon } from '@cmmd-web/styles';

export default {
  title: 'Components/Header',
};

export const example = () =>
  html`
    <cmmd-header title="My App">
      <div slot="logo">${plusIcon}</div>
      <div slot="menu">
        <button>Exit</button>
      </div>
    </cmmd-header>
  `;
