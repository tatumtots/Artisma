import React, { Component } from "react"
import { View, Platform } from "react-native"
import { useSelector } from "react-redux"
import DrawerNavigator from "../navigation/DrawerNavigator"
import { LoginStackNavigator } from "../navigation/StackNavigator"
import { NavigationContainer } from "@react-navigation/native"
import Constants from 'expo-constants'




function MainNavigator() {
  const {auth} = useSelector(state => state)
  return (
    <NavigationContainer>
      {!auth.LoggedIn ? <LoginStackNavigator/> : <DrawerNavigator />}
    </NavigationContainer>
  )
}

class Main extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          paddingTop:
            Platform.OS === "ios" ? 0 : Constants.statusBarHeight,
        }}
      >
      
        <MainNavigator
          style={{
            backgroundColor: "#151515",
          }}
        />
      </View>
    )
  }
}

export default Main
