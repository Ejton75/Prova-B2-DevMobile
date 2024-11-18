// HomeScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';
import { supabase } from './supabaseClient';

const HomeScreen = ({ navigation }) => {
  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigation.replace('Login'); // Voltar para a tela de login
  };

  return (
    <View>
      <Text>Bem-vindo à Home!</Text>
      <Button title="Sair" onPress={handleLogout} />
    </View>
  );
};

export default HomeScreen;
