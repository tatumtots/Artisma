import React, { useState } from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { MainStackNavigator, ExploreStackNavigator, ProfileStackNavigator, CartStackNavigator, ShopStackNavigator } from "./StackNavigator"

const Tab = createBottomTabNavigator()

function MainBottomTabs() {
  return (
    
      <Tab.Navigator>
        <Tab.Screen name='Home' component={MainStackNavigator} />
        <Tab.Screen name='Explore' component={ExploreStackNavigator} />
        <Tab.Screen name='Profile' component={ProfileStackNavigator} />
        <Tab.Screen name='Cart' component={CartStackNavigator} />
      </Tab.Navigator>
    
  )
}

function ShopBottomTabs() {
  return (
    
      <Tab.Navigator>
        <Tab.Screen name='Home' component={ShopStackNavigator} />
        <Tab.Screen name='Explore' component={ExploreStackNavigator} />
        <Tab.Screen name='Profile' component={ProfileStackNavigator} />
        <Tab.Screen name='Cart' component={CartStackNavigator} />
      </Tab.Navigator>
    
  )
}


export { MainBottomTabs, ShopBottomTabs }
