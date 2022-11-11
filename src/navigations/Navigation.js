import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  Main,
  StarterOne,
  StarterTwo,
  Favorite,
  Order,
  Profile,
} from "../screens/Index";

import Category from "../screens/Category";
import Detail from "../screens/Detail";

const Tab = createBottomTabNavigator();
const MainApp = () => {
  return (
    <Tab.Navigator tabBar={(props) => <BottomNavigator {...props} />}>
      <Tab.Screen
        name="Home"
        component={Main}
        options={{ headerShown: false }}
      ></Tab.Screen>
      <Tab.Screen
        name="Favorite"
        component={Favorite}
        options={{ headerShown: false }}
      ></Tab.Screen>
      <Tab.Screen
        name="Order"
        component={Order}
        options={{ headerShown: false }}
      ></Tab.Screen>
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false }}
      ></Tab.Screen>
    </Tab.Navigator>
  );
};

const Stack = createNativeStackNavigator();
import BottomNavigator from "../shared/major/BottomNavigator";
const Navigation = () => {
  return (
    <Stack.Navigator initialRouteName="StaterOne">
      <Stack.Screen
        name="StarterOne"
        component={StarterOne}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="StarterTwo"
        component={StarterTwo}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Category"
        component={Category}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default Navigation;
