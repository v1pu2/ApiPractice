import React, { Component } from "react";
import { View, StyleSheet, Text, SafeAreaView, ScrollView,TouchableHighlight } from "react-native";
import { Avatar } from "react-native-elements";
import AppImages from "../theme/AppImages";
import CardItem from "../components/CardItem";
class Home extends Component {
    constructor(props){
        super(props);
        this.state={}
    }
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
        <ScrollView showsHorizontalScrollIndicator={false}>
          <View style={styles.rowView}>
            <Text style={styles.txtPopular}>Most Popular Recipes</Text>
            <Text style={styles.txtViewall}>View All</Text>
          </View>

          <View>
            <ScrollView
              horizontal
              contentContainerStyle={styles.scrollHori}
              showsHorizontalScrollIndicator={false}
            >
              <TouchableHighlight
                onPress={() => this.props.navigation.navigate("Detail")}
                style={styles.upperRowView}
              >
                <CardItem />
              </TouchableHighlight>
              <TouchableHighlight
                onPress={() => this.props.navigation.navigate("Detail")}
                style={styles.upperRowView}
              >
                <CardItem />
              </TouchableHighlight>
              <TouchableHighlight
                onPress={() => this.props.navigation.navigate("Detail")}
                style={styles.upperRowView}
              >
                <CardItem />
              </TouchableHighlight>
            </ScrollView>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  topRoView: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  upperRowView: { width: 200, marginRight: 10 },
  rowView: {
    flexDirection: "row",
    paddingTop: 15,
    justifyContent: "space-between",
  },
  txtPopular: { fontSize: 15, fontFamily: "OpenSans-SemiBold" },
  txtViewall: { fontSize: 15, fontFamily: "OpenSans-SemiBold", color: "red" },
  scrollHori: { paddingTop: 20,},
});
