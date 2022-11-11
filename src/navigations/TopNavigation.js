import * as React from 'react';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import History from '../components/History';
import Routes from '../components/Routes';
import Images from '../components/Images';
import Reviews from '../components/Reviews';



const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Routes"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
        tabBarLabelStyle: { fontSize: 12 ,fontWeight:"bold"},
        tabBarStyle: { backgroundColor: 'white' },
      }}
    >
      <Tab.Screen
        name="History"
        component={History}
        options={{ tabBarLabel: 'History' }}
      />
      <Tab.Screen
        name="Routes"
        component={Routes}
        options={{ tabBarLabel: 'Routes' }}
      />
      <Tab.Screen
        name="Images"
        component={Images}
        options={{ tabBarLabel: 'Images' }}
      />
      <Tab.Screen
        name="Reviews"
        component={Reviews}
        options={{ tabBarLabel: 'Reviews' }}
      />
    </Tab.Navigator>
  );
}
export default MyTabs
