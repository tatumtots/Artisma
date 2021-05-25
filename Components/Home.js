import React from "react"
import { StyleSheet, TextInput, View, Text, Button, Image } from "react-native"

import { connect } from "react-redux"

function mapStateToProps(state) {
  // console.log(state)
  return { state }
}

const Home = (props) => {
  // console.log("this is PROPS:", props)
  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          // width: "80%",
          height: 600,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "purple",
          borderColor: "black",
          borderWidth: 1,
        }}
      >
        <Image
          style={{ width: 120, height: 120, borderRadius: 400 / 2 }}
          source={props.state.image.map((i) => i.image)[2]}
        />
      </View>
      <View
        style={{
          backgroundColor: "red",
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          borderColor: "black",
          borderWidth: 1,
        }}
      ></View>
      <View
        style={{
          backgroundColor: "blue",
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          borderColor: "black",
          borderWidth: 1,
        }}
      ></View>
      <View
        style={{
          backgroundColor: "green",
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          borderColor: "black",
          borderWidth: 1,
        }}
      ></View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  inlineView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  addInput: {
    borderBottomColor: "black",
    borderBottomWidth: 3,
    padding: 10,
    width: "80%",
  },
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
