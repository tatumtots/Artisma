import React from "react"

import { createDrawerNavigator } from '@react-navigation/drawer'
import CustomDrawerContentComponent from "./CustomDrawerContentComponent"

import {MainBottomTabs, ShopBottomTabs} from "./BottomTabs"


const Drawer = createDrawerNavigator()

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator drawerContent={(props) => <CustomDrawerContentComponent {...props} />}>
            <Drawer.Screen name="Home" component ={MainBottomTabs} />
        </Drawer.Navigator>
    )
}

export default DrawerNavigator