import React from "react"
import {
    View,
    Text,
    ScrollView,
    Animated,
    SafeAreaView,
    ImageBackground,
    StyleSheet,
    Dimensions,
} from "react-native"

const offset = 30
const itemWidth = (Dimensions.get("screen").width * (0.55)) - (offset *2)
const itemHeight= 200

const favorites = [
    { title: '', posterUrl: require("../../assets/images/lady-in-red.jpg")},
    { title: '', posterUrl: require("../../assets/images/geo-room.jpg")},
    { title: '', posterUrl: require("../../assets/images/priester-moon.jpg")},
    { title: '', posterUrl: require("../../assets/images/trash-tree.jpg")},
    { title: '', posterUrl: require("../../assets/images/vaporwave-in-space.jpg")},
    { title: '', posterUrl: require("../../assets/images/orange-blue-pour.jpg")},
    { title: '', posterUrl: require("../../assets/images/lady-in-red.jpg")},
    { title: '', posterUrl: require("../../assets/images/geo-room.jpg")},
    { title: '', posterUrl: require("../../assets/images/priester-moon.jpg")},
    { title: '', posterUrl: require("../../assets/images/trash-tree.jpg")},
    { title: '', posterUrl: require("../../assets/images/vaporwave-in-space.jpg")},
    { title: '', posterUrl: require("../../assets/images/orange-blue-pour.jpg")},
]

export default function FavoritesCarousel() {
    return(
        <SafeAreaView style={styles.container}>
            <ScrollView
                horizontal={true}
                decelerationRate={"normal"}
                snapToInterval={itemWidth}
                bounces={false}
                style={styles.carouselView}
                showsHorizontalScrollIndicator={false}
                scrollEventThrottle={12}
            >
                {favorites.map((item, index) => {
                    return(
                        <View key={index} style={styles.cardBody}>
                            <ImageBackground 
                                source={item.posterUrl}
                                style={{
                                    flex:1,
                                    resizeMode: "cover",
                                    justifyContent: "center",
                                    shadowColor: '#202020',
  shadowOffset: {width: 0, height: 0},
  shadowRadius: 5,
                                }}
                            />
                        </View>
                    )
                })}
            </ScrollView>
        </SafeAreaView> 
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1, 
        backgroundColor: "#1E2E33",
    },
    carouselView:{
        marginTop:20,
        marginBottom: 20,
        marginLeft:5,
        paddingHorizontal: 0
    },
    cardBody:{
        width: itemWidth,
        height: itemHeight,
        paddingLeft: 5,
        paddingRight: 10,
    },
})