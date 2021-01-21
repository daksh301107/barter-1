import * as React from 'react';
import { Text,
         View,
         StyleSheet,
         TextInput,
         TouchableOpacity,
         Alert
         } from 'react-native';
import db from '../config';
import firebase from 'firebase';

export default class WelcomeScreen extends React.Component {
    constructor(){
        super();
        this.state = {
            email: '',
            password: ''
        }
    }
    userLogIn = (email, password) =>{
        firebase.auth().signInWithEmailAndPassword(email,password)
        .then(()=>{
            return Alert.alert("Success Login")
        })
        .catch((error)=>{
            var errorCode = error.code;
            var errorMessage = error.message;
            return Alert.alert(errorMessage);
        })
    }

    userSignUp = (email, password) =>{
        firebase.auth().createUserWithEmailAndPassword(email,password)
        .then(()=>{
            return Alert.alert("User Added Successfully")
        })
        .catch(function(error){
            var errorCode = error.code;
            var errorMessage = error.message;
            return Alert.alert(errorMessage);
        })
    }
  render(){
  return (
      <View  style={{backgroundColor: '#D5EFFF'}}>
    <View>
        <Text
    style={styles.title}
    >Barter App</Text>

       <TextInput
        style={styles.Textinput}
        placeholder = "Email ID"
        keyboardType = 'email-address'
        onChangeText = {(text)=>{
            this.setState({email : text})
        }}
        /> 
        <TextInput
         style={styles.Textinput}
        secureTextEntry = {true}
        placeholder = "Password"
        onChangeText = {(text)=>{
            this.setState({password : text})
        }}
        /> 
        <TouchableOpacity
        style={styles.button}
        onPress = {()=>{this.userLogIn(this.state.email, this.state.password)}}
        >
            <Text
            style={styles.buttonText}
            >
           Login
          </Text>
             </TouchableOpacity>
        <TouchableOpacity
        style={styles.button}
        onPress = {()=>{this.userSignUp(this.state.email, this.state.password)}}
        >
            <Text
            style={styles.buttonText}
            >
             Sign Up
            </Text>
            </TouchableOpacity>

</View>
</View>
  );
  }

}

const styles = StyleSheet.create({
    Textinput:{
        height : 38,
        fontSize: 28,
        width: 300,
        alignSelf: "center",
        textAlign: "center",
        margin: 10,
        borderWidth: 2.5 
    },
    title:{
        textAlign: "center",
        fontSize: 40,
        backgroundColor: '#33FF00',
        margin: 20,
        color: 'black'
    },
    button:{
        margin: 20,
        backgroundColor: '#9212e8',
        width: 80,
        height: 60,
        alignSelf: 'center'
    },
    buttonText:{
    alignSelf: 'center',
    textAlign: 'center',
    alignContent: 'center',
    color: 'white',
    fontSize: 20,
    margin:3
    }
});
