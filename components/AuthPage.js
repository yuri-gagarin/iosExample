import React, { Component } from "react";
import { View, Text, TextInput } from "react-native";


export default class AuthPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: "",
      password: ""
    }
  }

  render() {
    return (
      <View style={{ width: "100%", height: 50, alignItems: "center", backgroundColor: "red" }}>
        <Text>Login</Text>
        <TextInput>

        </TextInput>
      </View>
    )
  }
}