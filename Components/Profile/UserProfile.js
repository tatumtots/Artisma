import React from "react"
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Flatlist,
  Image,
} from "react-native"
import { Icon } from "react-native-elements"

import { connect } from "react-redux"

function mapStateToProps(state) {
  console.log(state)
  return { image: state.image }
}

export default function UserProfile(props) {
  console.log(`this is LLLLL: ${props}`)
  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <View style={styles.editBox}>
          <Text style={styles.editText}>Edit Profile</Text>
        </View>
        <View style={styles.profileImage}>
          {/* <Image style={styles.profileImage} source={props.image} /> */}
        </View>
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
      {/**FAVORITES */}
      <View style={styles.favoritesView}>
        <Text style={styles.favoritesHeader}>Favorites</Text>
        <View style={styles.favoritesBox}></View>
      </View>
      {/* <Flatlist>flatlist data link to stack navigator</Flatlist> */}
      <View style={styles.flatlist}>
        <Text>3</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#001219",
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
  profileImage: {
    width: 130,
    height: 130,
    borderRadius: 100,
    backgroundColor: "blue",
    alignSelf: "center",
    margin: 8,
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
    fontFamily: "Cairo-Regular",
    fontSize: 30,
  },
  bioView: {
    margin: 10,
  },
  bioText: {
    color: "#EBEBEB",
  },
  favoritesView: {
    flex: 0.7,
    borderColor: "black",
    borderWidth: 1,
  },
  favoritesBox: {
    alignItems: "center",
    height: 400,
    width: "100%",
    backgroundColor: "#1E2E33",
  },
  favoritesHeader: {
    fontFamily: "Cairo-Regular",
    fontSize: 24,
    color: "#EBEBEB",
  },
  flatlist: {
    backgroundColor: "green",
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "black",
    borderWidth: 1,
  },
})

connect(mapStateToProps)(UserProfile)
