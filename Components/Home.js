import React, { useState } from "react"
import { StyleSheet, TextInput, View, Text, Button } from "react-native"

function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text>Hey</Text>
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

export default Home
