import { View, Text } from 'react-native';
import {styles} from './styles'


function Experiencia(){
  return(
    <View>
      <Text style={[styles.textoPrincipal, styles.alinhaTexto]}>Experiencia</Text>
      <Text> JavaScript </Text>
    </View>
  )
}


export default Experiencia;