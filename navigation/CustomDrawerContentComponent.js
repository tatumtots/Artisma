import React, { Component } from "react"
import { ScrollView, Text, View, StyleSheet } from "react-native"
import SafeAreaView from "react-native-safe-area-view"
import { Icon } from "react-native-elements"
import { useDispatch } from "react-redux"
import {signOut} from "../Redux/Login/authSlice"

function CustomDrawerContentComponent(props) {
  const { navigation } = props

  const dispatch = useDispatch()

  function logout(e){
    // submits the payload for signIn in authSlice
    dispatch(signOut());
    e.preventDefault();
  }
  return (
    <ScrollView style={{ backgroundColor: "#1E2E33" }}>
      <SafeAreaView
        style={styles.container}
        forceInset={{ top: "always", horizontal: "never" }}
      >
        <View>
          <Icon
            name='times'
            type='font-awesome'
            iconStyle={{
              color: "#929292",
              flexDirection: "row-reverse",
              marginRight: 220,
              marginTop: 15,
            }}
            size={30}
            onPress={() => props.navigation.closeDrawer()}
          />
        </View>

        {/* Shop Header */}
        <View style={styles.drawerHeader}>
          <View style={{ flex: 2 }}>
            <Text style={styles.drawerHeaderText}>Shop</Text>
          </View>
        </View>

        {/* Painting Navigator */}
        <View style={styles.drawerItem}>
          <Text
            style={styles.drawerItemText}
            onPress={() => navigation.navigate("Painting")}
          >
            Painting
          </Text>
        </View>

        {/* Drawing Navigator */}
        <View style={styles.drawerItem}>
          <Text
            style={styles.drawerItemText}
            onPress={() => navigation.navigate("Drawing")}
          >
            Drawing
          </Text>
        </View>

        {/* Photography Navigator */}
        <View style={styles.drawerItem}>
          <Text
            style={styles.drawerItemText}
            onPress={() => navigation.navigate("Photography")}
          >
            Photography
          </Text>
        </View>

        {/* Sculpture Navigator */}
        <View style={styles.drawerItem}>
          <Text
            style={styles.drawerItemText}
            onPress={() => navigation.navigate("Sculpture")}
          >
            Sculpture
          </Text>
        </View>

        {/* Digital Navigator */}
        <View style={styles.drawerItem}>
          <Text
            style={styles.drawerItemText}
            onPress={() => navigation.navigate("Digital")}
          >
            Digital
          </Text>
        </View>

        {/* Artists Header */}
        <View style={styles.drawerHeader}>
          <View style={{ flex: 2 }}>
            <Text style={styles.drawerHeaderText}>Artists</Text>
          </View>
        </View>

        {/* Popular Navigator */}
        <View style={styles.drawerItem}>
          <Text
            style={styles.drawerItemText}
            onPress={() => navigation.navigate("Popular")}
          >
            Popular
          </Text>
        </View>

        {/* New Navigator */}
        <View style={styles.drawerItem}>
          <Text
            style={styles.drawerItemText}
            onPress={() => navigation.navigate("New")}
          >
            New
          </Text>
        </View>
        {/* Login Navigator */}
        <View style={styles.drawerItem}>
          <Text
            style={styles.logoutText}
            onPress={logout}
          >
            Logout
          </Text>
        </View>
      </SafeAreaView>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1E2E33",
  },
  drawerHeader: {
    backgroundColor: "#1E2E33",
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    flexDirection: "row",
  },
  drawerHeaderText: {
    textAlign: "center",
    color: "#F93737",
    fontSize: 30,
    fontFamily: "Cairo-Regular",
  },
  drawerItem: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 15,
  },
  drawerItemText: {
    color: "#EBEBEB",
    fontSize: 24,
    fontFamily: "Assistant-Regular",
  },
  logoutText:{
    textAlign: "center",
    color: "#929292",
    fontSize: 40,
    fontFamily: "Megrim-Regular",
    paddingTop: "25%"
  }
})

export default CustomDrawerContentComponent
