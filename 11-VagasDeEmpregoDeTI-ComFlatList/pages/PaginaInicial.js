import React from 'react';
import { View, Text, FlatList } from 'react-native';

const jobs = [
{ title: 'Analista de Dados', salary: 'R$ 5000', description: 'Trabalhar na análise e interpretação de grandes conjuntos de dados utilizando ferramentas como Python e SQL.', contact: 'Maria - 011 987654321 ou maria@gmail.com' },

{ title: 'Desenvolvedor FrontEnd', salary: 'R$ 4000', description: 'Desenvolver interfaces de usuário interativas e responsivas utilizando HTML, CSS e JavaScript.', contact: 'João - 011 987654321 ou joao@gmail.com' },

{ title: 'Gerente de Projetos de TI', salary: 'R$ 7000', description: 'Gerenciar projetos de TI desde o planejamento até a implementação, coordenando equipes e recursos.', contact: 'Ana - 011 987654321 ou ana@gmail.com' },

{ title: 'Analista de Segurança da Informação', salary: 'R$ 6000', description: 'Garantir a segurança dos sistemas e dados da empresa, realizando análises de vulnerabilidades e implementando medidas de proteção.', contact: 'Pedro - 011 987654321 ou pedro@gmail.com' },

{ title: 'Especialista em Cloud Computing', salary: 'R$ 8000', description: 'Implementar e gerenciar soluções em nuvem, otimizando a infraestrutura e garantindo a escalabilidade dos serviços.', contact: 'Sofia - 011 987654321 ou sofia@gmail.com' },
];

const PaginaInicial = () => {
  const renderJobItem = ({ item }) => (
    <View style={{ padding: 20, borderBottomWidth: 1, borderBottomColor: '#ccc', borderStyle: 'solid', backgroundColor: 'lightgray' }}>
    <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'red' }}>{item.title}</Text>
    <Text style={{ fontSize: 16, fontStyle: 'italic' }}>{item.company}</Text>
    <Text style={{ fontSize: 16 }}>Salário: {item.salary}</Text>
    <Text style={{ fontSize: 16 }}>Descrição: {item.description}</Text>
    <Text style={{ fontSize: 16 }}>Contato: {item.contact}</Text>
</View>

  );

  return (
    <FlatList
      data={jobs}
      renderItem={renderJobItem}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

export default PaginaInicial;
