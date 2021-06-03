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
import { Card } from "react-native-elements"

import { connect } from "react-redux"

function mapStateToProps(state) {
  // console.log(state)
  return { state }
}

const ItemWidth = Dimensions.get("window").width
const ItemHeight = 250

const cards = [
  {id: 1, title: "Explore Digital Paintings", posterUrl: require("../assets/images/galaxyraccoon.jpg")},
  {id: 2, title: "Find Art That Speaks to You", posterUrl: require("../assets/images/blue_volcano.jpg")},
  {id: 3, title: "Sell Your Pieces", posterUrl: require("../assets/images/burnt-trash.jpg")},
]

function Home() {
  return(
    <SafeAreaView style={styles.bannerContainer}>
      <ScrollView
      horizontal={true}
      decelerationRate={"normal"}
      snapToInterval={ItemWidth}
      bounces={false}
      style={{ marginTop:0, paddingHorizontal: 0 }}
      showsHorizontalScrollIndicator={false}
      scrollEventThrottle={20}
      >
        {cards.map((item, idx) => {
          return(
            <View
              key={item.id}
              style={{
                width: ItemWidth,
                height: ItemHeight,
              }}
            >
              <ImageBackground 
                source={item.posterUrl}
                style={styles.bannerCard}
              />
              <View style={styles.bannerTextContainer}>
                <Text style={styles.bannerText }>{item.title}</Text>
              </View>
              
            </View>
          )
        })}
      </ScrollView>
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
  }
})
// <Text
//   style={{
//     fontFamily: "Cairo-Regular",
//     color: "#F93737",
//     fontSize: 50,
//   }}
// >
//   {props.state.image.map((i) => i.title)[1]}
// </Text>

export default connect(mapStateToProps)(Home)
