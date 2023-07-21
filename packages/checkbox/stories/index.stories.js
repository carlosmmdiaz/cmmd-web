import '../cmmd-checkbox.js';

export default {
  title: 'Components/Checkbox',
};

export const example = () =>
  `
    <cmmd-checkbox label="Archimedes" .choiceValue=${'Archimedes'}></cmmd-checkbox>
  `;

export const disabled = () =>
  `
    <cmmd-checkbox label="Archimedes" .choiceValue=${'Archimedes'} disabled></cmmd-checkbox>
  `;
