import React, { Component } from "react";
import { View, StyleSheet, Text, SafeAreaView, ScrollView,TouchableOpacity } from "react-native";
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
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("Detail")}
                style={styles.upperRowView}
                activeOpacity={0.7}
              >
                <CardItem />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("Detail")}
                style={styles.upperRowView}
                activeOpacity={0.7}
              >
                <CardItem />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("Detail")}
                style={styles.upperRowView}
                activeOpacity={0.7}
              >
                <CardItem />
              </TouchableOpacity>
            </ScrollView>
          </View>
          <Text style={styles.txtPopular}>Most Viewed Recipes</Text>
          <View style={styles.rowView}>
          <TouchableOpacity
            style={styles.cardView}
            activeOpacity={0.7}
            onPress={() => this.props.navigation.navigate("Detail")}
          >
            <CardItem />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.cardView}
            activeOpacity={0.7}
            onPress={() => this.props.navigation.navigate("Detail")}
          >
            <CardItem />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.cardView}
            activeOpacity={0.7}
            onPress={() => this.props.navigation.navigate("Detail")}
          >
            <CardItem />
          </TouchableOpacity>
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
  txtPopular: { fontSize: 15, fontFamily: "OpenSans-SemiBold" },
  txtViewall: { fontSize: 15, fontFamily: "OpenSans-SemiBold", color: "red" },
  scrollHori: { paddingTop: 10,marginBottom:10},
  rowView: {
    flexWrap: "wrap",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingBottom: 10,
  },
  cardView: { width: "48.2%" },
  
});
