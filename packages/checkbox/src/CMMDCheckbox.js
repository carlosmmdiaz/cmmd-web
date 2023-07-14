import { css } from 'lit';
import { LionCheckbox } from '@lion/checkbox-group/src/LionCheckbox.js';
import { CMMDfontFamily, darkBlue, lightBlue } from '@cmmd-web/styles';

export class CMMDCheckbox extends LionCheckbox {
  static get styles() {
    return css`
      :host {
        font-family: ${CMMDfontFamily};
        display: flex;
      }
      .choice-field__label {
        color: ${darkBlue};
        font-size: 1rem;
        padding-left: 0.5rem;
        padding-top: 2px;
      }
      ::slotted(.form-control) {
        width: 1rem;
        height: 1rem;
      }
      ::slotted(.form-control:focus:not([disabled])) {
        outline: 2px solid ${lightBlue};
      }
    `;
  }
}
