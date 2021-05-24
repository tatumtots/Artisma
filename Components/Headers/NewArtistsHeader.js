import React from "react"
import { Icon } from 'react-native-elements'
import NewArtists from "../Artists/NewArtists"
import { createStackNavigator } from "@react-navigation/stack"

const Stack = createStackNavigator()

function NewArtistsScreen(props) {
    const {navigation} = props
    return(
        <Stack.Navigator>
        <Stack.Screen
        name='Artisma'
        component={NewArtists}
        options={{
            headerTitle: "Artisma",
            headerStyle: {
            backgroundColor: "#001219"
            },
            headerTitleStyle: {
                fontFamily: "Megrim-Regular",
                color: "#F93737",
                fontSize: 40,
                marginLeft: "1%",
            },
            headerLeft: () => (
            <Icon
                name= 'bars'
                type= 'font-awesome'
                iconStyle={{
                color: "#EBEBEB",
                margin: 10,
                }}
                size= {40}
                onPress={() => navigation.toggleDrawer()}
            />
            )
        }}
        />
        </Stack.Navigator>
    )
}

export default NewArtistsScreen