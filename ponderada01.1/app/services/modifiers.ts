import { Card } from '../types';

export type Modifier = {
  id: string;
  name: string;
  description: string;
  apply: (cards: Card[]) => Card[];
};

export const mockModifiers: Modifier[] = [
  {
    id: 'double-hearts',
    name: 'Dobra Corações',
    description: 'Dobra o valor das cartas de copas (♥)',
    apply: (cards) =>
      cards.map((card) =>
        card.suit === 'hearts' ? { ...card, value: card.value * 2 } : card
      ),
  },
  {
    id: 'remove-lowest',
    name: 'Remove Menor Carta',
    description: 'Remove a carta de menor valor',
    apply: (cards) => {
      const min = Math.min(...cards.map((c) => c.value));
      return cards.filter((c) => c.value !== min);
    },
  },
  {
    id: 'bonus-5',
    name: '+5 Pontos',
    description: 'Adiciona 5 pontos à pontuação final (não altera cartas)',
    apply: (cards) => [...cards], // efeito aplicado na pontuação, não nas cartas
  },
];
