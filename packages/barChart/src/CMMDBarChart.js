import { LitElement, html, css } from 'lit';

import { darkRed } from '@cmmd-web/styles';

export class CMMDBarChart extends LitElement {
  static get styles() {
    return [
      css`
        :host {
          color: ${darkRed};
        }
      `,
    ];
  }

  render() {
    return html`
      <h1>Hello World!</h1>
    `;
  }
}
