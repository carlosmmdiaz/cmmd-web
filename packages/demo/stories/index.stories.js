import { html } from 'lit';
import '@cmmd-web/header/cmmd-header.js';
import '@cmmd-web/button/cmmd-button.js';
import '@cmmd-web/card/cmmd-card.js';
import '@cmmd-web/image-card/cmmd-image-card.js';
import '@cmmd-web/input/cmmd-input.js';
import { plusIcon, crossIcon, tickIcon } from '@cmmd-web/styles';

export default {
  title: 'Demo',
};

export const example = () =>
  html`
    <div>
      <cmmd-header title="My App">
        <cmmd-button danger>Logout</cmmd-button>
      </cmmd-header>
      <br />
      <cmmd-image-card
        height="150px"
        width="300px"
        src="https://picsum.photos/300/150"
        title="Car 1"
        alt="This is a car"
        .buttonRole="${true}"
      >
      </cmmd-image-card>
      <br />
      <cmmd-card>
        <div>
          Lucas ipsum dolor sit amet wedge mustafar kessel luke yoda utapau darth hutt organa mace.
          Grievous organa mace hoth amidala antilles. Solo watto watto darth twi'lek darth cade
          obi-wan. Darth gonk jar kenobi antilles boba cade. Jango fett twi'lek mandalore moff
          coruscant. Hutt vader ventress coruscant padmé mon binks fisto. Hutt luke moff darth
          lando. Anakin wedge tatooine skywalker wookiee. Palpatine wookiee wedge solo anakin luke
          organa antilles. Bothan fett darth wedge darth mon skywalker qui-gonn.
        </div>
      </cmmd-card>
      <br />
      <cmmd-input>
        <label slot="label">Input with label</label>
      </cmmd-input>
      <br />
      <div style="display: flex; justify-content: space-between;">
        <cmmd-button danger>Cancel</cmmd-button>
        <cmmd-button disabled>Acept</cmmd-button>
        <cmmd-button>Reset</cmmd-button>
      </div>
      <br />
      <div style="display: flex; justify-content: space-between;">
        <cmmd-button rounded danger>${crossIcon}</cmmd-button>
        <cmmd-button rounded danger disabled>${tickIcon}</cmmd-button>
        <cmmd-button rounded>${plusIcon}</cmmd-button>
      </div>
    </div>
  `;
