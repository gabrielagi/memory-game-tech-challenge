import React from 'react';
import { Card as CardType } from '@/Types/cardTypes';

interface CardProps {
  card: CardType;
  onClick: (card: CardType) => void;
}

const Card: React.FC<CardProps> = ({ card, onClick }) => {
  return (
    <div onClick={() => onClick(card)} className="card">
      {card.isFlipped ? <img src={card.image} alt="card" /> : <div className="back"></div>}
    </div>
  );
};

export default Card;
