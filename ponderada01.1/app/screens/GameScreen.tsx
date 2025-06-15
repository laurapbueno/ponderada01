import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { router } from 'expo-router';
import { useGame } from '../context/GameContext';
import Card from '../components/Card';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts, PressStart2P_400Regular } from '@expo-google-fonts/press-start-2p';
import { mockCards } from '../services/cards';

const screenWidth = Dimensions.get('window').width;

// Gera nova mão aleatória
function getRandomCards() {
  const shuffled = [...mockCards].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 5);
}

export default function GameScreen() {
  const { hand, setHand, modifier } = useGame();

  const [fontsLoaded] = useFonts({
    PressStart2P_400Regular,
  });

  if (!fontsLoaded) return null;

  const calculateScore = () => {
    const modifiedHand = modifier ? modifier.apply(hand) : hand;
    const baseScore = modifiedHand.reduce((acc, card) => acc + card.value, 0);
    return modifier?.id === 'bonus-5' ? baseScore + 5 : baseScore;
  };

  return (
    <LinearGradient colors={['#000000', '#2d0033', '#330000']} style={styles.safeArea}>
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.scroll}>
          <Text style={styles.title}>SUA MÃO</Text>

          {modifier && (
            <Text style={styles.modifierNotice}>
              Modificador ativo: {modifier.name}
            </Text>
          )}

          <View style={styles.cardGrid}>
            {hand.map((card) => (
              <Card key={card.id} card={card} />
            ))}
          </View>

          <Text style={styles.score}>PONTUAÇÃO: {calculateScore()}</Text>

          <TouchableOpacity
            style={styles.button}
            onPress={() => router.push('/modifiers')}
            activeOpacity={0.8}
          >
            <Text style={styles.buttonText}>SELECIONAR MODIFICADOR</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => setHand(getRandomCards())}
            activeOpacity={0.8}
          >
            <Text style={styles.buttonText}>NOVA MÃO</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, styles.backButton]}
            onPress={() => router.replace('/')}
            activeOpacity={0.8}
          >
            <Text style={styles.buttonText}>VOLTAR PARA A HOME</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  scroll: {
    alignItems: 'center',
    padding: 24,
    gap: 20,
  },
  title: {
    fontSize: 16,
    color: '#fff',
    fontFamily: 'PressStart2P_400Regular',
    textAlign: 'center',
  },
  modifierNotice: {
    fontSize: 10,
    fontStyle: 'italic',
    color: '#ccc',
    fontFamily: 'PressStart2P_400Regular',
    textAlign: 'center',
  },
  cardGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 12,
    marginVertical: 16,
  },
  score: {
    fontSize: 12,
    color: '#fff',
    fontFamily: 'PressStart2P_400Regular',
    marginBottom: 16,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#ff004c',
    paddingVertical: 18,
    paddingHorizontal: 20,
    borderRadius: 10,
    shadowColor: '#ff004c',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 10,
    width: screenWidth * 0.65,
  },
  backButton: {
    backgroundColor: '#333',
    shadowColor: '#aaa',
    marginTop: 12,
  },
  buttonText: {
    fontSize: 10,
    color: '#fff',
    fontFamily: 'PressStart2P_400Regular',
    textAlign: 'center',
  },
});
