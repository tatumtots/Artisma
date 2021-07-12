import React from "react"
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native"
import FavoritesCarousel from "./FavoritesCarousel"
import { Icon } from "react-native-elements"

import { connect } from "react-redux"

function mapStateToProps(state) {
  console.log(`HELLO${state.image.images[0].title}`)
  return { image: state.image }
}

function UserProfile(props) {
  console.log(`this is LLLLL: ${props.image.images[0]}`)
  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerView}>
        <View style={styles.coverImage}>
          <Image
            source={require("../../assets/images/vaporwave-in-space.jpg")}
            style={styles.coverImage}
          ></Image>
          <View style={styles.editBox}>
            <Text style={styles.editText}>Edit Profile</Text>
          </View>
        </View>
        <Image
          source={require("../../assets/images/tatum-on-mural.jpg")}
          style={styles.profileImage}
        ></Image>
        <View style={styles.location}>
          <Icon
            name='map-marker'
            type='font-awesome'
            iconStyle={{
              color: "#F93737",
              marginRight: 6,
            }}
            size={15}
          />
          <Text style={{ color: "#EBEBEB" }}>Location</Text>
        </View>

        <Text style={styles.username}>Tatum Bray</Text>
        <View style={styles.bioView}>
          <Text style={styles.bioText}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur,
            corporis fugit
          </Text>
        </View>
      </View>
      {/**WORK SECTION */}
      <View style={{flex: 1, flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
        <Image
          source={require("../../assets/images/vaporwave-in-space.jpg")}
          style={styles.artContainer}
        />
      </View>
      {/**FAVORITES */}
      <View style={styles.favoritesView}>
        <Text style={styles.favoritesHeader}>Favorites</Text>
        {/* <View style={styles.favoritesBox}> */}
        <FavoritesCarousel />
        {/* </View> */}
      </View>
      {/* <Flatlist>flatlist data link to stack navigator</Flatlist> */}
      <TouchableOpacity style={styles.buttons}>
        <Text style={styles.btnText}>Account Settings</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttons}>
        <Text style={styles.btnText}>Orders</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttons}>
        <Text style={styles.btnText}>Messages</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}

const offset = 30
const itemWidth = Dimensions.get("screen").width * 0.86 - offset * 2
const itemHeight = 200

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#151515",
  },
  headerView: {
    flex: 1,
    flexDirection: "column",
    width: "100%",
    height: "10%",
    justifyContent: "flex-start",
    alignItems: "flex-end",
    borderColor: "black",
    borderWidth: 1,
  },
  editBox: {
    width: "20%",
    height: 20,
    alignItems: "flex-end",
    justifyContent: "flex-start",
    borderColor: "black",
    borderWidth: 1,
    margin: 10,
  },
  editText: {
    color: "#929292",
  },
  coverImage: {
    backgroundColor: "red",
    width: "100%",
    height: 145,
  },
  profileImage: {
    width: 110,
    height: 110,
    borderRadius: 100,
    backgroundColor: "blue",
    alignSelf: "center",
    marginBottom: 5,
    marginTop: -55,
    zIndex: 5,
  },
  location: {
    flexDirection: "row",
    alignSelf: "center",
    color: "#929292",
    fontFamily: "Assistant-Regular",
    fontSize: 15,
  },
  username: {
    alignSelf: "center",
    color: "#EBEBEB",
    fontFamily: "Cairo-Bold",
    fontSize: 20,
  },
  bioView: {
    flex: 1,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: "15%",
    marginRight: "10%",
  },
  bioText: {
    color: "#EBEBEB",
  },
  artContainer: {
    width: itemWidth,
    height: itemHeight,
  },
  favoritesView: {
    flex: 1,
    borderColor: "black",
    borderWidth: 1,
  },
  favoritesBox: {
    alignItems: "center",
    height: 200,
    width: "100%",
    backgroundColor: "#1E2E33",
  },
  favoritesHeader: {
    fontFamily: "Cairo-Regular",
    fontSize: 24,
    color: "#EBEBEB",
    marginLeft: 10,
  },
  buttons: {
    backgroundColor: "#151515",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "black",
    borderWidth: 1,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    height: 50,
  },
  btnText: {
    fontFamily: "Cairo-Regular",
    fontSize: 20,
    color: "#EBEBEB",
    marginLeft: 10,
  },
})

export default connect(mapStateToProps)(UserProfile)
