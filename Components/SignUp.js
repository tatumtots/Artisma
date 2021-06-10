import React, { useState } from "react"
import { StyleSheet, TextInput, View, Text, ImageBackground, SafeAreaView, ScrollView } from "react-native"
import { Button } from "react-native-elements"
import { useDispatch } from "react-redux"
import {signIn} from "../Redux/Login/authSlice"

export default function Login({navigation}) {

  const dispatch = useDispatch()

  const [formInput, setFormInput] = useState({
    email:null,
    password:null
  })
  
  function inputChanged(e){
    setFormInput({
      // spread the original state
      ...formInput,
      // Update target values based on name
      [e.target.name]:e.target.value
    })
  }

  function submit(e){
    // submits the payload for signIn in authSlice
    dispatch(signIn(formInput));
    e.preventDefault();
  }

  return (
    
    
    <View style={styles.viewBackground}>
    <ImageBackground source={require("../assets/images/smokebackground2.jpg")} style={styles.image}>
      {/* <View>
        <Image
          source={require("../assets/images/smoke-background.jpg")}
          style={{ width: 200, height: 200 }}
        /> 
      </View> */}
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>
          Artisma
        </Text>
      </View>
      <Text style={styles.loginHeader}>Sign Up</Text>
      <Text style={styles.inputHeader}>Name</Text>
      <TextInput
        style={styles.input}
        placeholder='John Doe'
        placeholderTextColor={"#EBEBEB"}
      />
      <Text style={styles.inputHeader}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder='example@example.com'
        placeholderTextColor={"#EBEBEB"}
      />
      <Text style={styles.inputHeader}>Username</Text>
      <TextInput
        style={styles.input}
        placeholder='example123'
        placeholderTextColor={"#EBEBEB"}
      />
      <Text style={styles.inputHeader}>Password</Text>
      <TextInput
        style={styles.input}
        selectionColor={"red"}
        placeholder='password'
        placeholderTextColor={"#EBEBEB"}
      />
      <View style={styles.button}>
      <Button
        title={"Continue"}
        titleStyle={{ color: "#EBEBEB", fontSize:20 }}
        buttonStyle={{
          backgroundColor: "#F93737",
          marginTop: 30,
          marginLeft: 5,
          marginRight: 5,
          borderRadius: 5,
        }}
        onPress={submit}
      />
      </View>
      <View style={{ flexDirection: "row" }}>
        <Text style={styles.yesAccount}>Already have an account?</Text>
        <Text
          style={styles.login}
          onPress={(() => navigation.navigate("Login"))}
        >
          Login
        </Text>
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
  loginHeader: {
    fontFamily: "Assistant-Regular",
    fontSize: 35,
    color: "#EBEBEB",
    marginLeft: 40,
    marginBottom: 30,
    marginTop: 20,

  },
  inputHeaderEmail: {
    fontFamily: "Assistant-Regular",
    fontSize: 20,
    color: "#EBEBEB",
    marginLeft: 40,
    marginBottom: 20,
  },
  inputHeader: {
    marginLeft: 40,
    fontFamily: "Assistant-Regular",
    fontSize: 20,
    color: "#EBEBEB",
    marginBottom: 5,
  },
  input: {
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 10,
    borderBottomColor: "#F93737",
    borderBottomWidth: 2,
    borderRadius: 5,
    padding: 12,
    color: "#F93737",
  },
  forgotPassword: {
    marginLeft: 130,
    fontFamily: "Assistant-Regular",
    fontSize: 15,
    color: "#00c8f8",
  },
  yesAccount: {
    marginLeft: "20%",
    fontFamily: "Assistant-Regular",
    fontSize: 15,
    color: "#EBEBEB",
    marginTop: 30,
    marginBottom: 40,
  },
  login: {
    marginLeft: 20,
    fontFamily: "Assistant-Regular",
    fontSize: 15,
    color: "#00c8f8",
    marginTop: 30,
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
    marginTop:30 
  },
  headerTitle: {
    fontFamily: "Megrim-Regular",
    color: "#F93737",
    fontSize: 50,
  }, 
  button:{
    flex:1,
    width: 200,
    height: 80,
    marginLeft: "25%",
    marginRight: "25%",
    paddingTop: 0,
  }
})
