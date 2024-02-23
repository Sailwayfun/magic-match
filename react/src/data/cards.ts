import { Card, CardImage } from "../types/card";

const cardImages: CardImage[] = [
  { src: "./assets/img/helmet-1.png" },
  { src: "./assets/img/potion-1.png" },
  { src: "./assets/img/ring-1.png" },
  { src: "./assets/img/scroll-1.png" },
  { src: "./assets/img/shield-1.png" },
  { src: "./assets/img/sword-1.png" },
];

export const shuffleCards: () => Card[] = () =>
  [...cardImages, ...cardImages]
    .sort(() => Math.random() - 0.5)
    .map((card) => ({ ...card, id: Math.random() - 0.5 }));
