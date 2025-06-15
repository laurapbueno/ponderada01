import { View, Text, StyleSheet } from 'react-native';
import { Card as CardType } from '../types';

const suitSymbols: Record<CardType['suit'], string> = {
  hearts: '♥',
  diamonds: '♦',
  clubs: '♣',
  spades: '♠',
};

export default function Card({ card }: { card: CardType }) {
  const symbol = suitSymbols[card.suit];
  const isRed = card.suit === 'hearts' || card.suit === 'diamonds';

  return (
    <View style={styles.card}>
      <Text style={[styles.value, isRed ? styles.red : styles.black]}>
        {card.value}
      </Text>
      <Text style={[styles.suit, isRed ? styles.red : styles.black]}>
        {symbol}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 60,
    height: 90,
    backgroundColor: '#fff',
    borderRadius: 8,
    borderColor: '#000',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
  },
  value: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  suit: {
    fontSize: 18,
  },
  red: {
    color: '#ff0033',
  },
  black: {
    color: '#000000',
  },
});
