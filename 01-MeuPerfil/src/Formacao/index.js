import { View, Text } from 'react-native';
import {styles} from './styles'


function Formacao(){
  return(
    <View>
      <Text style={[styles.textoPrincipal, styles.alinhaTexto]}>Formação</Text>
      <Text> Fatec PG </Text>
    </View>
  )
}


export default Formacao;