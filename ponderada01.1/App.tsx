import AppNavigator from './app/navigation/AppNavigator';
import { GameProvider } from './app/context/GameContext';

export default function App() {
  return (
    <GameProvider>
      <AppNavigator />
    </GameProvider>
  );
}
