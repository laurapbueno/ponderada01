import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>BALATRO</Text>
      <Text style={styles.subtitle}>O JOGO DE CARTAS</Text>

      <TouchableOpacity style={styles.button} onPress={() => router.replace('/game')}>
        <Text style={styles.buttonText}>COMEÇAR</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a0a0a',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  title: {
    fontSize: 48,
    fontWeight: '900',
    letterSpacing: 8,
    color: '#ffffff',
    textShadowColor: '#ff0000',
    textShadowOffset: { width: 3, height: 3 },
    textShadowRadius: 8,
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    color: '#aaaaaa',
    marginBottom: 48,
    fontStyle: 'italic',
    letterSpacing: 2,
  },
  button: {
    backgroundColor: '#0077ff',
    paddingVertical: 16,
    paddingHorizontal: 40,
    borderRadius: 8,
    elevation: 4,
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
    letterSpacing: 2,
  },
});
