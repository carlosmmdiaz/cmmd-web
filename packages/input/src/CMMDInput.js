import { LionInput } from '@lion/input';
import { css } from 'lit';

import {
  darkBlue,
  black,
  darkgrey,
  lightBlue,
  CMMDfontFamily,
  borderRadiusSize,
} from '@cmmd-web/styles';

export class CMMDInput extends LionInput {
  static get styles() {
    return css`
      :host {
        font-family: ${CMMDfontFamily};
      }
      .form-field__label {
        color: ${darkBlue};
        font-size: 1rem;
        padding-bottom: 0.5rem;
        font-weight: bold;
      }

      .form-field__help-text {
        color: ${black};
        font-style: italic;
        font-size: 0.8rem;
      }

      .input-group__container > .input-group__input ::slotted(.form-control) {
        font-family: ${CMMDfontFamily};
        border-radius: ${borderRadiusSize};
        border: 1px solid ${darkgrey};
        font-size: 1rem;
        padding: 6px;
      }

      /** Focus */
      .input-group__container > .input-group__input ::slotted(.form-control:focus:not([disabled])) {
        outline: 2px solid ${lightBlue};
      }
    `;
  }
}
