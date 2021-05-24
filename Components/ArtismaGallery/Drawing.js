import React from "react"
import { StyleSheet, TextInput, View, Text, Button } from "react-native"

export default function Drawing() {
    return(
        <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
            <Text style={{ fontFamily: 'Cairo-SemiBold', fontSize: 45}}>
                Drawing Page
            </Text>
        </View>
    )
}