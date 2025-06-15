import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { mockModifiers, Modifier } from '../services/modifiers';
import { useGame } from '../context/GameContext';
import { router } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts, PressStart2P_400Regular } from '@expo-google-fonts/press-start-2p';

const screenWidth = Dimensions.get('window').width;

export default function ModifiersScreen() {
  const { setModifier } = useGame();

  const [fontsLoaded] = useFonts({
    PressStart2P_400Regular,
  });

  if (!fontsLoaded) return null;

  const handleApply = (mod: Modifier) => {
    setModifier(mod);
    router.replace('/game');
  };

  const handleClear = () => {
    setModifier(null);
    router.replace('/game');
  };

  return (
    <LinearGradient colors={['#000000', '#2d0033', '#330000']} style={styles.container}>
      <Text style={styles.title}>MODIFICADORES</Text>

      <FlatList
        data={mockModifiers}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <View style={styles.modifierCard}>
            <Text style={styles.modName}>{item.name}</Text>
            <Text style={styles.modDesc}>{item.description}</Text>

            <TouchableOpacity
              style={styles.button}
              onPress={() => handleApply(item)}
              activeOpacity={0.8}
            >
              <Text style={styles.buttonText}>APLICAR</Text>
            </TouchableOpacity>
          </View>
        )}
      />

      <TouchableOpacity
        style={[styles.button, styles.clearButton]}
        onPress={handleClear}
      >
        <Text style={styles.buttonText}>LIMPAR MODIFICADOR</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, styles.backButton]}
        onPress={() => router.replace('/game')}
      >
        <Text style={styles.buttonText}>VOLTAR</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  title: {
    fontSize: 16,
    fontFamily: 'PressStart2P_400Regular',
    color: '#fff',
    marginBottom: 16,
    textAlign: 'center',
  },
  list: {
    paddingBottom: 100,
    gap: 20,
  },
  modifierCard: {
    backgroundColor: '#111',
    borderColor: '#ff004c',
    borderWidth: 2,
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  modName: {
    fontSize: 12,
    fontFamily: 'PressStart2P_400Regular',
    color: '#fff',
    marginBottom: 8,
  },
  modDesc: {
    fontSize: 10,
    fontFamily: 'PressStart2P_400Regular',
    color: '#ccc',
    marginBottom: 12,
  },
  button: {
    backgroundColor: '#ff004c',
    paddingVertical: 14,
    borderRadius: 8,
    shadowColor: '#ff004c',
    shadowOpacity: 0.6,
    shadowRadius: 8,
    elevation: 10,
    width: screenWidth * 0.45,
    alignSelf: 'center',
    marginTop: 24,
  },
  clearButton: {
    backgroundColor: '#666', 
    shadowColor: '#999',
    marginTop: 24,
  },
  backButton: {
    backgroundColor: '#333',
    marginTop: 16,
  },
  buttonText: {
    fontFamily: 'PressStart2P_400Regular',
    fontSize: 10,
    color: '#fff',
    textAlign: 'center',
  },
});
