import { css, LitElement, html } from 'lit';

import { grey, darkGrey, borderRadiusSize, CMMDfontFamily } from '@cmmd-web/styles';

export class CMMDCard extends LitElement {
  static get styles() {
    return css`
      :host {
        font-family: ${CMMDfontFamily};
      }

      .card {
        background: ${grey};
        padding: 1rem;
        border-radius: ${borderRadiusSize};
        box-shadow: 1rem 1rem 1rem -1rem ${darkGrey};
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
