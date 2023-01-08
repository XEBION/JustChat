import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';

import { Fontisto } from "@expo/vector-icons";

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ChatsScreen from '../screens/ChatsScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import { MainTabParamList, TabOneParamList, TabTwoParamList } from '../types';

const MainTab = createMaterialTopTabNavigator<MainTabParamList>();

export default function MainTabNavigator() {
  const colorScheme = useColorScheme();
  
  return (
    <MainTab.Navigator
      initialRouteName="Sohbet"
      tabBarOptions={{
        tabBarActiveTintColor: Colors.dark.tint,
        style: {
            backgroundColor: Colors.dark.background,
        },
        indicatorStyle: {
            backgroundColor: Colors.light.background,
            height: 4,
        },
        labelStyle: {
            fontWeight: 'bold'
        },
        tabBarItemStyle: {
            width:'auto',
          },
        showIcon: true,
      }}>
        <MainTab.Screen
        name="Kamera"
        component={TabTwoScreen}
        options={{
          tabBarIcon: ({ color }) => <Fontisto name="camera" color={color} size={18} />,
          tabBarLabel: () => null,
          
        }}
      />
      <MainTab.Screen
        name="Sohbet"
        component={ChatsScreen}
      />
      <MainTab.Screen
        name="Durum"
        component={TabTwoScreen}
        
      />
      <MainTab.Screen
        name="Gruplar"
        component={TabTwoScreen}
        
      />
        </MainTab.Navigator>
        
  );
}

function TabBarIcon(props: {
    name: React.ComponentProps<typeof FontAwesome>['name'];
    color: string;
  }) {
    return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
  }