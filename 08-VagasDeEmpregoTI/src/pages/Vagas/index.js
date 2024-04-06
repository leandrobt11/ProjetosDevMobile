import { View, Text, ScrollView } from 'react-native'
import {styles} from './styles'
import Vaga from '../../components/Vaga'

function Vagas(){
  return(
    <View style={styles.tela}>

      <Text style={styles.titulo}>Vagas</Text>
  
        <ScrollView vertical={true} showsVerticalScrollIndicator={true}>
          
          <Vaga titulo='Desenvolvedor Backend' salario='R$ 3500' descricao='Trabalhar muito com NodeJS' contato='Maria - 011 987654321 ou maria@gmail.com'/>

          <Vaga titulo='Analista de Dados' salario='R$ 5000' descricao='Trabalhar com Python e SQL.' contato='Maria - 011 987654321 ou maria@gmail.com'/>

          <Vaga titulo='Gerente de Projetos de TI' salario='R$ 7000' descricao='Gerenciar projetos de TI desde o planejamento até a implementação, coordenando equipes e recursos.' contato='Maria - 011 987654321 ou maria@gmail.com'/>

          <Vaga titulo='Analista de Segurança da Informação' salario='R$ 6000' descricao='Garantir a segurança dos sistemas e dados da empresa, realizando análises de vulnerabilidades e implementando medidas de proteção.' contato='Maria - 011 987654321 ou maria@gmail.com'/>

        </ScrollView>
    </View>
  )
}

export default Vagas