import React, { useEffect, useState, useRef } from "react";

import {
  SafeAreaView,
  TextInput,
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from "react-native";
import { Button } from "react-native-elements";

const deviceWidth = Dimensions.get("window").width;
const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const onSubmit = () => {
    console.log("on submit click", email);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputStyle}
          autoCorrect={false}
          placeholder='Enter Your Email Here'
          value={email}
          onChangeText={(text) => setEmail(text)}
          keyboardType='email-address'
        />
        <Image
          source={require("../../assets/ic_email.png")}
          style={styles.ImageStyle}
        />
      </View>
      <Button
        onPress={() => onSubmit()}
        title='Submit'
        buttonStyle={{ width: deviceWidth - 40 }}
      />
    </SafeAreaView>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "lightgray",
    backgroundColor: "white",
    alignItems: "center",
    margin: 20,
    justifyContent: "center",
  },
  inputStyle: {
    flex: 1,
  },
  ImageStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: "stretch",
    alignItems: "center",
  },
});
