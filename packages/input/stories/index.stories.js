import { html } from 'lit-html';
import '../cmmd-input.js';

export default {
  title: 'Components/Input',
};

export const example = () =>
  html`
    <cmmd-input>
      <label slot="label">Input with label</label>
    </cmmd-input>
  `;
