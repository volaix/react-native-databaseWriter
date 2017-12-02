import React from 'react'
import { View, StyleSheet } from 'react-native'

const CardSection = (props) => (
  <View style={styles.containerStyle}>
    {props.children}
  </View>
)

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: '#fff',
    borderColor: '#ddd',
    borderBottomWidth: 1,
    padding: 5,
    justifyContent: 'flex-start',
    flexDirection: 'column',
    position:'relative',
  }
}) 

export { CardSection }