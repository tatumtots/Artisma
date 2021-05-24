import React from "react"
import { Icon } from 'react-native-elements'
import Explore from "../Explore"
import { createStackNavigator } from "@react-navigation/stack"

const Stack = createStackNavigator()

function ExploreScreen(props) {
    const {navigation} = props
    return(
        <Stack.Navigator>
        <Stack.Screen
        name='Artisma'
        component={Explore}
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

export default ExploreScreen