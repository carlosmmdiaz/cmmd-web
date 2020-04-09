import { css, LitElement, html } from 'lit-element';

import { CMMDfontFamily, lightBlue, blue } from '@cmmd-web/styles';

export class CMMDHeader extends LitElement {
  static get properties() {
    return {
      title: { type: String },
    };
  }

  static get styles() {
    return css`
      :host {
        font-family: ${CMMDfontFamily};
      }

      header {
        width: 100%;
        padding: 1rem;
        border-bottom: 1px solid ${lightBlue};
        display: flex;
      }

      .title {
        width: 100%;
        text-align: center;
        font-size: 1.5rem;
        color: ${blue};
      }
    `;
  }

  render() {
    return html`
      <header>
        <slot name="logo"></slot>
        <h1 class="title" name="title">${this.title}</h1>
        <slot name="menu"></slot>
      </header>
    `;
  }
}
