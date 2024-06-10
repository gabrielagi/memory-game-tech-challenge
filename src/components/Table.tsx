import React, { useState, useEffect } from 'react';
import Card from '@/components/Card';
import Notification from '@/components/Notification';
import { Card as CardType } from '@/Types/cardTypes';
import uniqueCards from '@/utils/cards.json';
import { shuffleArray } from '@/utils';

const Table: React.FC = () => {
  const [flippedCards, setFlippedCards] = useState<CardType[]>([]);
  const [matchedCards, setMatchedCards] = useState<number[]>([]);
  const [cardsOptions, setCardsOptions] = useState<CardType[]>([]);
  const [moves, setMoves] = useState(0);
  const [pairsFound, setPairsFound] = useState(0);

  const createBoard = () => {
    const duplicateCards = uniqueCards.flatMap((img) => {
      const duplicate = { ...img, id: img.id + uniqueCards.length };
      return [img, duplicate];
    });
    const sortedDuplicate = shuffleArray(duplicateCards);
    const cards = sortedDuplicate.map(card => ({
      ...card,
      flipped: false,
      matched: false,
    }));
    setCardsOptions(cards);
  };

  useEffect(() => {
    createBoard();
  }, []);

  useEffect(() => {
    if (flippedCards.length === 2) {
      const [first, second] = flippedCards;
      const isMatch = (first.id === second.id) || (first.id + uniqueCards.length === second.id) || (first.id === second.id + uniqueCards.length);
      if (isMatch) {
        setMatchedCards(prev => [...prev, first.id, second.id]);
        setPairsFound(prev => prev + 1);
      }
      setTimeout(() => setFlippedCards([]), 1000);
    }
  }, [flippedCards]);

  const handleClick = (card: CardType) => {
    if (flippedCards.length < 2 && !flippedCards.includes(card) && !matchedCards.includes(card.id)) {
      setFlippedCards([...flippedCards, card]);
      setMoves(moves + 1);
    }
  };

  const handleRestart = () => {
    setFlippedCards([]);
    setMatchedCards([]);
    setMoves(0);
    setPairsFound(0);
    createBoard();
  };

  const totalPairs = uniqueCards.length;

  return (
    <div className="flex flex-col items-center">
      {pairsFound === totalPairs &&
        <Notification moves={moves} onRestart={handleRestart} />
}
        <div className="grid grid-cols-4 gap-4 bg-blue">
          {cardsOptions.map((card) => (
            <Card
              key={card.id}
              card={card}
              onClick={handleClick}
              isFlipped={flippedCards.includes(card) || matchedCards.includes(card.id)}
            />
          ))}
        </div>
      
        <div className="mt-4 bg-gray-800 text-white p-4 rounded-lg shadow-lg">
        <p className="text-xl font-bold">Movimientos: {moves}</p>
        <p className="text-xl font-bold mt-2">Pares Encontrados: {pairsFound}</p>
      </div>
    </div>
  );
};

export default Table;
