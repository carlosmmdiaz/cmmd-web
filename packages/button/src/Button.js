import { css } from 'lit-element';
import { LionButton } from '@lion/button';

import { primary, secondaryOverBlue, secondary } from '@cmmd-web/styles';

export class CMMDButton extends LionButton {
  static get styles() {
    return [
      ...super.styles,
      css`
        .btn {
          background: ${primary};
          color: ${secondaryOverBlue};
          padding: 0.5rem 0.75rem;
          border-radius: 3px;
          cursor: pointer;
        }

        :host(:hover) .btn,
        :host(:active) .btn,
        :host([active]) .btn {
          background: ${secondary};
        }

        :host([rounded]) .btn {
          border-radius: 50%;
          padding: 0.3rem 0.45rem;
        }

        ::slotted(svg) {
          fill: ${secondaryOverBlue};
        }

        /* Atributes */
        :host([rounded]) .btn {
          border-radius: 50%;
          padding: 0.3rem 0.45rem;
        }

        :host([secondary]) .btn {
          background: ${secondary};
          color: ${secondaryOverBlue};
        }

        :host(:hover[secondary]) .btn,
        :host([active][secondary]) .btn {
          background: red;
        }
      `,
    ];
  }
}
