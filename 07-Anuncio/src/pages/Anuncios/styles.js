import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  titulo:{
    fontSize: 24,
    color: 'purple',
    textAlign: 'center',
    marginTop: 40
  },

    container:{
    flex: 1
  },
  box:{
    backgroundColor: '#fff',
    height: 250,
    width: 150,
    margin: 10,
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 5,
  },

  tela:{
    marginTop: 40
  },

  image:{
    flex: 1,
    width: 150,
    height: 100,
    resizeMode: 'cover',
  }
})

export {styles}