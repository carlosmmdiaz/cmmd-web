import { css, LitElement, html } from 'lit';

import { CMMDfontFamily, blue, lightBlack } from '@cmmd-web/styles';

export class CMMDHeader extends LitElement {
  static get properties() {
    return {
      headerTitle: { type: String },
    };
  }

  static get styles() {
    return css`
      :host {
        font-family: ${CMMDfontFamily};
      }

      header {
        padding: 0.3rem;
        display: flex;
        justify-content: space-around;
        border-bottom: 1px solid ${lightBlack};
      }

      .headerTitle {
        width: 100%;
        font-size: 1.5rem;
        line-height: 2.5rem;
        color: ${blue};
        margin: 0;
      }
    `;
  }

  render() {
    return html`
      <header>
        <h1 class="headerTitle" name="headerTitle">${this.headerTitle}</h1>
        <slot></slot>
      </header>
    `;
  }
}
