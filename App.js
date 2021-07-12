import React, { useState } from "react"
import * as Font from "expo-font"
import Main from "./Components/MainComponent"
import AppLoading from "expo-app-loading"
//REDUX IMPORTS
import { Provider } from "react-redux"
import store from "./Redux/store"
import { StyleSheet, View } from "react-native"



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
      <AppLoading startAsync={getFonts} onFinish={() => setFontsLoaded(true)} onError={console.warn} />
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

//APP style key
// #151515 background color

// #F93737

// #00C8F8 some links are this color, still questioning if i want it or not

// #1E2E33 drawer color

// #EBEBEB white for words

// the Artisma font is 'Megrim', font for headers is 'Cairo', font for sub categories/paragraph is 'Assistant'
