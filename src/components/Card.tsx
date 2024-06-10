import React from 'react';
import { Card as CardType } from '@/Types/cardTypes';

interface CardProps {
  card: CardType;
  onClick: (card: CardType) => void;
  isFlipped: boolean;
}

const Card: React.FC<CardProps> = ({ card, onClick, isFlipped }) => {
  return (
    <div
      onClick={() => !isFlipped && onClick(card)}
      className="relative flex items-center justify-center cursor-pointer h-40 w-32 hover:scale-105 rounded-xl transition-transform duration-500"
    >
      {isFlipped &&
        <img
          src={card.image}
          alt="card"
          className="absolute h-full w-full object-cover rounded-xl backface-hidden transform rotate-y-180"
        />
      }
      <div className={`absolute h-full w-full rounded-xl transform transition-transform duration-500 ${isFlipped ? '[transform:rotateY(180deg)] [backface-visibility:hidden]' : ''}`}>
        <img
          src="src/assets/card-back.png"
          alt="card back"
          className="absolute h-full w-full object-cover rounded-xl backface-hidden"
        />
      </div>
    </div>
  );
};

export default Card;
