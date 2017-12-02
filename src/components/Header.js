import React from 'react'
import { StyleSheet, View, Text } from "react-native"

const Header = () => (
  <View style={headerStyle}>
    {/* <View style={{width: 10, height: 10, backgroundColor: 'red', }}></View> */}
    <Text style={textStyle}>Database Writer</Text>
  </View>
)

const styles = StyleSheet.create({
  headerStyle: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: "#fd5c63",
    // shadowColor: '#000',
    // shadowOpacity: 0.5,
    // shadowOffset: {width: 0, height: 2},
    elevation: 2,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
    height: 60,
    // top: 200,
  },
  textStyle: {
    fontSize: 20,
    color: "#FFF",
    fontWeight: '500' 
    // lineHeight:20,
  }
})

const { headerStyle, textStyle } = styles

export default Header