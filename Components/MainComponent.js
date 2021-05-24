import React, { Component } from "react"
import { View, Platform } from "react-native"
import { Icon } from 'react-native-elements'
import HomeScreen from "./Headers/HomeHeader"
import DrawingScreen from "./Headers/DrawingHeader"
import PaintingScreen from "./Headers/PaintingHeader"
import PhotographyScreen from "./Headers/PhotographyHeader"
import SculptureScreen from "./Headers/SculptureHeader"
import DigitalScreen from "./Headers/DigitalHeader"
import PopularArtistsScreen from './Headers/PopularArtistsHeader'
import NewArtistsScreen from './Headers/NewArtistsHeader'
import CustomDrawerContentComponent from "./CustomDrawerContentComponent"
import { NavigationContainer } from "@react-navigation/native"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { createStackNavigator } from "@react-navigation/stack"

const Drawer = createDrawerNavigator()


function MainNavigator() {
    return(
        <NavigationContainer>
            <Drawer.Navigator
                drawerContent={(props) => <CustomDrawerContentComponent {...props} />}
            >
                <Drawer.Screen name='Home' component={HomeScreen} />
                <Drawer.Screen name='Painting' component={PaintingScreen} />
                <Drawer.Screen name='Drawing' component={DrawingScreen} />
                <Drawer.Screen name='Photography' component={PhotographyScreen} />
                <Drawer.Screen name='Sculpture' component={SculptureScreen} />
                <Drawer.Screen name='Digital' component={DigitalScreen} />
                <Drawer.Screen name='Popular' component={PopularArtistsScreen} />
                <Drawer.Screen name='New' component={NewArtistsScreen} />
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