import cardBack from "../assets/img/cover.png";

interface CardProps {
  img: string;
}

const Card = ({ img }: CardProps) => {
  return (
    <div className="card">
      <img src={img} alt="card front" />
      <img src={cardBack} alt="card back" />
    </div>
  );
};

export default Card;
