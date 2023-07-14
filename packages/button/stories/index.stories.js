import '../cmmd-button.js';
import { plusIcon, crossIcon } from '@cmmd-web/styles';

export default {
  title: 'Components/Button',
};

export const example = () =>
  `
    <cmmd-button>Accept</cmmd-button>
    <cmmd-button danger>Cancel</cmmd-button>
  `;

export const roundButton = () =>
  `
    <cmmd-button rounded>${plusIcon}</cmmd-button>
    <cmmd-button rounded danger>${crossIcon}</cmmd-button>
  `;

export const disabledButton = () =>
  `
    <cmmd-button disabled>Accept</cmmd-button>
    <cmmd-button rounded disabled>${plusIcon}</cmmd-button>
  `;
