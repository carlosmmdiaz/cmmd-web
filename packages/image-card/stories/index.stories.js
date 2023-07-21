import '../cmmd-image-card.js';

export default {
  title: 'Components/ImageCard',
};

export const example = () =>
  `
    <cmmd-image-card
      height="360px"
      width="640px"
      src="https://picsum.photos/640/360"
      imageCardTitle="Lovely image"
      alt="This is a lovely image"
    >
    </cmmd-image-card>
  `;

export const button = () =>
  `
    <cmmd-image-card
      height="360px"
      width="640px"
      src="https://picsum.photos/640/360"
      imageCardTitle="Lovely image"
      alt="This is a lovely image"
      .buttonRole="${true}"
    >
    </cmmd-image-card>
  `;
