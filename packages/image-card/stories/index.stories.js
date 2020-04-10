import { html } from 'lit-html';
import '../cmmd-image-card.js';

export default {
  title: 'Components/ImageCard',
};

export const example = () =>
  html`
    <cmmd-image-card
      imageTitle="Tesla"
      imageAlt="Image of a Tesla"
      imageSrc="https://placehold.it/350x150"
    >
    </cmmd-image-card>
  `;
