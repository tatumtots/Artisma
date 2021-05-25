import React from "react"
import { Icon } from "react-native-elements"
import Sculpture from "../ArtismaGallery/Sculpture"
import { createStackNavigator } from "@react-navigation/stack"

const Stack = createStackNavigator()

function SculptureScreen(props) {
  const { navigation } = props
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Artisma'
        component={Sculpture}
        options={{
          headerTitle: "Artisma",
          headerStyle: {
            backgroundColor: "#001219",
          },
          headerTitleStyle: {
            fontFamily: "Megrim-Regular",
            color: "#F93737",
            fontSize: 40,
            marginLeft: "1%",
          },
          headerLeft: () => (
            <Icon
              name='bars'
              type='font-awesome'
              iconStyle={{
                color: "#EBEBEB",
                margin: 10,
              }}
              size={30}
              onPress={() => navigation.toggleDrawer()}
            />
          ),
        }}
      />
    </Stack.Navigator>
  )
}

export default SculptureScreen
