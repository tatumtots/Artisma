import React from "react"
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
} from "react-native"
import { LinearGradient } from 'expo-linear-gradient';

const ItemWidth = Dimensions.get("window").width
const ItemHeight = 250

const Slide = (props) => {
  const { title, image } = props

  return (
    <View
      key={props.id}
      style={{
        width: ItemWidth,
        height: ItemHeight,
      }}
    >
      <ImageBackground source={image} style={styles.bannerCard} />
      <LinearGradient colors={["rgba(0, 18, 25, 0.80)", "rgba(0, 18, 25, 0.00)"]} style={styles.bannerTextContainer}>
        <Text style={styles.slideText}>{title}</Text>
      </LinearGradient>
    </View>
  )
}

export const Carousel = (props) => {
  const { items, style } = props
  const itemsPerInterval =
    props.itemsPerInterval === undefined ? 1 : props.itemsPerInterval

  const [interval, setInterval] = React.useState(1)
  const [intervals, setIntervals] = React.useState(1)
  const [width, setWidth] = React.useState(0)

  const init = (width) => {
    // initialise width
    setWidth(width)
    // initialise total intervals
    const totalItems = items.length
    setIntervals(Math.ceil(totalItems / itemsPerInterval))
  }

  const getInterval = (offset) => {
    for (let i = 1; i <= intervals; i++) {
      if (offset + 1 < (width / intervals) * i) {
        return i
      }
      if (i == intervals) {
        return i
      }
    }
  }

  let bullets = []
  for (let i = 1; i <= intervals; i++) {
    bullets.push(
      <Text
        key={i}
        style={{
          ...styles.bullet,
          opacity: interval === i ? 1 : 0.6,
        }}
      >
        &bull;
      </Text>
    )
  }

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal={true}
        contentContainerStyle={{
          ...styles.scrollView,
          width: `${100 * intervals}%`,
        }}
        showsHorizontalScrollIndicator={false}
        onContentSizeChange={(w, h) => init(w)}
        onScroll={(data) => {
          setWidth(data.nativeEvent.contentSize.width)
          setInterval(getInterval(data.nativeEvent.contentOffset.x))
        }}
        scrollEventThrottle={200}
        pagingEnabled
        decelerationRate='fast'
      >
        {items.map((item, index) => {
          switch (style) {
            default:
              return (
                <Slide key={index} title={item.title} image={item.posterUrl} />
              )
          }
        })}
      </ScrollView>
      <View style={styles.bullets}>{bullets}</View>
    </View>
  )
}

const styles = StyleSheet.create({
  statsHead: {
    paddingTop: 10,
    paddingHorizontal: 12,
  },
  container: {
    width: "100%",
  },
  scrollView: {
    display: "flex",
    flexDirection: "row",
    overflow: "hidden",
  },
  bullets: {
    position: "absolute",
    top: 0,
    right: 0,
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingTop: 5,
    paddingRight: "35%",
  },
  bullet: {
    color: "#F93737",
    paddingHorizontal: 5,
    paddingTop: 170,
    fontSize: 70,
  },
  slide: {
    paddingHorizontal: 20,
    paddingBottom: 10,
    paddingTop: 30,
    flexBasis: "100%",
    flex: 1,
    maxWidth: "100%",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    height: 200,
  },
  slideText: {
    width: "100%",
    textAlign: "left",
    paddingLeft: 10,
    fontSize: 25,
    fontFamily: "Cairo-Regular",
    color: "#EBEBEB",
    
  },
  bannerCard: {
    flex: 1,
    justifyContent: "center",
  },
  bannerTextContainer: {
    position: "absolute",
    left: 0,
    right: 0,
    alignItems: "center",
    backgroundColor: "rgba(0, 18, 25, 0.60)",
  },
  
})

export default Carousel
