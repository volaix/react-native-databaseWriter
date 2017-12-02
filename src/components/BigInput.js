import React, { Component } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';

export default class BigInput extends Component {

  render() {
    return (
      <View style={{
        backgroundColor: '#FFF',
        borderBottomColor: '#000000',
        borderBottomWidth: 1
      }}
      >
        <TextInput
          style={styles.inputStyle}
          editable = {true}
          multiline={true}
          numberOfLines={4}
          onChangeText={this.props.changeText}
          value={this.props.text}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
  },
})