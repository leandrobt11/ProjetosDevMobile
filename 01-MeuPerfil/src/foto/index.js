import { View, Text, Image } from 'react-native'
import {styles} from './styles'


function Foto(){
  let img = 'https://avatars.githubusercontent.com/u/142258252?v=4';
  return(
    <View style={styles.area}>
      <Image
          source={{ uri: img }}
          style={{ width: 300, height: 300, marginLeft: 15}}
        />
    </View>
  )
}


export default Foto