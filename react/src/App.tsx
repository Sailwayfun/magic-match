import { shuffleCards } from "./data/cards.ts";
import { CardType } from "./types/card.ts";
import Card from "./components/Card.tsx";
import { useState } from "react";

function App() {
  const [cards, setCards] = useState<CardType[]>([]);
  const [turns, setTurns] = useState<number>(0);
  const [choice1, setChoice1] = useState<null | number>(null);
  const [choice2, setChoice2] = useState<null | number>(null);

  function startNewGame() {
    const shuffledCards = shuffleCards();
    setCards(shuffledCards);
    setTurns(0);
  }

  function chooseCards(id: number) {
    return choice1 ? setChoice2(id) : setChoice1(id);
  }

  console.log({ choice1, choice2, turns });

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
        {cards.map(({ id, src }) => (
          <Card key={id} img={src} onChooseCards={chooseCards} id={id} />
        ))}
      </div>
    </div>
  );
}

export default App;
