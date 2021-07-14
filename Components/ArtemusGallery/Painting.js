import React, { useState } from "react"
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Button,
  Image,
  SafeAreaView,
  ScrollView,
} from "react-native"
import { Icon } from "react-native-elements"
import { connect } from "react-redux"
import ModalDropdown from 'react-native-modal-dropdown'

// Subject Dropdown list

const subjects = ["abstract", "animals", "character design", "concept art", "geographic design", "landscape", "minimalism", "nature", "nudes", "portraits", "surrealism"]
  

function Painting(props) {
  const [sbjDropdown, setSbjDropdown] = useState({})
  const [selected, setSelected] = useState([])

  const renderItem = (item) => {
    <View style={styles.item}>
      <Text style={styles.textItem}>{item.label}</Text>
      
    </View>
  }

  const filteredPaintingGroup = props.image.images.filter(
    (i) => i.group === "painting"
  )

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#151515" }}>
      <View style={{ flexDirection: "row" }}>
        <Text
          style={{
            fontFamily: "Cairo-Bold",
            fontSize: 27,
            color: "#EBEBEB",
            paddingLeft: "2%",
            paddingTop: "2%",
          }}
        >
          Paintings
        </Text>

        <View style={{ flexDirection: "row" }}>
        <ModalDropdown style={styles.dropdown_1}
                           options={subjects}>
          <Text
            style={{
              fontFamily: "Cairo-Regular",
              fontSize: 18,
              color: "#EBEBEB",
              paddingTop: "4%",
              paddingLeft: "5%",
            }}
          >
            Subject
          </Text>
          </ModalDropdown>
            
          <View style={styles.subArrow}>
            <Icon
              name='chevron-down'
              type='font-awesome'
              color='#F93737'
              size={12}
            />
          </View>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text
            style={{
              fontFamily: "Cairo-Regular",
              fontSize: 18,
              color: "#EBEBEB",
              paddingTop: "5%",
              paddingLeft: "5%",
            }}
          >
            Sort
          </Text>
          <View style={styles.sortArrow}>
            <Icon
              name='chevron-down'
              type='font-awesome'
              color='#F93737'
              size={12}
            />
          </View>
        </View>
      </View>
      <View style={{ flex: 1 }}>
        <ScrollView
          horizontal={false}
          contentContainerStyle={styles.imageContainer}
        >
          {filteredPaintingGroup.map((i) => {
            return <Image key={i.id} source={i.image} style={styles.image} />
          })}
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  imageContainer: {
    paddingVertical: 10,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  image: {
    height: 180,
    width: 180,
    margin: "1%",
  },
  subArrow: {
    marginTop: "29%",
    paddingLeft: 3,
  },
  sortArrow: {
    marginTop: "47%",
    paddingLeft: 3,
  },
  dropdown_1: {
    fontFamily: "Cairo-Regular",
    fontSize: 18,
    color: "#EBEBEB",
    // paddingTop: "5%",
    // paddingLeft: "5%",
  }
})

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps)(Painting)
