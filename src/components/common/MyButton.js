import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'

const MyButton = (props) => (
      <View style={styles.containerStyle}>
        {props.children}
      </View>
)

const styles = StyleSheet.create({
  containerStyle : {
    // color: '#007aff',
    overflow: 'hidden',
    borderRadius: 9,
    borderWidth: 2,
    borderColor: '#007aff',
  },
})

export { MyButton }