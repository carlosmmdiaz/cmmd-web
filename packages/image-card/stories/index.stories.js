import { html } from 'lit-html';
import '../cmmd-image-card.js';

export default {
  title: 'Components/ImageCard',
};

export const example = () =>
  html`
    <cmmd-image-card
      height="360px"
      width="640px"
      src="https://picsum.photos/640/360"
      title="Lovely image"
      alt="This is a lovely image"
    >
    </cmmd-image-card>
  `;

export const button = () =>
  html`
    <cmmd-image-card
      height="360px"
      width="640px"
      src="https://picsum.photos/640/360"
      title="Lovely image"
      alt="This is a lovely image"
      .buttonRole="${true}"
    >
    </cmmd-image-card>
  `;
