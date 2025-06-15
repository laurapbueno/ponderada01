import { View, Text, ScrollView, StyleSheet, Platform } from 'react-native';

export default function TabTwoScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 60 }}>
      <Text style={styles.title}>Explore</Text>

      <Text style={styles.sectionTitle}>File-based routing</Text>
      <Text style={styles.text}>
        Este app tem duas telas: `GameScreen.tsx` e `ModifiersScreen.tsx`.
      </Text>

      <Text style={styles.sectionTitle}>Android, iOS e Web</Text>
      <Text style={styles.text}>
        Você pode abrir este projeto no Android, iOS e também no navegador.
      </Text>

      <Text style={styles.sectionTitle}>Custom fonts</Text>
      <Text style={styles.text}>
        Você pode adicionar fontes personalizadas no arquivo `app/_layout.tsx`.
      </Text>

      <Text style={styles.sectionTitle}>Light e Dark Mode</Text>
      <Text style={styles.text}>
        Use o hook `useColorScheme()` para detectar o tema e aplicar estilos diferentes.
      </Text>

      <Text style={styles.sectionTitle}>Dica</Text>
      <Text style={styles.text}>
        Para começar, edite os arquivos em `app/screens` e adicione funcionalidades para o jogo inspirado em Balatro.
      </Text>

      {Platform.OS === 'ios' && (
        <Text style={styles.text}>
          No iOS, use `cmd + d` para abrir o menu de desenvolvedor.
        </Text>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginTop: 16,
  },
  text: {
    fontSize: 16,
    marginTop: 6,
  },
});
