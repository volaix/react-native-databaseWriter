import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import MapView from 'react-native-maps';
import Header from './src/components/Header'
import LoginForm from './src/components/LoginForm'
import firebase from 'firebase'
import {Card} from './src/components/common'
import SubmitForm from './src/components/SubmitForm'


export default class DatabaseWriter extends React.Component {
  constructor() {
    super();
    this.state = {
      authenticated: null,
    }
  }
  componentDidMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyDtC2ucE8BhiTRtrEBKEYxo3G2myy_D-ss",
      authDomain: "weatherapp-55fd9.firebaseapp.com",
      databaseURL: "https://weatherapp-55fd9.firebaseio.com",
      projectId: "weatherapp-55fd9",
      storageBucket: "weatherapp-55fd9.appspot.com",
      messagingSenderId: "97909310534"
    })
    this.signedIn()
  }

  signedIn = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
     this.setState({authenticated:true})
     console.log(`we have been authenticated as true`)
    } else if (!user){
      this.setState({authenticated:false})
    }
  });
  }

  signInOrSignOut = () => {
    if (!this.state.authenticated){
      return (
        <LoginForm />
      )
    } else if (this.state.authenticated) {
      return (
        <View>
          <SubmitForm />
          <Card>
            <Button title='Sign Out' onPress={() => { firebase.auth().signOut() }} />
          </Card>
        </View>
      )
    }

  }

  render() {
    return (
      <View>
        <Header />
        {this.signInOrSignOut()}
      </View>
    )
    
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#444'
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
    zIndex: 0,
  },
  layerup: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#444',
    zIndex: 1,
  }
});

