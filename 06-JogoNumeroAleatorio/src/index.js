import React, { useState } from 'react';
import { View, Text, TextInput, Button, SafeAreaView, Image, Pressable } from 'react-native';

import { styles } from './styles';

function Jogo() {
  const [resultado, setResultado] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');

  const img = 'https://1.bp.blogspot.com/-Jue9CO_j5Ko/VtW7BGvU8uI/AAAAAAAAEu8/niKmezMv5Pg/s1600/Numeros.gif';

    function Gerar(){
    const calculo = Math.floor(Math.random() * 11)
    setResultado(calculo);
    }
    
  return (
    <SafeAreaView>
      <View style={styles.area}>
        <Text style={styles.titulo}> Nº Aleatório</Text>
        <Image source={{ uri: img }} style={styles.img} />

        <Text style={styles.resultado}>{resultado}</Text>
        <Button title="Gerar" color="red" fontFamily='cursive' onPress={Gerar} />

        

      </View>
    </SafeAreaView>
  );
}

export default Jogo;