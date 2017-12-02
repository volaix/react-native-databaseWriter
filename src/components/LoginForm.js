import firebase from 'firebase'
import React, { Component } from 'react'
import { ActivityIndicator, Button, Text, View, StyleSheet, TextInput } from 'react-native'
import { CardSection, Card, Input } from './common'

export default class LoginForm extends Component {
  state = {
    email: '',
    password: '',
    error: undefined,
    login: true,
    loading: false,
  }

  onButtonPress = () => {
    this.setState({ 
      error: undefined,
      loading: true,
    })
    const { email, password } = this.state

    if (this.state.login) {
      firebase.auth().signInWithEmailAndPassword(email, password)
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          this.setState({ 
            error: `could not sign in. error code: "${errorCode}", error message: "${errorMessage}.`,
            loading: false,
          })
          this.setState({ errorCode })
          if (this.state.errorCode === "auth/user-not-found") {
            this.setState({ 
              login: false,
              error: "Hey you don't have any account yet! Lets make you one!",
            })
          }
        })
    } else if (!this.state.login) {
      this.setState({loading:true})

      firebase.auth().createUserWithEmailAndPassword(email, password)
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          this.setState({ 
            error: `could not create new account. error code: "${errorCode}", error message: "${errorMessage}`,
            loading: false,
          })
        })
    }
  }

  render() {
    return (
      <Card >
        <CardSection>
          <Input
            placeholder={"test@gmail.com"}
            onChangeText={email => this.setState({ email })}
            value={this.state.email}
            label={"Username"}
          />
        </CardSection>

        <CardSection>
          <Input
            placeholder={"password"}
            onChangeText={password => this.setState({ password })}
            value={this.state.password}
            label={"Password"}
            secureTextEntry
          />
        </CardSection>

        <CardSection>
          <Button onPress={this.onButtonPress} title={(this.state.login && "Log In") || "Sign Up"} />
          {this.state.loading && <ActivityIndicator/>}
          {this.state.error && <Text>{this.state.error}</Text>}
        </CardSection>
      </Card>
    )
  }
}
