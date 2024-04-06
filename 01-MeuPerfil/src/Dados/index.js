import { View, Text } from 'react-native';
import {styles} from './styles'


function Dados(){
  return(
    <View>
      <Text style={[styles.textoPrincipal, styles.alinhaTexto]}>Dados</Text>
      <Text> 13998804556 </Text>
    </View>
  )
}


export default Dados;