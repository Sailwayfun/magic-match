import { CardType } from "../types/card";
import { shuffleCards } from "../data/cards";

export interface State {
  cards: CardType[];
  turns: number;
  choice1: null | CardType;
  choice2: null | CardType;
  isDisabled: boolean;
}

export const initialState: State = {
  cards: [],
  turns: 0,
  choice1: null,
  choice2: null,
  isDisabled: false,
};

type ActionType =
  | "resetTurns"
  | "newTurn"
  | "setCards"
  | "chooseFirst"
  | "chooseSecond"
  | "matchCards"
  | "resetGame"
  | "toggleCardsDisabled";

export type Action = { type: ActionType; card?: CardType; cards?: CardType[] };

export function cardReducer(state: State, action: Action): State {
  const handlers = {
    resetTurns() {
      return { ...state, turns: 0 };
    },
    newTurn() {
      return {
        ...state,
        choice1: null,
        choice2: null,
        isDisabled: false,
        turns: state.turns + 1,
      };
    },
    setCards() {
      return { ...state, cards: action.cards || [] };
    },
    chooseFirst() {
      return { ...state, choice1: action.card || null };
    },
    chooseSecond() {
      return { ...state, choice2: action.card || null };
    },
    matchCards() {
      return {
        ...state,
        cards: state.cards.map((card) => {
          if (card.src === state?.choice1?.src) {
            return { ...card, matched: true };
          }
          return card;
        }),
      };
    },
    resetGame() {
      const shuffledCards = shuffleCards();
      return { ...initialState, cards: shuffledCards };
    },
    toggleCardsDisabled() {
      return { ...state, isDisabled: !state.isDisabled };
    },
  };
  const handler = handlers[action.type];
  return handler ? handler() : state;
}
