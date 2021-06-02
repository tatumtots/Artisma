import React, { useRef } from "react"
import { 
  StyleSheet, 
  View, 
  Text, 
  TouchableOpacity, 
  ScrollView, 
  SafeAreaView, 
  ImageBackground, 
  Dimensions, 
  Animated 
} from "react-native"

import { connect } from "react-redux"

function mapStateToProps(state) {
  // console.log(state)
  return { state }
}

const Offset = 40
const ItemWidth = Dimensions.get("window").width - (Offset * 2)
const ItemHeight = 250

const cards = [
  {id: 1, title: "Explore Digital Paintings", posterUrl: require("../assets/images/galaxyraccoon.jpg")},
  {id: 2, title: "Find Art That Speaks", posterUrl: require("../assets/images/blue_volcano.jpg")},
  {id: 3, title: "Sell Your Pieces", posterUrl: require("../assets/images/burnt-trash.jpg")},
]

function Home() {
  const scrollX = useRef(new Animated.Value(0)).current

  return(
    <SafeAreaView style={styles.bannerContainer}>
      <ScrollView
      horizontal={true}
      decelerationRate={"normal"}
      snapToInterval={ItemWidth}
      bounces={false}
      style={{ marginTop:0, paddingHorizontal: 0 }}
      showsHorizontalScrollIndicator={false}
      disableIntervalMomentum
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { x: scrollX }}}],
        {useNativeDriver: false}
      )}
      scrollEventThrottle={20}
      >
        {cards.map((item, idx) => {
          const inputRange = [
            (idx - 1) * ItemWidth,
            idx * ItemWidth,
            (idx + 1) * ItemWidth,
          ]

          const translate = scrollX.interpolate({
            inputRange,
            outputRange: [0.85, 1, 0.85],
          })

          const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0.5, 1, 0.5],
          })

          return(
            <Animated.View
              key={item.id}
              style={{
                width: ItemWidth,
                height: ItemHeight,
                marginLeft: idx === 0 ? Offset : undefined,
                marginRight: idx === cards.length -1 ? Offset: undefined,
                opacity: opacity,
                transform: [{ scale: translate}]
              }}
            >
              <ImageBackground 
                source={item.posterUrl}
                style={styles.bannerCard}
              />
              <View style={styles.bannerTextContainer}>
                <Text style={styles.bannerText }>{item.title}</Text>
              </View>
              
            </Animated.View>
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
    fontSize: 26,
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
