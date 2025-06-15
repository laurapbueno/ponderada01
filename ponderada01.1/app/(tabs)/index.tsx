import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Animated } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { useFonts, PressStart2P_400Regular } from '@expo-google-fonts/press-start-2p';

export default function HomeScreen() {
  const [fadeAnim] = useState(new Animated.Value(0));

  const [fontsLoaded] = useFonts({
    PressStart2P_400Regular,
  });

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1200,
      useNativeDriver: true,
    }).start();
  }, []);

  if (!fontsLoaded) return null;

  return (
    <LinearGradient colors={['#000000', '#2d0033', '#330000']} style={styles.container}>
      <Animated.View style={[styles.content, { opacity: fadeAnim }]}>
        <Image
          source={require('@/assets/images/cartaa.webp')}
          style={styles.image}
          resizeMode="contain"
        />

        <Text style={styles.title}>PONDERADA 01</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => router.replace('/game')}
          activeOpacity={0.8}
        >
          <Text style={styles.buttonText}>COMEÇAR</Text>
        </TouchableOpacity>
      </Animated.View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    gap: 32,
  },
  title: {
    fontSize: 18,
    textAlign: 'center',
    color: '#ffffff',
    fontFamily: 'PressStart2P_400Regular',
  },
  button: {
    backgroundColor: '#ff004c',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 12,
    shadowColor: '#ff004c',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.7,
    shadowRadius: 10,
    elevation: 10,
  },
  buttonText: {
    fontSize: 12,
    color: '#ffffff',
    fontFamily: 'PressStart2P_400Regular',
  },
  image: {
    width: 140,
    height: 140,
  },
});
