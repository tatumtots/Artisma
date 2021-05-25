import React, { useState } from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import HomeScreen from "./Headers/HomeHeader"
import Explore from "./Explore"
import UserProfile from "./Profile/UserProfile"
import CartMain from "./ShoppingCart/CartMain"
import { NavigationContainer } from "@react-navigation/native"

const Tab = createBottomTabNavigator()

function BottomTabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='Home' component={HomeScreen} />
        <Tab.Screen name='Explore' component={Explore} />
        <Tab.Screen name='Profile' component={UserProfile} />
        <Tab.Screen name='Cart' component={CartMain} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default BottomTabs
