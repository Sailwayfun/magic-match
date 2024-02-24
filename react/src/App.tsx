import { shuffleCards } from "./data/cards.ts";
import { CardType } from "./types/card.ts";
import Card from "./components/Card.tsx";
import { useState, useEffect } from "react";

function App() {
  const [cards, setCards] = useState<CardType[]>([]);
  const [turns, setTurns] = useState<number>(0);
  const [choice1, setChoice1] = useState<null | CardType>(null);
  const [choice2, setChoice2] = useState<null | CardType>(null);
  const [isCardsDisable, setIsCardDisable] = useState<boolean>(false);

  function startNewGame() {
    const shuffledCards = shuffleCards();
    setChoice1(null);
    setChoice2(null);
    setCards(shuffledCards);
    setTurns(0);
  }

  useEffect(() => {
    function compareCards() {
      if (!choice1 || !choice2) return;
      setIsCardDisable(true);
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
    if (isCardsDisable) return;
    return choice1 ? setChoice2(card) : setChoice1(card);
  }

  useEffect(() => {
    startNewGame();
  }, []);

  function newTurn() {
    setChoice1(null);
    setChoice2(null);
    setTurns((prev) => prev + 1);
    setIsCardDisable(false);
  }

  return (
    <div className="mx-auto my-10 max-w-[500px] px-4 md:max-w-3xl md:p-2">
      <h1 className="pb-2">Magic match</h1>
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
      <p className="pt-2">Turns: {turns}</p>
    </div>
  );
}

export default App;
