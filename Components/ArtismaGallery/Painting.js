import React from "react"
import { StyleSheet, TextInput, View, Text, Button, Image, SafeAreaView, ScrollView } from "react-native"

export default function Painting() {
    return(
        <SafeAreaView style={{flex: 1,backgroundColor: "#001219"}}>
            <View style={{flexDirection: "row", }}>
               
                <Text style={{ fontFamily: "Cairo-Bold", fontSize: 27, color: "#EBEBEB", paddingLeft:"2%", paddingTop: "2%"}}>
                    Paintings
                </Text>
                
                <View>
                    <Text style={{ fontFamily: "Cairo-Regular", fontSize: 18, color: "#EBEBEB", paddingTop: "5%", paddingLeft: "5%" }}>
                        Subject
                    </Text>
                </View>
                <View>
                    <Text style={{ fontFamily: "Cairo-Regular", fontSize: 18, color: "#EBEBEB", paddingTop: "5%", paddingLeft: "5%"}}>
                        Sort
                    </Text>
                </View>
            </View>
            <View style={{flex:1}}>
            <ScrollView horizontal={false} contentContainerStyle={styles.imageContainer}>
                <Image source={require("../../assets/images/lady-in-red.jpg")} style={styles.image}/>
                <Image source={require("../../assets/images/priester-pink-eclipse.jpg")} style={styles.image}/>
                <Image source={require("../../assets/images/orange-blue-pour.jpg")} style={styles.image}/>
                <Image source={require("../../assets/images/laser_cloud.jpg")} style={styles.image}/>
                <Image source={require("../../assets/images/geo-room.jpg")} style={styles.image}/>
                <Image source={require("../../assets/images/smoke_cloud.jpg")} style={styles.image}/>
                <Image source={require("../../assets/images/blue_volcano.jpg")} style={styles.image}/>
                <Image source={require("../../assets/images/trash-tree.jpg")} style={styles.image}/>
                <Image source={require("../../assets/images/galaxyraccoon.jpg")} style={styles.image}/>
                <Image source={require("../../assets/images/vaporwave-in-space.jpg")} style={styles.image}/>
            </ScrollView>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    imageContainer: {
        paddingVertical:20,
        flexDirection: "row",
        flexWrap:"wrap",
        justifyContent: "center"
    },
    image: {
        height:200,
        width: 175,
        margin: "2%"
    }
})