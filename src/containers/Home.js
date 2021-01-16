import React, { Component } from "react";
import { View, StyleSheet, Text, SafeAreaView } from "react-native";
import { Avatar } from "react-native-elements";
import AppImages from '../theme/AppImages'
class Home extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.topRoView}>
        <View>
          <Text>Hello</Text>
          <Text>name</Text>
        </View>
          <Avatar rounded source={AppImages.heartActive} size='medium' />
      </View>
      </SafeAreaView>
    );
  }
}
export default Home;
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    topRoView: {
        flexDirection: "row",
        padding: 20,
        justifyContent: "space-between",
      },
});
