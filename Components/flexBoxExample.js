import React from "react"
import { Text, View } from "react-native"

export default function Flex() {
  return (
    <View
      style={{
        flex: 0.5,
        flexDirection: "row",
        width: "80%",
        height: 300,
        justifyContent: "space-between",
        alignItems: "stretch",
        borderColor: "black",
        borderWidth: 1,
      }}
    >
      <View
        style={{
          backgroundColor: "red",
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          borderColor: "black",
          borderWidth: 1,
        }}
      >
        <Text>1</Text>
      </View>
      <View
        style={{
          backgroundColor: "blue",
          flex: 2,
          justifyContent: "center",
          alignItems: "center",
          borderColor: "black",
          borderWidth: 1,
        }}
      >
        <Text>2</Text>
      </View>
      <View
        style={{
          backgroundColor: "green",
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          borderColor: "black",
          borderWidth: 1,
        }}
      >
        <Text>3</Text>
      </View>
    </View>
  )
}
