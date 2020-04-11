import { css, LitElement, html } from 'lit-element';

import {
  lightBlue,
  blue,
  borderRadiusSize,
  transparentBlack,
  CMMDfontFamily,
} from '@cmmd-web/styles';

export class CMMDImageCard extends LitElement {
  static get properties() {
    return {
      title: { type: String },
      alt: { type: String },
      src: { type: String },
      width: { type: String },
      height: { type: String },
      buttonRole: { type: Boolean },
    };
  }

  static get styles() {
    return css`
      .card {
        width: fit-content;
        position: relative;
      }

      .image {
        border-radius: ${borderRadiusSize};
        background: ${lightBlue};
        width: 100%;
        height: auto;
      }

      .title {
        width: 100%;
        position: absolute;
        bottom: 0.18rem;
        text-align: center;
        padding: 1rem;
        background: ${transparentBlack};
        box-sizing: border-box;
        border-bottom-left-radius: ${borderRadiusSize};
        border-bottom-right-radius: ${borderRadiusSize};
        font-family: ${CMMDfontFamily};
        color: ${blue};
        font-weight: bold;
      }
    `;
  }

  renderImage() {
    return html`
      <img
        class="image"
        loading="lazy"
        src="${this.src}"
        width="${this.width}"
        height="${this.height}"
        alt="${this.alt}"
      />
    `;
  }

  renderTitle() {
    return html`
      <div class="title">${this.title}</div>
    `;
  }

  render() {
    if (this.buttonRole) {
      return html`
        <div class="card" role="button" tabindex="0">
          ${this.renderImage()} ${this.renderTitle()}
        </div>
      `;
    }
    return html`
      <div class="card">
        ${this.renderImage()} ${this.renderTitle()}
      </div>
    `;
  }
}
