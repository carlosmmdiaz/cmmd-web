import { css } from 'lit';
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
          background: ${blue};
          color: ${white};
          padding: 0.5rem 0.75rem;
          border-radius: ${borderRadiusSize};
          cursor: pointer;
        }

        :host([disabled]),
        :host([disabled][danger]) {
          background: ${lightBlack};
          color: ${black};
          fill: ${black};
        }

        :host(:focus:not([disabled])) {
          outline: 2px solid ${lightBlue};
        }

        :host(:hover),
        :host(:active),
        :host([active]) {
          background: ${darkBlue};
        }

        :host([rounded]) {
          border-radius: 50%;
          padding: 0.3rem 0.45rem;
        }

        ::slotted(svg) {
          fill: ${white};
        }

        :host([danger]) {
          background: ${red};
          color: ${white};
        }

        :host(:hover[danger]),
        :host([active][danger]) {
          background: ${darkRed};
        }
      `,
    ];
  }
}
