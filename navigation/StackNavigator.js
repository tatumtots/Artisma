import React, { useState} from "react"
import { Icon } from "react-native-elements"
import { SafeAreaView } from "react-native"
import { createStackNavigator } from "@react-navigation/stack"

import Home from "../Components/Home"
import Explore from "../Components/Explore"
import Upload from "../Components/Upload"
import Profile from "../Components/Profile/UserProfile"
import Notifications from "../Components/Notifications/NotificationsMain"
import Digital from "../Components/ArtismaGallery/Digital"
import Drawing from "../Components/ArtismaGallery/Drawing"
import Painting from "../Components/ArtismaGallery/Painting"
import Photography from "../Components/ArtismaGallery/Photography"
import Sculpture from "../Components/ArtismaGallery/Sculpture"
import NewArtists from "../Components/Artists/NewArtists"
import PopularArtists from "../Components/Artists/PopularArtists"
import AccountSettings from "../Components/Profile/AccountSettings"
import Messages from "../Components/Profile/Messages"
import Orders from "../Components/Profile/Orders"
import StartPage from "../Components/StartPage"
import Login from "../Components/Login"
import SignUp from "../Components/SignUp"

const Stack = createStackNavigator()



const LoginStackNavigator = ({navigate}) => {
  return(
  <Stack.Navigator
  screenOptions={{
        headerShown:false
  }}
  >
    <Stack.Screen name='StartPage' component={StartPage} />
    <Stack.Screen name='Login' component={Login} />
    <Stack.Screen name='SignUp' component={SignUp} />
  </Stack.Navigator>
  )
}

const HomeStackNavigator = ({ navigation }) => {

  return (
    <Stack.Navigator
      screenOptions={{
        headerTitle: "Artisma",
        headerStyle: {
          backgroundColor: "#151515",
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
    >
    
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Digital' component={Digital} />
        <Stack.Screen name='Drawing' component={Drawing} />
        <Stack.Screen name='Painting' component={Painting} />
        <Stack.Screen name='Photography' component={Photography} />
        <Stack.Screen name='Sculpture' component={Sculpture} />
        <Stack.Screen name='New' component={NewArtists} />
        <Stack.Screen name='Popular' component={PopularArtists} />
      
      
    </Stack.Navigator>
  )
}

// const profileNavigator = ({ navigation }) => {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name='Account Settings' component={AccountSettings} />
//       <Stack.Screen name='Messages' component={Messages} />
//       <Stack.Screen name='Orders' component={Orders} />
//     </Stack.Navigator>
//   )
// }

const ExploreStackNavigator = ({ navigation }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitle: "Explore",
        headerStyle: {
          backgroundColor: "#151515",
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
    >
      <Stack.Screen name='Explore' component={Explore} />
    </Stack.Navigator>
  )
}

const UploadStackNavigator = ({ navigation }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitle: "Upload",
        headerStyle: {
          backgroundColor: "#151515",
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
    >
      <Stack.Screen name='Upload' component={Upload} />
    </Stack.Navigator>
  )
}

const ProfileStackNavigator = ({ navigation }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitle: "Account",
        headerStyle: {
          backgroundColor: "#151515",
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
    >
      <Stack.Screen name='Profile' component={Profile} />
    </Stack.Navigator>
  )
}

const NotificationsStackNavigator = ({ navigation }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitle: "Notifications",
        headerStyle: {
          backgroundColor: "#151515",
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
    >
      <Stack.Screen name='Notifications' component={Notifications} />
    </Stack.Navigator>
  )
}

export {
  LoginStackNavigator,
  HomeStackNavigator,
  ExploreStackNavigator,
  UploadStackNavigator,
  ProfileStackNavigator,
  NotificationsStackNavigator,
}
