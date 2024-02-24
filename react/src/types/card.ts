export interface CardImage {
  src: string;
  matched: boolean;
}

export interface CardType extends CardImage {
  id: number;
}
