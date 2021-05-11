import React, { useState } from "react"
import { StyleSheet, TextInput, View, Text, Button } from "react-native"
import Home from "./Components/Home"

//HOOKS EXAMPLE
// const [text, setText] = useState("jeya")
{
  /* <Button title='change text' onPress={() => setText("im changed")}>
        change text
      </Button> */
}

export default function App() {
  return (
    <View style={styles.container}>
      <Home />
    </View>
  )
}

{
  /*STYLES */
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
