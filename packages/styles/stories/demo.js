import { LitElement, css, html } from 'lit-element';
import { primary, secondary, secondaryOverBlue, background } from '../src/colors.js';

export class StylesDemo extends LitElement {
  static get styles() {
    return css`
      :root {
        background: ${background};
      }
      h1 {
        color: ${primary};
      }

      ul {
        list-style: none;
        margin: 0;
        padding: 0;
      }

      .box {
        width: 100%;
        padding: 20px;
        border: 1px solid black;
        margin-bottom: 5px;
      }

      .primary {
        background: ${primary};
      }
      .secondary {
        background: ${secondary};
        color: ${secondaryOverBlue};
      }
      .secondaryOverBlue {
        background: ${secondaryOverBlue};
      }
      .background {
        background: ${background};
      }
    `;
  }
  
  render() {
    return html`
      <h1 class="h1">Colors</h1>
      <ul>
        <li class="box primary">Primary ${primary}</li>
        <li class="box secondary">Secondary ${secondary}</li>
        <li class="box secondaryOverBlue">secondaryOverBlue ${secondaryOverBlue}</li>
        <li class="box background">Background ${background}</li>
      </ul>
    `;
  }
}


