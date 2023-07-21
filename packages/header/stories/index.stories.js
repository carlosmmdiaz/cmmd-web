import '@cmmd-web/button/cmmd-button.js';

import '../cmmd-header.js';

export default {
  title: 'Components/Header',
};

export const example = () =>
  `
    <cmmd-header headerTitle="My App">
      <cmmd-button danger>Logout</cmmd-button>
    </cmmd-header>
  `;
