import cardBack from "../assets/img/cover.png";
import { CardType } from "../types/card";

interface CardProps {
  card: CardType;
  onChooseCards: (chosenCard: CardType) => void;
}

const Card = ({ card, onChooseCards }: CardProps) => {
  const cardStyles =
    "block w-full rounded-md border-2 border-solid border-white cursor-pointer";

  return (
    <div className="relative">
      <img src={card.src} alt="card front" className={cardStyles} />
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
