import { CardType, CardImage } from "../types/card";

const cardImages: CardImage[] = [
  { src: "/src/assets/img/helmet-1.png" },
  { src: "/src/assets/img/potion-1.png" },
  { src: "/src/assets/img/ring-1.png" },
  { src: "/src/assets/img/scroll-1.png" },
  { src: "/src/assets/img/shield-1.png" },
  { src: "/src/assets/img/sword-1.png" },
];

export const shuffleCards: () => CardType[] = () =>
  [...cardImages, ...cardImages]
    .sort(() => Math.random() - 0.5)
    .map((card) => ({ ...card, id: Math.random() - 0.5 }));
