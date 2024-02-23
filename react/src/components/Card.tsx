import cardBack from "../assets/img/cover.png";

interface CardProps {
  id: number;
  img: string;
  onChooseCards: (chosenCard: number) => void;
}

const Card = ({ id, img, onChooseCards }: CardProps) => {
  const cardStyles =
    "block w-full rounded-md border-2 border-solid border-white cursor-pointer";

  return (
    <div className="relative">
      <img src={img} alt="card front" className={cardStyles} />
      <img
        src={cardBack}
        alt="card back"
        className={cardStyles}
        onClick={() => onChooseCards(id)}
      />
    </div>
  );
};

export default Card;
