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
import ModalDropdown from "react-native-modal-dropdown"

//SUBJECT DROPDOWN LIST
const subjects = ["All", "Abstract", "Animals", "Character Design", "Concept Art", "Geographic Design",
                  "Landscape", "Minimalism", "Nature", "Nudes", "Portraits", "Surrealism"]
//SORT DROPDOWN LIST
const sort = ["Highly Rated", "Legacy Artists", "New Uplaods"]

function Digital(props) {
  //HOOKS FOR TOGGLING DROPDOWN ICONS
  const [sbjOpen, setSbjOpen] = useState(false)
  const [sortOpen, setSortOpen] = useState(false)
  //TOGGLE FUNCTIONS FOR DROPDOWN ICONS
  const toggleSbj = () => setSbjOpen(!sbjOpen)
  const toggleSort = () => setSortOpen(!sortOpen)

  const filteredDigitalGroup = props.image.images.filter(
    (i) => i.group === "digital"
  )

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#151515" }}>
      {/* HEADER START */}
      <View style={{ flexDirection: "row" }}>
        {/* HEADER TEXT START */}
        <Text
          style={{
            fontFamily: "Cairo-Bold",
            fontSize: 27,
            color: "#EBEBEB",
            paddingLeft: "2%",
            paddingTop: "2%",
          }}
        >
          Digital
        </Text>
        {/* HEADER TEXT END */}

        {/* SUBJECT DROPDOWN START */}
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
              marginTop: "-0.5%",
            }}
            dropdownTextHighlightStyle={{
              color: "#151515", 
              backgroundColor:"#EBEBEB"
            }}
            defaultIndex={0}
            onDropdownWillShow={toggleSbj}
            onDropdownWillHide={toggleSbj}
          >
            <Text
              style={{
                fontFamily: "Assistant-Regular",
                fontSize: 18,
                color: "#EBEBEB",
                paddingTop: "5%",
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
        {/* SUBJECT DROPDOWN END */}

        {/* SORT DROPDOWN START */}
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
              height: 148,
              marginTop: "-0.5%",
              marginRight: "-15%",
              marginLeft: "15%",
            }}
            dropdownTextHighlightStyle={{
              color: "#151515", 
              backgroundColor:"#EBEBEB"
            }}
            defaultIndex={0}
            onDropdownWillShow={toggleSort}
            onDropdownWillHide={toggleSort}
          >
            <Text
              style={{
                fontFamily: "Assistant-Regular",
                fontSize: 18,
                color: "#EBEBEB",
                paddingTop: "5%",
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
        {/* SORT DROPDOWN END */}
      </View>
      {/* HEADER END */}

      {/* GALLERY START */}
      <View style={{ flex: 1 }}>
        <ScrollView
          horizontal={false}
          contentContainerStyle={styles.imageContainer}
        >
          {filteredDigitalGroup.map((i) => {
            return <Image key={i.id} source={i.image} style={styles.image} />
          })}
        </ScrollView>
      </View>
      {/* GALLERY END */}
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
    marginTop: "30%",
    paddingLeft: 3,
  },
  sortArrow: {
    marginTop: "42%",
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

export default connect(mapStateToProps)(Digital)
