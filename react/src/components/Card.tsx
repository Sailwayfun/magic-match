import cardBack from "../assets/img/cover.png";

interface CardProps {
  img: string;
}

const Card = ({ img }: CardProps) => {
  const cardStyles =
    "block w-full rounded-md border-2 border-solid border-white";

  return (
    <div className="relative">
      <img src={img} alt="card front" className={cardStyles} />
      <img src={cardBack} alt="card back" className={cardStyles} />
    </div>
  );
};

export default Card;
