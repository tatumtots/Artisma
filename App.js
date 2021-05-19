import React from "react"
import Home from "./Components/Home"
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

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Home />
      </View>
    </Provider>
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
