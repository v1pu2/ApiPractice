import React, { Component } from "react";
import { View, StyleSheet, Text, SafeAreaView } from "react-native";
import { Button } from "react-native-elements";

class SignIn extends Component {
  onSignin = () => {
    this.props.navigation.navigate("Home");
  };
  render() {
    return (
      <SafeAreaView>
        <Text>sign in</Text>
        <Button
          onPress={() => this.onSignin()}
          title='Signin'
          buttonStyle={{ marginTop: 20 }}
        />
      </SafeAreaView>
    );
  }
}
export default SignIn;
