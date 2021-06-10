import React from "react";
import { ImageBackground, StyleSheet, Text, View, Image } from "react-native";


// const backgroundUri = Image.resolveAssetSource(SmokeBackground).uri

const SignUp = () => (
  <View style={styles.container}>
    <ImageBackground source={require("../assets/images/smokebackground1.jpg")} style={styles.image}>
      <Text style={styles.text}>Inside</Text>
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  text: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000a0"
  }
});

export default SignUp;
