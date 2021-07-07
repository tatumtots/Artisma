import React, { useState } from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Ionicons from "@expo/vector-icons/Ionicons"
import { HomeStackNavigator, ExploreStackNavigator, UploadStackNavigator, ProfileStackNavigator, NotificationsStackNavigator} from "./StackNavigator"

const Tab = createBottomTabNavigator()

function MainBottomTabs() {
  return (
    
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({ focused, color, size}) => {
            let iconName
            if (route.name === 'Home') {
              iconName = focused ? "ios-home-sharp" : "ios-home-sharp"
            } else if (route.name === 'Explore') {
              iconName = focused ? "ios-compass" : "ios-compass"
            }else if (route.name === 'Upload') {
              iconName = focused ? "ios-add-circle-sharp" : "ios-add-circle-sharp"
            }else if (route.name === 'Profile') {
              iconName = focused ? "ios-person" : "ios-person"
            }else if (route.name === 'Notifications') {
              iconName = focused ? "ios-notifications-sharp" : "ios-notifications-sharp"
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
        <Tab.Screen name='Upload' component={UploadStackNavigator} />
        <Tab.Screen name='Profile' component={ProfileStackNavigator} />
        <Tab.Screen name='Notifications' component={NotificationsStackNavigator} />
      </Tab.Navigator>
    
  )
}



export { MainBottomTabs }
