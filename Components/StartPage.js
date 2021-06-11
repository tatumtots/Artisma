import React from "react"
import { View, Text, ImageBackground, StyleSheet } from "react-native"
import { Button } from "react-native-elements"


function StartPage({navigation}){
    return(
        <View style={styles.viewBackground}>
            <ImageBackground source={require("../assets/images/smokebackground2.jpg")} style={styles.image}>
                <View style={styles.headerContainer}>
                    <Text style={styles.headerTitle}>
                        Artisma
                    </Text>
                </View>

                <View style={styles.button}>
                    <Button
                        title={"Login"}
                        titleStyle={{ color: "#EBEBEB", fontSize:20 }}
                        buttonStyle={{
                        backgroundColor: "#F93737",
                        marginTop: 10,
                        marginBottom: 30,
                        marginLeft: 5,
                        marginRight: 5,
                        borderRadius: 5,
                        }}
                        onPress={() => navigation.navigate("Login")}
                    />
                
                    <Button
                        title={"Sign Up"}
                        titleStyle={{ color: "#EBEBEB", fontSize:20 }}
                        buttonStyle={{
                        backgroundColor: "#00C8F8",
                        marginLeft: 5,
                        marginRight: 5,
                        borderRadius: 5,
                        }}
                        onPress={() => navigation.navigate("SignUp")}
                    />
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    viewBackground: {
        flex: 1,
        flexDirection: 'column'
    },
    image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    
    },
    headerContainer:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:100 
    },
    headerTitle: {
    fontFamily: "Megrim-Regular",
    color: "#F93737",
    fontSize: 100,
    },
    button:{
        flex:1,
        width: 200,
        height: 80,
        marginLeft: "25%",
        marginRight: "25%",
    }

})


export default StartPage