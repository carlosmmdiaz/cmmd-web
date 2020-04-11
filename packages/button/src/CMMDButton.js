import { css } from 'lit-element';
import { LionButton } from '@lion/button';

import {
  blue,
  darkBlue,
  white,
  lightBlue,
  red,
  darkRed,
  lightBlack,
  black,
  CMMDfontFamily,
  borderRadiusSize,
} from '@cmmd-web/styles';

export class CMMDButton extends LionButton {
  static get styles() {
    return [
      ...super.styles,
      css`
        :host {
          font-family: ${CMMDfontFamily};
        }
        .btn {
          background: ${blue};
          color: ${white};
          padding: 0.5rem 0.75rem;
          border-radius: ${borderRadiusSize};
          cursor: pointer;
        }

        :host([disabled]) .btn,
        :host([disabled][danger]) .btn {
          background: ${lightBlack};
          color: ${black};
          fill: ${black};
        }

        :host(:focus:not([disabled])) .btn {
          outline: 2px solid ${lightBlue};
        }

        :host(:hover) .btn,
        :host(:active) .btn,
        :host([active]) .btn {
          background: ${darkBlue};
        }

        :host([rounded]) .btn {
          border-radius: 50%;
          padding: 0.3rem 0.45rem;
        }

        ::slotted(svg) {
          fill: ${white};
        }

        :host([danger]) .btn {
          background: ${red};
          color: ${white};
        }

        :host(:hover[danger]) .btn,
        :host([active][danger]) .btn {
          background: ${darkRed};
        }
      `,
    ];
  }
}
