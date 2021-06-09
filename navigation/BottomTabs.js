import React, { useState } from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Ionicons from "@expo/vector-icons/Ionicons"
import { HomeStackNavigator, ExploreStackNavigator, ProfileStackNavigator, CartStackNavigator} from "./StackNavigator"

const Tab = createBottomTabNavigator()

function MainBottomTabs() {
  return (
    
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({ focused, color, size}) => {
            let iconName
            if (route.name === 'Home') {
              iconName = focused ? "ios-home" : "ios-home"
            } else if (route.name === 'Explore') {
              iconName = focused ? "ios-compass" : "ios-compass"
            }else if (route.name === 'Profile') {
              iconName = focused ? "ios-person" : "ios-person"
            }else if (route.name === 'Cart') {
              iconName = focused ? "ios-cart" : "ios-cart"
            }
            return <Ionicons name={iconName} size={25} color={"#F93737"}/>
          }
        })}
        tabBarOptions={{
          activeTintColor: "#F93737",
          inactiveTintColor: "#F93737",
          activeBackgroundColor: "#001219",
          inactiveBackgroundColor: "#001219",
          showLabel: false
        }}
        
      >
        <Tab.Screen name='Home' component={HomeStackNavigator} />
        <Tab.Screen name='Explore' component={ExploreStackNavigator} />
        <Tab.Screen name='Profile' component={ProfileStackNavigator} />
        <Tab.Screen name='Cart' component={CartStackNavigator} />
      </Tab.Navigator>
    
  )
}



export { MainBottomTabs }
