import React from "react"
import { StyleSheet, TextInput, View, Text, Button } from "react-native"
import { connect } from "react-redux"

const Home = (props) => {
  console.log("this is PROPS:", props)
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text>{props.state.count}</Text>
        <Text>{props.state.num}</Text>
      </View>
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

const mapStateToProps = (state) => {
  console.log(state)
  return { state }
}
export default connect(mapStateToProps)(Home)
