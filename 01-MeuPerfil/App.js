import { View, Text, Image } from 'react-native';
 
 
import Foto from './src/foto'
import Dados from './src/Dados'
import Projeto from './src/Projeto'
import Experiencia from './src/Experiencia'
import Formacao from './src/Formacao'

function App() {
  return (
    <View>
      <Foto />
      <Projeto />
      <Experiencia />
      <Dados />
      <Formacao />
    </View>

    
  
  );
};


export default App;
