import React, { useState } from "react"
import { StyleSheet, TextInput, View, Text, Button, Image, SafeAreaView, ScrollView } from "react-native"
import { Icon } from "react-native-elements"
import DropDownPicker from "react-native-dropdown-picker"

export default function Photography() {
    const [subjectOpen, setSubjectOpen] = useState(false);

    const [value, setValue] = useState(false);
    const [items, setItems] = useState([
        {label: 'abstract', value: 'abstract'},
        {label: 'animals', value: 'animals'},
        {label: 'character design', value: 'character design'},
        {label: 'concept art', value: 'concept art'},
        {label: 'geographic design', value: 'geographic design'},
        {label: 'landscape', value: 'landscape'},
        {label: 'minimalism', value: 'minimalism'},
        {label: 'nature', value: 'nature'},
        {label: 'nudes', value: 'nudes'},
        {label: 'portraits', value: 'portraits'},
        {label: 'surrealism', value: 'surrealism'},

    ])
 

    return(
        <SafeAreaView style={{flex: 1,backgroundColor: "#001219"}}>
            <View style={{flexDirection: "row"}}>
               
                <Text style={{ fontFamily: "Cairo-Bold", fontSize: 27, color: "#EBEBEB", paddingLeft:"2%", paddingTop: "2%"}}>
                    Photography
                </Text>
                
                <View style={{flexDirection: "row"}}>
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
                    <Text style={{ fontFamily: "Cairo-Regular", fontSize: 18, color: "#EBEBEB", paddingTop: "5%", paddingLeft: "5%" }}>
                        Subject
                    </Text>
                    <View style={styles.subArrow}>
                        <Icon 
                            name="long-arrow-down"
                            type="font-awesome"
                            color="#F93737"
                            size= {12}
                            
                        />
                    </View>
                </View>
                <View style={{flexDirection: "row"}}>
                    <Text style={{ fontFamily: "Cairo-Regular", fontSize: 18, color: "#EBEBEB", paddingTop: "5%", paddingLeft: "5%"}}>
                        Sort
                    </Text>
                    <View style={styles.sortArrow}>
                        <Icon 
                            name="long-arrow-down"
                            type="font-awesome"
                            color="#F93737"
                            size= {12}
                            
                        />
                    </View>
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
        paddingVertical:10,
        flexDirection: "row",
        flexWrap:"wrap",
        justifyContent: "center"
    },
    image: {
        height:180,
        width: 180,
        margin: "1%"
    },
    subArrow: {
        marginTop:"35%",
        paddingLeft: 3,

    },
    sortArrow: {
        marginTop:"49.5%",
        paddingLeft: 3,

    }
})