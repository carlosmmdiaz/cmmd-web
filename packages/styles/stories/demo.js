import { LitElement, css, html } from 'lit';
import { borderRadiusSize } from '../src/sizes.js';
import {
  blue,
  lightBlue,
  darkBlue,
  red,
  lightRed,
  darkRed,
  black,
  lightBlack,
  darkBlack,
  white,
  grey,
} from '../src/colors.js';

export class StylesDemo extends LitElement {
  static get styles() {
    return css`
      :root {
        background: ${white};
      }
      h1 {
        margin: 10px;
        color: ${black};
      }

      ul {
        list-style: none;
        margin: 0;
        padding: 0;
      }

      li {
        margin: 10px;
        display: inline-block;
      }

      .box {
        width: 200px;
        padding: 20px;
        border-radius: ${borderRadiusSize};
      }

      .blue {
        background: ${blue};
        color: ${white};
      }

      .lightBlue {
        background: ${lightBlue};
      }

      .darkBlue {
        background: ${darkBlue};
        color: ${white};
      }

      .red {
        background: ${red};
        color: ${white};
      }

      .lightRed {
        background: ${lightRed};
      }

      .darkRed {
        background: ${darkRed};
        color: ${white};
      }

      .black {
        background: ${black};
        color: ${white};
      }

      .lightBlack {
        background: ${lightBlack};
      }

      .darkBlack {
        background: ${darkBlack};
        color: ${white};
      }

      .white {
        background: ${white};
        border: 1px solid ${lightBlue};
      }

      .grey {
        background: ${grey};
      }
    `;
  }

  render() {
    return html`
      <h1 class="h1">Colors</h1>
      <ul>
        <li class="box lightBlue">lightBlue ${lightBlue}</li>
        <li class="box blue">blue ${blue}</li>
        <li class="box darkBlue">darkBlue ${darkBlue}</li>
        <li class="box lightRed">lightRed ${lightRed}</li>
        <li class="box red">red ${red}</li>
        <li class="box darkRed">darkRed ${darkRed}</li>
        <li class="box lightBlack">lightBlack ${lightBlack}</li>
        <li class="box black">black ${black}</li>
        <li class="box darkBlack">darkBlack ${darkBlack}</li>
        <li class="box white">white ${white}</li>
        <li class="box grey">grey ${grey}</li>
      </ul>
    `;
  }
}

window.customElements.define('cmmd-styles', StylesDemo);
