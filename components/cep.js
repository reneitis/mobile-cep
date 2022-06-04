import { React } from 'react';
import {StyleSheet, Text,} from 'react-native';



export default function Cep (props){
return (

<>
<Text style={styles.texto} >CEP:{props.data.cep}</Text>
<Text style={styles.texto} >RUA:{props.data.logradouro}</Text>
<Text style={styles.texto} >BAIRRO:{props.data.bairro}</Text>
<Text style={styles.texto} >CIDADE:{props.data.localidade}</Text>
<Text style={styles.texto} >ESTADO:{props.data.uf}</Text>
</>
);
}



const styles = StyleSheet.create({
texto:{
marginTop:20,
fontSize:20,
},


})