import { html } from 'lit-html';
import '../cmmd-checkbox.js';

export default {
  title: 'Components/Checkbox',
};

export const example = () =>
  html`
    <cmmd-checkbox label="Archimedes" .choiceValue=${'Archimedes'}></cmmd-checkbox>
  `;

export const disabled = () =>
  html`
    <cmmd-checkbox label="Archimedes" .choiceValue=${'Archimedes'} disabled></cmmd-checkbox>
  `;
