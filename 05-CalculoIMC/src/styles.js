import {StyleSheet} from 'react-native';
 
const styles = StyleSheet.create({
    titulo: {
    fontSize:30,
    color:'blue',
    fontFamily:'Times new roman',
    textAlign: 'center',
    marginTop: 40,
    },
    img: {
        margin: 25,
        width: 150,
        height: 150,
        alignSelf: 'center',
    },
    entrada: {
        height: 45,
        width: 200,
        borderWidth: 1,
        borderColor: '#222',
        margin: 15,
        fontSize: 18,
        padding: 10,
        alignSelf: 'center'
    },
    botao: {
        height: 45,
        width: 200,
        alignSelf: 'center',
        backgroundColor: '#00F8AE'
    },
    textoBotao: {
        fontFamily: 'impact',
        alignSelf: 'center',
        paddingTop: 5,
        fontSize: 30,
 
    },
    resultado: {
        fontFamily: 'impact',
        alignSelf: 'center',
        fontSize: 40,
        color: 'blue',
        marginTop: 40,
    }
})
 
export {styles}