import { css, LitElement, html } from 'lit-element';

import { grey, darkgrey } from '@cmmd-web/styles';

export class CMMDCard extends LitElement {
  static get styles() {
    return css`
      .card {
        background: ${grey};
        padding: 1rem;
        border-radius: 0.5rem;
        box-shadow: 1rem 1rem 1rem -1rem ${darkgrey};
      }
    `;
  }

  render() {
    return html`
      <div class="card">
        <slot></slot>
      </div>
    `;
  }
}
