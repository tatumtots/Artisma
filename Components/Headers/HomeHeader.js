import React from "react"
import { Icon } from 'react-native-elements'
import Home from "../Home"
import { createStackNavigator } from "@react-navigation/stack"

const Stack = createStackNavigator()

function HomeScreen(props) {
    const {navigation} = props
    return(
        <Stack.Navigator>
        <Stack.Screen
        name='Artisma'
        component={Home}
        options={{
            headerTitle: "Artisma",
            headerStyle: {
            backgroundColor: "#040720"
            },
            headerTitleStyle: {
            color: "red",
            fontSize: 25,
            marginLeft: "10%",
            },
            headerLeft: () => (
            <Icon
                name= 'bars'
                type= 'font-awesome'
                iconStyle={{
                color: "red",
                margin: 15,
                }}
                size= {25}
                onPress={() => navigation.toggleDrawer()}
            />
            )
        }}
        />
        </Stack.Navigator>
    )
}

export default HomeScreen