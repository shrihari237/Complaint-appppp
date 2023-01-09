import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import firebase from "firebase";
import {firebaseConfig} from "./config"
import Login from "./Screens/Login";

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig)
}
else{
  firebase.app()
}
export default class App extends React.Component{
  render(){
    return(
      <Login/>
    )
  }
}