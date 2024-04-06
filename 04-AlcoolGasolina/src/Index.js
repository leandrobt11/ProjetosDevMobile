import React, { useState } from 'react'
import { View, Text, TextInput, Button, SafeAreaView, Image } from 'react-native'
import {styles} from './styles'

function Verificar(){
  const [resultado, setResultado] = useState()
  const [input1, setInput1] = useState()
  const [input2, setInput2] = useState()

  return(
    
    <SafeAreaView>
      <View style={styles.area}>
        <Text style={styles.titulo}>Alcool ou Gasolina</Text>
        <TextInput
          style={styles.input}
          placeholder="Alcool"
          onChangeText={setInput1}
          keyboardType='numeric'
        />
        
        <TextInput
          style={styles.input}
          placeholder="Gasolina"
          onChangeText={setInput2}
          keyboardType='numeric'
        />

        <Button title='Verificar' color='blue' onPress={() => setResultado(input1 / input2)}/>

        <Text style={styles.resultado}>{resultado}</Text>

        </View>
    </SafeAreaView>
  )
}

export default Verificar