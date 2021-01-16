import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  ImageBackground,
  TextInput,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import { Button } from "react-native-elements";
import AppImages from "../theme/AppImages";
class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }
  onChangeState = (name, value) => {
    this.setState({ [name]: value });
  };
  onClickForgot = () => {
    console.log("forgot click");
    this.props.navigation.navigate("ForgotPassword");
  };
  onSignin = () => {
    const { email, password } = this.state;
    if (!email) {
      Alert.alert("Please fill email");
      return;
    } else if (!password) {
      Alert.alert("Please fill password");
      return;
    } else {
      console.log("on click signi in", email, password);
      this.props.navigation.navigate("Home");
    }
  };
  render() {
    const { email, password } = this.state;
    return (
      <SafeAreaView>
        <ImageBackground
          source={AppImages.mainBack}
          style={styles.imgBg}
          resizeMode='stretch'
        >
          <View style={{ flex: 1 }}>
            <View style={styles.topView}>
              <Text style={styles.txtSkip}>Skip</Text>
            </View>
            <View style={styles.middleView}>
              <Text style={styles.txtWelcome}>Welcome Back,</Text>
              <Text>Sign In to Continue</Text>
              <View style={{ justifyContent: "center" }}>
                <View style={styles.inputContainer}>
                  <TextInput
                    style={styles.inputStyle}
                    autoCorrect={false}
                    placeholder='Enter Your Email Here'
                    value={this.state.email}
                    onChangeText={(text) => this.onChangeState("email", text)}
                    keyboardType='email-address'
                  />
                  <Image
                    source={require("../../assets/ic_email.png")}
                    style={styles.ImageStyle}
                  />
                </View>
                <View style={styles.inputContainer}>
                  <TextInput
                    style={styles.inputStyle}
                    autoCorrect={false}
                    placeholder='Enter Your Password'
                    value={this.state.password}
                    onChangeText={(text) =>
                      this.onChangeState("password", text)
                    }
                    secureTextEntry
                  />
                  <Image
                    source={require("../../assets/ic_email.png")}
                    style={styles.ImageStyle}
                  />
                </View>
                <View style={styles.forgotView}>
                  <TouchableOpacity
                    onPress={() => this.onClickForgot()}
                    containerStyle={styles.login}
                  >
                    <Text style={styles.txtForgotPass}>Forgot Password?</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <Button
                onPress={() => this.onSignin()}
                title='Signin'
                buttonStyle={{ marginTop: 20 }}
              />
            </View>
          </View>
        </ImageBackground>
      </SafeAreaView>
    );
  }
}
export default SignIn;
const styles = StyleSheet.create({
  imgBg: { height: "100%", borderRadius: 10, width: "100%" },
  topView: {
    flex: 1,
    alignItems: "flex-end",
    padding: 10,
  },
  inputContainer: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "lightgray",
    backgroundColor: "white",
    alignItems: "center",
    marginTop: 20,
    justifyContent: "center",
  },
  inputStyle: {
    flex: 1,
  },
  txtWelcome: { fontFamily: "OpenSans-Bold", fontSize: 16 },
  middleView: { flex: 3, padding: 20 },
  txtSkip: { paddingTop: 20, fontFamily: "OpenSans-Bold", color: "#fff" },
  ImageStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: "stretch",
    alignItems: "center",
  },
  forgotView: {
    justifyContent: "flex-end",
    marginTop: 5,
    padding: 5,
    alignSelf: "flex-end",
  },
});
