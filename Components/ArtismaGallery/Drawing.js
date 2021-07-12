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
import DropDownPicker from "react-native-dropdown-picker"
import { connect } from "react-redux"

function Drawing(props) {
  const [subjectOpen, setSubjectOpen] = useState(false)

  const [value, setValue] = useState(false)
  const [items, setItems] = useState([
    { label: "abstract", value: "abstract" },
    { label: "animals", value: "animals" },
    { label: "character design", value: "character design" },
    { label: "concept art", value: "concept art" },
    { label: "geographic design", value: "geographic design" },
    { label: "landscape", value: "landscape" },
    { label: "minimalism", value: "minimalism" },
    { label: "nature", value: "nature" },
    { label: "nudes", value: "nudes" },
    { label: "portraits", value: "portraits" },
    { label: "surrealism", value: "surrealism" },
  ])

  const filteredDrawingGroup = props.image.images.filter(
    (i) => i.group === "drawing"
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
          Drawings
        </Text>

        <View style={{ flexDirection: "row" }}>
          {/* <DropDownPicker
                        open={subjectOpen}
                        value={value}
                        items={items}
                        setOpen={setSubjectOpen}
                        setValue={setValue}
                        setItems={setItems}
                        theme="DARK"
                        placeholder="Subject"
                        
                    /> */}
          <Text
            style={{
              fontFamily: "Cairo-Regular",
              fontSize: 18,
              color: "#EBEBEB",
              paddingTop: "5%",
              paddingLeft: "5%",
            }}
          >
            Subject
          </Text>
          <View style={styles.subArrow}>
            <Icon
              name='long-arrow-down'
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
              name='long-arrow-down'
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
          {filteredDrawingGroup.map((i) => {
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
    marginTop: "35%",
    paddingLeft: 3,
  },
  sortArrow: {
    marginTop: "49.5%",
    paddingLeft: 3,
  },
})

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps)(Drawing)
