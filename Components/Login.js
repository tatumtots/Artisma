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
      <Text style={styles.loginHeader}>Login</Text>

      <Text style={styles.inputHeaderEmail}>Email</Text>
      <TextInput
        value={formInput.email}
        style={styles.input}
        placeholder='example@example.com'
        placeholderTextColor={"#EBEBEB"}
        onChange={inputChanged}
      />

      <View style={{ flexDirection: "row" }}>
        <Text style={styles.inputHeaderPassword}>Password</Text>
        <Text style={styles.forgotPassword}>Forgot password?</Text>
      </View>
      <TextInput
        value={formInput.password}
        style={styles.input}
        placeholder='password'
        placeholderTextColor={"#EBEBEB"}
        onChange={inputChanged}
      />
      <View style={styles.button}>
      <Button
        title={"Continue"}
        titleStyle={{ color: "#EBEBEB", fontSize:20 }}
        buttonStyle={{
          backgroundColor: "#F93737",
          marginTop: 50,
          marginLeft: 5,
          marginRight: 5,
          borderRadius: 5,
        }}
        onPress={submit}
      />
      </View>

      <View style={{ flexDirection: "row" }}>
        <Text style={styles.noAccount}>Don't have an account?</Text>
        <Text
          style={styles.signUp}
          onPress={() => navigation.navigate("SignUp")}
        >
          Sign Up
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
  inputHeaderPassword: {
    marginLeft: 40,
    fontFamily: "Assistant-Regular",
    fontSize: 20,
    color: "#EBEBEB",
    marginBottom: 20,
  },
  input: {
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 30,
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
  noAccount: {
    marginLeft: "20%",
    fontFamily: "Assistant-Regular",
    fontSize: 15,
    color: "#EBEBEB",
    marginTop: 30,
    marginBottom: 40,
  },
  signUp: {
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
    paddingTop: 10,
  }
})
