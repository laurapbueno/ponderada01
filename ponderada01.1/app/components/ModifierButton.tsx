import { Button } from 'react-native';
import { router } from 'expo-router';

export default function ModifierButton() {
  return (
    <Button
      title="Selecionar Modificador"
      onPress={() => router.push('/modifiers')}
    />
  );
}
