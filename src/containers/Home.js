import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Avatar } from "react-native-elements";
import AppImages from "../theme/AppImages";
import CardItem from "../components/CardItem";
import CardView from "../components/CardView";
import AsyncStorage from "@react-native-async-storage/async-storage";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiData: {},
      popularData: [],
      viewData: [],
    };
  }
  async componentDidMount() {
    const token = await AsyncStorage.getItem("TOKEN");
    const id = await AsyncStorage.getItem("ID");
    const fullToken = `Bearer ${token}`;
    fetch("https://webapps.iqlance-demo.com/chef/public/api/home", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
        Authorization: fullToken,
      },
      body: JSON.stringify({
        userID: id,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response && response.status) {
          this.setState({
            popularData: response && response.data && response.data.popular,
          });
          this.setState({
            viewData: response && response.data && response.data.viewed,
          });
        }
      })
      .catch((err) => {
        console.log("error", err);
      });
  }
  itemClick = (item) => {
    const recipeId = item && item.recipesID;
    if (recipeId) {
      AsyncStorage.setItem("RECIPEID", JSON.stringify(recipeId));
      this.props.navigation.navigate("Detail");
    }
  };
  render() {
    const { popularData, viewData } = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.topRoView}>
          <View>
            <Text>Hello</Text>
            <Text>name</Text>
          </View>
          <Avatar rounded source={AppImages.avatar} size='medium' />
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
              {popularData &&
                popularData.length > 0 &&
                popularData.map((item, i) => {
                  return (
                    <TouchableOpacity
                      //   onPress={() => this.props.navigation.navigate("Detail")}
                      onPress={() => this.itemClick(item)}
                      style={styles.upperRowView}
                      key={i}
                      activeOpacity={0.7}
                    >
                      <CardItem item={item} />
                    </TouchableOpacity>
                  );
                })}
            </ScrollView>
          </View>
          <Text style={styles.txtPopular}>Most Viewed Recipes</Text>
          <View style={styles.rowView}>
            {viewData &&
              viewData.length > 0 &&
              viewData.map((item, i) => {
                return (
                  <TouchableOpacity
                    // onPress={() => this.props.navigation.navigate("Detail")}
                    onPress={() => this.itemClick(item)}
                    style={styles.upperRowView}
                    key={i}
                    activeOpacity={0.7}
                  >
                    <CardView item={item} />
                  </TouchableOpacity>
                );
              })}
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
    marginBottom: 10,
  },
  upperRowView: { width: 200, marginRight: 10 },
  txtPopular: { fontSize: 15, fontFamily: "OpenSans-SemiBold" },
  txtViewall: { fontSize: 15, fontFamily: "OpenSans-SemiBold", color: "red" },
  scrollHori: { paddingTop: 10, marginBottom: 10 },
  rowView: {
    flexWrap: "wrap",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingBottom: 10,
  },
  cardView: { width: "48.2%" },
});
