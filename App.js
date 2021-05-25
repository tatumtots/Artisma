import React, { useState } from "react"
import * as Font from "expo-font"
import Main from "./Components/MainComponent"
import { AppLoading } from "expo"
//REDUX IMPORTS
import { Provider } from "react-redux"
import { store } from "./Redux/store"
import { StyleSheet, View } from "react-native"

//HOOKS EXAMPLE
// const [text, setText] = useState("jeya")
{
  /* <Button title='change text' onPress={() => setText("im changed")}>
        change text
      </Button> */
}

const getFonts = () => {
  return Font.loadAsync({
    // Logo Font
    "Megrim-Regular": require("./assets/fonts/Megrim-Regular.ttf"),
    // Header Font
    "Cairo-Regular": require("./assets/fonts/Cairo-Regular.ttf"),
    "Cairo-SemiBold": require("./assets/fonts/Cairo-SemiBold.ttf"),

    "Cairo-Bold": require("./assets/fonts/Cairo-Bold.ttf"),

    "Assistant-Regular": require("./assets/fonts/Assistant-Regular.ttf"),
    "Assistant-SemiBold": require("./assets/fonts/Assistant-SemiBold.ttf"),
    "Assistant-Bold": require("./assets/fonts/Assistant-Bold.ttf"),
  })
}

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false)

  if (fontsLoaded) {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Main />
        </View>
      </Provider>
    )
  } else {
    return (
      <AppLoading startAsync={getFonts} onFinish={() => setFontsLoaded(true)} />
    )
  }
}

{
  /*STYLES */
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
