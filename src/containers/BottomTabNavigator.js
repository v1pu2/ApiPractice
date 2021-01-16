import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../containers/Home";
import Search from "../containers/Search";
import { Image, StyleSheet } from "react-native";
const BottomTab = createBottomTabNavigator();

const BottomTabStack = () => {
  return (
    <BottomTab.Navigator
      initialRouteName='Home'
      tabBarOptions={{
        activeTintColor: "#FFFFFF",
        inactiveTintColor: "#F8F8F8",
        style: styles.back,
        labelStyle: styles.labelStyle,
        indicatorStyle: styles.indicator,
      }}
    >
      <BottomTab.Screen
        name='Home'
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ focused, color, size }) => (
            <Image
              source={
                focused
                  ? require("../../assets/ic_home_active.png")
                  : require("../../assets/ic_home.png")
              }
              style={{
                width: size,
                height: size,
                borderRadius: size,
              }}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name='Search'
        component={Search}
        options={{
            tabBarLabel: "Search",
            tabBarIcon: ({ focused, color, size }) => (
              <Image
                source={
                  focused
                    ? require("../../assets/ic_search_active.png")
                    : require("../../assets/ic_search.png")
                }
                style={{
                  width: size,
                  height: size,
                  borderRadius: size,
                }}
              />
            ),
          }}
      />
    </BottomTab.Navigator>
  );
};
export default BottomTabStack;
const styles = StyleSheet.create({
  back: {
    backgroundColor: "#fff",
    height: 70,
  },
  indicator: {
    borderBottomColor: "#87B56A",
    borderBottomWidth: 2,
  },
  labelStyle: {
    textAlign: "center",
    marginBottom: 10,
    fontSize: 14,
    color:'black'
  },
});
