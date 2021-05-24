import React, { Component } from "react"
import { View, Platform } from "react-native"
import { Icon } from 'react-native-elements'
import HomeScreen from "./Headers/HomeHeader"
import LoginScreen from "./Headers/LoginHeader"
import SignUpScreen from "./Headers/SignUpHeader"
import ExploreScreen from "./Headers/ExploreHeader"
import { NavigationContainer } from "@react-navigation/native"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { createStackNavigator } from "@react-navigation/stack"

const Drawer = createDrawerNavigator()


function MainNavigator() {
    return(
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name='Home' component={HomeScreen} />
                <Drawer.Screen name='Login' component={LoginScreen} />
                <Drawer.Screen name='Sign Up' component={SignUpScreen} />
                <Drawer.Screen name='Explore' component={ExploreScreen} />
            </Drawer.Navigator>
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
                Platform.OS === "ios" ? 0 : Expo.Constants.statusBarHeight,
            }}
            >
            <MainNavigator
                style={{
                backgroundColor: "#272727",
                }}
            />
            </View>
        )
    }
}

export default Main