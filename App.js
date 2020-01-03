import React from "react";
import { StyleSheet, Text, View } from "react-native";

import AuthPage from "./components/AuthPage";


export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center" }}>
        <AuthPage style = { {marginTop: 100} }/>
      </View>
    )
  }
};
