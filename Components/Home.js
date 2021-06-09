import React from "react"
import { 
  StyleSheet, 
  TextInput, 
  View, 
  Text, 
  Button, 
  Image, 
  TouchableOpacity, 
  ScrollView, 
  SafeAreaView, 
  ImageBackground, 
  Dimensions, 
  Animated } from "react-native"
import Carousel from "./Carousel"

import { connect } from "react-redux"

function mapStateToProps(state) {
  // console.log(state)
  return { state }
}

function Home() {
  
  

  return(
    <SafeAreaView style={styles.bannerContainer}>
      <Carousel 
        style="slides"
        itemsPerInterval={1}
        items={[
          {
            id: 1, title: "Explore Original Paintings", posterUrl: require("../assets/images/galaxyraccoon.jpg")
          },
          {
            id: 2, title: "Find Art That Speaks to You", posterUrl: require("../assets/images/blue_volcano.jpg")
          },
          {
            id: 3, title: "Sell Your Pieces", posterUrl: require("../assets/images/burnt-trash.jpg")
          }
        ]} 
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  bannerContainer: {
    flex: 1,
    backgroundColor: "#001219"
  },
  bannerCard: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  bannerTextContainer: {
    position: 'absolute', 
    top: 10, 
    left: 0, 
    right: 0, 
    bottom: 0, 
    alignItems: 'center'
  },
  bannerText: {
    fontFamily: "Cairo-Regular",
    color: "#EBEBEB",
    fontSize: 30,
    backgroundColor: 'rgba(0, 18, 25, 0.60)',
    paddingLeft: 10,
    paddingRight: 10,
  },
  bullets: {
    position: 'absolute', 
    top: 0, 
    left: 0, 
    right: 0, 
    bottom: 0, 
    alignItems: 'center',
    justifyContent: 'center'
  }
})


export default connect(mapStateToProps)(Home)
