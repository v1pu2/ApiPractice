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
import AsyncStorage from "@react-native-async-storage/async-storage";
class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "meetpatel.iqlance@gmail.com",
      password: "Meet@123",
    };
  }
  onChangeState = (name, value) => {
    this.setState({ [name]: value });
  };
  onClickForgot = () => {
    this.props.navigation.navigate("ForgotPassword");
  };
  onSignin = () => {
    this.CallApi();
  };
  CallApi = () => {
    const { email, password } = this.state;
    let token, id;
    fetch("https://webapps.iqlance-demo.com/chef/public/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
        device_token: "123",
        device_type: "ios",
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        token = response && response.data && response.data.accessToken;
        id =
          response &&
          response.data &&
          response.data.user_info &&
          response.data.user_info.id;
        token && AsyncStorage.setItem("TOKEN", token);
        id && AsyncStorage.setItem("ID", JSON.stringify(id));
        token && this.props.navigation.navigate("Home");
      })
      .catch((err) => {
        console.log("error", err);
      });
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
              <Text style={styles.txtOr}>Or</Text>

              <View style={styles.inputContainer}>
                <Image
                  source={require("../../assets/ic_email.png")}
                  style={styles.ImageStyle}
                />

                <Text style={styles.btnText}>Login with Google</Text>
              </View>
              <View style={styles.inputContainer}>
                <Image
                  source={require("../../assets/ic_email.png")}
                  style={styles.ImageStyle}
                />

                <Text style={styles.btnText}>Continue with Apple</Text>
              </View>
            </View>
            <View style={styles.viewSignUp}>
              <Text style={styles.txtDont}>Don't have an account? </Text>
              <Text style={styles.txtSigUp}>Sign Up</Text>
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
  txtOr: { alignSelf: "center", marginTop: 30, fontSize: 16 },
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
  btnText: { fontSize: 14, fontFamily: "OpenSans-Bold" },
  viewSignUp: {
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  txtDont: { fontSize: 14, color: "#fff" },
  txtSigUp: { fontSize: 14, fontFamily: "OpenSans-Bold", color: "#fff" },
});
