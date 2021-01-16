import React from "react";
import { View,Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Signin from "./src/containers/Signin";
import Detail from "./src/containers/Detail";
import ForgotPassword from './src/containers/ForgotPassword';
import BottomNavigator from "./src/containers/BottomTabNavigator";

const Stack = createStackNavigator();
const BottomTabStack = () => {
  return <BottomNavigator />;
};
const App = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName='Signin'>
      <Stack.Screen
        name='Signin'
        component={Signin}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='Home'
        component={BottomTabStack}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='Detail'
        component={Detail}
        options={{ headerShown: false }}
      />
       <Stack.Screen
        name='ForgotPassword'
        component={ForgotPassword}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  </NavigationContainer>
  );
};
export default App;
