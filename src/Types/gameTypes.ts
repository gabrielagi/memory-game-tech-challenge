import { Card } from './cardTypes';

export interface GameState {
  cards: Card[];
  matchedCards: number[];
  attempts: number;
}
