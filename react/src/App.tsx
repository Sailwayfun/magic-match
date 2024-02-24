import { CardType } from "./types/card.ts";
import Card from "./components/Card.tsx";
import {
  cardReducer,
  initialState,
  State,
  Action,
} from "./reducers/cardReducer.ts";
import { useReducer, useEffect, Reducer } from "react";

function App() {
  const [state, dispatch] = useReducer<Reducer<State, Action>>(
    cardReducer,
    initialState,
  );

  function startNewGame() {
    dispatch({ type: "resetGame" });
  }

  useEffect(() => {
    function compareCards() {
      if (!state.choice1 || !state.choice2) return;
      dispatch({ type: "toggleCardsDisabled" });
      const image1 = state.choice1.src;
      const image2 = state.choice2.src;

      if (image1 !== image2) {
        return setTimeout(() => {
          newTurn();
        }, 500);
      }

      dispatch({ type: "matchCards" });
      newTurn();
    }
    compareCards();
  }, [state.choice1, state.choice2]);

  function chooseCards(card: CardType) {
    if (state.isDisabled) return;
    return state.choice1
      ? dispatch({ type: "chooseSecond", card })
      : dispatch({ type: "chooseFirst", card });
  }

  useEffect(() => {
    startNewGame();
  }, []);

  function newTurn() {
    dispatch({ type: "newTurn" });
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
        {state.cards.map((card) => (
          <Card
            key={card.id}
            onChooseCards={chooseCards}
            card={card}
            flipped={
              card === state.choice1 || card === state.choice2 || card.matched
            }
          />
        ))}
      </div>
      <p className="pt-2">Turns: {state.turns}</p>
    </div>
  );
}

export default App;
