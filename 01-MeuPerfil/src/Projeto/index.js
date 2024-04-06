import { View, Text } from 'react-native';
import {styles} from './styles'


function Projeto(){
  return(
    <View>
      <Text style={[styles.textoPrincipal, styles.alinhaTexto]}>Projeto</Text>
      <Text> CGM - Controle de guarita </Text>
    </View>
  )
}


export default Projeto;