import React from "react"
import { Icon } from "react-native-elements"
import { createStackNavigator } from "@react-navigation/stack"

import Home from "../Components/Home"
import Explore from "../Components/Explore"
import Profile from "../Components/Profile/UserProfile"
import Cart from "../Components/ShoppingCart/CartMain"
import Digital from "../Components/ArtismaGallery/Digital"
import Drawing from "../Components/ArtismaGallery/Drawing"
import Painting from "../Components/ArtismaGallery/Painting"
import Photography from "../Components/ArtismaGallery/Photography"
import Sculpture from "../Components/ArtismaGallery/Sculpture"
import NewArtists from "../Components/Artists/NewArtists"
import PopularArtists from "../Components/Artists/PopularArtists"


const Stack  = createStackNavigator()

const MainStackNavigator = ({navigation}) => {
    return(
        <Stack.Navigator
            screenOptions={{
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
        >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Digital" component={Digital} />
            <Stack.Screen name="Drawing" component={Drawing} />
            <Stack.Screen name="Painting" component={Painting} />
            <Stack.Screen name="Photography" component={Photography} />
            <Stack.Screen name="Sculpture" component={Sculpture} />
            <Stack.Screen name="New" component={NewArtists} />
            <Stack.Screen name="Popular" component={PopularArtists} />
        </Stack.Navigator>
    )
}

const ExploreStackNavigator = ({navigation}) => {
    return(
        <Stack.Navigator
            screenOptions={{
                headerTitle: "Explore",
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
        >
            <Stack.Screen name="Explore" component={Explore} />
        </Stack.Navigator>
    )
}

const ProfileStackNavigator = ({navigation}) => {
    return(
        <Stack.Navigator
            screenOptions={{
                headerTitle: "Account",
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
        >
            <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>
    )
}

const CartStackNavigator = ({navigation}) => {
    return(
        <Stack.Navigator
            screenOptions={{
                headerTitle: "Checkout",
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
        >
            <Stack.Screen name="Cart" component={Cart} />
        </Stack.Navigator>
    )
}



export { MainStackNavigator, ExploreStackNavigator, ProfileStackNavigator, CartStackNavigator } 