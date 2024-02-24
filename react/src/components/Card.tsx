import cardBack from "../assets/img/cover.png";
import { CardType } from "../types/card";
import { cn } from "../util/cn.ts";

interface CardProps {
  card: CardType;
  flipped: boolean;
  onChooseCards: (chosenCard: CardType) => void;
}

const cardStyles =
  "block w-full rounded-md border-2 border-solid border-white cursor-pointer";

const transition = {
  front: {
    shown: "[transform:rotateY(0deg)] transition delay-200",
    covered:
      "absolute [transform:rotateY(90deg)] transition-all ease-in duration-200",
  },
  back: {
    shown: "transition transition-all ease-in delay-200",
    covered: "[transform:rotateY(90deg)] duration-200",
  },
};

const Card = ({ card, onChooseCards, flipped }: CardProps) => {
  return (
    <div className="relative">
      <img
        src={card.src}
        alt="card front"
        className={cn(
          cardStyles,
          transition.front.covered,
          flipped && transition.front.shown,
        )}
      />
      <img
        src={cardBack}
        alt="card back"
        className={cn(
          cardStyles,
          transition.back.shown,
          flipped && transition.back.covered,
        )}
        onClick={() => onChooseCards(card)}
      />
    </div>
  );
};

export default Card;
