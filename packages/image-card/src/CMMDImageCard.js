import { css, LitElement, html } from 'lit-element';

import { darkgrey } from '@cmmd-web/styles';

export class CMMDImageCard extends LitElement {
  static get properties() {
    return {
      imageTitle: { type: String },
      imageAlt: { type: String },
      imageSrc: { type: String },
    };
  }

  static get styles() {
    return css`
      .image {
        border-radius: 0.5rem;
        box-shadow: 1rem 1rem 1rem -1rem ${darkgrey};
        width: 100%;
      }
    `;
  }

  render() {
    return html`
      <div class="card">
        <img class="image" src="${this.imageSrc}" alt="${this.imageAlt}" />
        <div>${this.imageTitle}</div>
      </div>
    `;
  }
}
