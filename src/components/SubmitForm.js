import React from 'react'
import { View, StyleSheet, Button, Text } from 'react-native'
import BigInput from './BigInput'
import {CardSection, Card, MyButton} from './common'
import firebase from 'firebase'

export default class SubmitForm extends React.Component{
  state = {
    text: 'default text',
    message: null,
    currentTime: new Date().toLocaleString(),
    lastUpdatedTime: 'default time',
    whoLastEdited: 'Joe Blogs',
  }
  componentDidMount() {
    firebase.database()
    .ref('/text/')
    .on('value', snapshot => {
      const { text, whoLastEdited, lastUpdatedTime } = snapshot.val()
      this.setState({
        text,
        whoLastEdited,
        lastUpdatedTime
      })
    });
  }


  changeText = (text) => {
    this.setState({text})
  }

  handleSendToDatabase = () => {
    // const { currentUser } = firebase.auth()
    const auth = firebase.auth()
    console.log(auth)

    firebase.database().ref(`/text/`)
      .set({
        text: this.state.text,
        whoLastEdited: auth.currentUser.providerData[0].email,
        lastUpdatedTime: this.state.currentTime,
      })

    this.setState({ message: 'wrote to database' })

    //hide message after 2 seconds
    setTimeout(() => {
      this.setState({ message: null })
    }, 1000);

  }

  render() {
    return (
      <View>
        <Card>

          <CardSection>
            <Text>Database was last edited by {this.state.whoLastEdited}</Text>
            <Text>It was edited at {this.state.lastUpdatedTime} (GMT+0)</Text>
          </CardSection>

          <CardSection>
            <BigInput text={this.state.text} changeText={this.changeText}/>
          </CardSection>

          <CardSection style={styles.ButtonLayoutStyle}>

            <MyButton>
              <Button onPress={()=>this.setState({ text:'' })} title="Reset" />
            </MyButton>

            <MyButton >
              <Button onPress={this.handleSendToDatabase} title='Send to Database' />
            </MyButton>
            {this.state.message && <Text>{this.state.message}</Text>}

          </CardSection>

        </Card>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  ButtonLayoutStyle: {
    display: 'flex',
    flexDirection: "column",
  }
})