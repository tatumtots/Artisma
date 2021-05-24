import React from "react"
import { StyleSheet, TextInput, View, Text, Button } from "react-native"

export default function PopularArtists() {
    return(
        <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
            <Text style={{ fontFamily: 'Cairo-SemiBold', fontSize: 45}}>
                Popular Artists Page
            </Text>
        </View>
    )
}