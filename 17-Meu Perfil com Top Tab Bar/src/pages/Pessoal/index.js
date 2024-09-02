import React from 'react';
import { View, Text, Button, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';
import myImage from '../../../user.png';

export default function Pessoal() {
  return (
    <View>
      <Image style={styles.image} source={myImage} />

      <Text style={styles.titulo}>Nome:</Text>
      <Text style={styles.texto}>Leandro Aguiar</Text>

      <Text style={styles.titulo}>Email:</Text>
      <Text style={styles.texto}>leandrobertto1106@gmail.com</Text>

      <Text style={styles.titulo}>Contato:</Text>
      <Text style={styles.texto}>13 99804-7325</Text>
    </View>
  );
}
