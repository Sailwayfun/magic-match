import { shuffleCards } from "./data/cards.ts";
import { CardType } from "./types/card.ts";
import Card from "./components/Card.tsx";
import { useState, useEffect } from "react";

function App() {
  const [cards, setCards] = useState<CardType[]>([]);
  const [turns, setTurns] = useState<number>(0);
  const [choice1, setChoice1] = useState<null | CardType>(null);
  const [choice2, setChoice2] = useState<null | CardType>(null);

  function startNewGame() {
    const shuffledCards = shuffleCards();
    setCards(shuffledCards);
    setTurns(0);
  }

  useEffect(() => {
    function compareCards() {
      if (!choice1 || !choice2) return;
      const image1 = choice1.src;
      const image2 = choice2.src;

      if (image1 !== image2) {
        return setTimeout(() => {
          newTurn();
        }, 500);
      }

      setCards((prevCards) =>
        prevCards.map((card) => {
          if (card.src === image1) {
            return { ...card, matched: true };
          }
          return card;
        }),
      );
      newTurn();
    }
    compareCards();
  }, [choice1, choice2]);

  function chooseCards(card: CardType) {
    return choice1 ? setChoice2(card) : setChoice1(card);
  }

  function newTurn() {
    setChoice1(null);
    setChoice2(null);
    setTurns((prev) => prev + 1);
  }

  console.log({ cards, turns });

  return (
    <div className="mx-auto my-10 max-w-[860px]">
      <h1>Magic match</h1>
      <button
        onClick={startNewGame}
        className="rounded border-2 border-solid border-white bg-none px-3 py-[6px] text-base font-bold text-white hover:bg-[#c23866]"
      >
        New Game
      </button>
      <div className="mt-10 grid grid-cols-4 gap-5">
        {cards.map((card) => (
          <Card
            key={card.id}
            onChooseCards={chooseCards}
            card={card}
            flipped={card === choice1 || card === choice2 || card.matched}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
