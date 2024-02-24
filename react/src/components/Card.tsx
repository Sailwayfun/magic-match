import cardBack from "../assets/img/cover.png";
import { CardType } from "../types/card";
import { cn } from "../util/cn.ts";

interface CardProps {
  card: CardType;
  flipped: boolean;
  onChooseCards: (chosenCard: CardType) => void;
}

const Card = ({ card, onChooseCards, flipped }: CardProps) => {
  const cardStyles =
    "block w-full rounded-md border-2 border-solid border-white cursor-pointer";
  const flippedStyles = "[transform:rotateY(0deg)]";

  return (
    <div className="relative">
      <img
        src={card.src}
        alt="card front"
        className={cn(
          cardStyles,
          "absolute [transform:rotateY(90deg)]",
          flipped && flippedStyles,
        )}
      />
      <img
        src={cardBack}
        alt="card back"
        className={cardStyles}
        onClick={() => onChooseCards(card)}
      />
    </div>
  );
};

export default Card;
