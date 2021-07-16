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

const subjects = ["Abstract", "Animals", "Character Design", "Concept Art", "Geographic Design",
                  "Landscape", "Minimalism", "Nature", "Nudes", "Portraits", "Surrealism"]
const sort = ["Highly Rated", "Legacy Artists", "New Uplaods"]

function Painting(props) {
  const [sbjOpen, setSbjOpen] = useState(false)
  const [sortOpen, setSortOpen] = useState(false)
  
  const toggleSbj = () => setSbjOpen(!sbjOpen)
  const toggleSort = () => setSortOpen(!sortOpen)

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
        <ModalDropdown 
          style={styles.dropdown_1}
          options={subjects}
          dropdownTextStyle={{
            fontFamily: "Cairo-Regular",
            fontSize: 17,
            color: "#EBEBEB",
            backgroundColor: "#151515",
            }}
            dropdownStyle={{
              flex:1,
              justifyContent: "flex-start",
              height: 455,
              marginTop: "-15%",
            }}
            dropdownTextHighlightStyle={{
              color: "#151515", 
              backgroundColor:"#EBEBEB"
            }}
            onDropdownWillShow={toggleSbj}
            onDropdownWillHide={toggleSbj}
            >
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
              name= {!sbjOpen ? 'chevron-down' : "chevron-up"}
              type='font-awesome'
              color='#F93737'
              size={12}
            />
          </View>
        </View>
        <View style={{ flexDirection: "row" }}>
        <ModalDropdown 
          style={styles.dropdown_1}
          options={sort}
          dropdownTextStyle={{
            fontFamily: "Cairo-Regular",
            fontSize: 17,
            color: "#EBEBEB",
            backgroundColor: "#151515",
            }}
            dropdownStyle={{
              flex:1,
              justifyContent: "flex-start",
              height: 188,
              marginTop: "-15%",
              marginRight: "-15%",
              marginLeft: "15%",
            }}
            dropdownTextHighlightStyle={{
              color: "#151515", 
              backgroundColor:"#EBEBEB"
            }}
            onDropdownWillShow={toggleSort}
            onDropdownWillHide={toggleSort}
            >
          <Text
            style={{
              fontFamily: "Cairo-Regular",
              fontSize: 18,
              color: "#EBEBEB",
              paddingTop: "4%",
              paddingLeft: "5%",
            }}
          >
            Sort
          </Text>
          </ModalDropdown>
          <View style={styles.sortArrow}>
            <Icon
              name= {!sortOpen ? 'chevron-down' : 'chevron-up'}
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
    marginTop: "40%",
    paddingLeft: 3,
  },
  dropdown_1: {
    // paddingTop: "5%",
    // paddingLeft: "5%",
  }
})

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps)(Painting)
