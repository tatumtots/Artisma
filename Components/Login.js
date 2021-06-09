import React, { useState } from "react"
import { StyleSheet, TextInput, View, Text, Button, Image } from "react-native"
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
      <View>
        {/* <Image
          source={require("../assets/images/smoke-background.jpg")}
          style={{ width: 200, height: 200 }}
        /> */}
      </View>

      <Text style={styles.loginHeader}>Login</Text>

      <Text style={styles.inputHeaderEmail}>Email</Text>
      <TextInput
        value={formInput.email}
        style={styles.input}
        placeholder='example@example.com'
        placeholderTextColor={"#D7EB5A"}
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
        placeholderTextColor={"#D7EB5A"}
        onChange={inputChanged}
      />

      <Button
        title={"Login"}
        titleStyle={{ color: "#232323", fontSize: 24 }}
        buttonStyle={{
          backgroundColor: "#D7EB5A",
          marginTop: 38,
          marginLeft: 25,
          marginRight: 25,
          padding: 18,
          borderRadius: 17,
        }}
        onPress={submit}
      />

      <View style={{ flexDirection: "row" }}>
        <Text style={styles.noAccount}>Don't have an account?</Text>
        <Text
          style={styles.signUp}
          onPress={() => navigation.navigate("SignUp")}
        >
          Sign Up
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  viewBackground: {
    flex: 1,
    backgroundColor: "#1E2E33",
  },
  loginHeader: {
    fontFamily: "Assistant-Regular",
    fontSize: 35,
    color: "#D7EB5A",
    marginLeft: 30,
    marginBottom: 20,
    marginTop: 40,
  },
  inputHeaderEmail: {
    fontFamily: "Assistant-Regular",
    fontSize: 20,
    color: "#D7EB5A",
    marginLeft: 30,
    marginBottom: 20,
  },
  inputHeaderPassword: {
    marginLeft: 30,
    fontFamily: "Assistant-Regular",
    fontSize: 20,
    color: "#D7EB5A",
    marginBottom: 20,
  },
  input: {
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 30,
    borderBottomColor: "#F93737",
    borderBottomWidth: 2,
    borderRadius: 5,
    padding: 12,
    color: "#F93737",
  },
  forgotPassword: {
    marginLeft: 140,
    fontFamily: "Assistant-Regular",
    fontSize: 15,
    color: "#78797B",
  },
  noAccount: {
    marginLeft: 30,
    fontFamily: "Assistant-Regular",
    fontSize: 15,
    color: "#78797B",
    marginTop: 30,
  },
  signUp: {
    marginLeft: 120,
    fontFamily: "Assistant-Regular",
    fontSize: 15,
    color: "#00c8f8",
    marginTop: 30,
  },
})
