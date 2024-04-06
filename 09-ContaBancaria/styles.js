import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'flex',
},
  titulo: {
  marginTop: 15,
  fontSize: 30,
  color: 'black',
  marginBottom: 1,
  fontFamily: 'Arial', // Fonte alterada para Arial
},
  entradaTexto: {
    width: '90%',
    marginBottom: 10,
    padding: 15,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 10,
    margin: 10,
    fontFamily: 'Arial', // Fonte alterada para Arial
  },
  controleDeslizante: {
    width: '90%',
    marginBottom: 10,
    margin: 10,
    fontFamily: 'Arial', // Fonte alterada para Arial
  },
  containerSwitch: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    fontFamily: 'Arial', // Fonte alterada para Arial
  },
  textoExibido: {
    marginTop: 15,
    fontSize: 18,
    fontFamily: 'Arial', // Fonte alterada para Arial
  },
});

export { styles };