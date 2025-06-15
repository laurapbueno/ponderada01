import { createContext, useContext, useState, ReactNode } from 'react';
import { Card } from '../types';
import { mockCards } from '../services/cards';
import { Modifier } from '../services/modifiers';

type GameContextType = {
  hand: Card[];
  setHand: (cards: Card[]) => void;
  modifier: Modifier | null;
  setModifier: (mod: Modifier | null) => void;
};

const GameContext = createContext<GameContextType | undefined>(undefined);

export const GameProvider = ({ children }: { children: ReactNode }) => {
  const [hand, setHand] = useState<Card[]>(mockCards.slice(0, 5));
  const [modifier, setModifier] = useState<Modifier | null>(null);

  return (
    <GameContext.Provider value={{ hand, setHand, modifier, setModifier }}>
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => {
  const context = useContext(GameContext);
  if (!context) throw new Error('useGame must be used within GameProvider');
  return context;
};
