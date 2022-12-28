/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, View, Pressable } from 'react-native';
import {
  Octicons,
  MaterialCommunityIcons,
  MaterialIcons,
  FontAwesome5,
} from '@expo/vector-icons';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import MainTabNavigator from './MainTabNavigator';
import ChatsScreen from '../screens/ChatsScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import ChatRoomScreen from '../screens/ChatRoomScreen';
import ContactsScreen from '../screens/ContactsScreen';
import { roundToNearestMinutes } from 'date-fns';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{
      headerStyle: { 
        backgroundColor: Colors.dark.background,
        borderBottomColor: Colors.dark.text,
        shadowOpacity: 0,
        elevation: 0,
      }
    }}>
      <Stack.Screen name="Root" 
      component={MainTabNavigator} 
      options={{ 
        title: "JustChat",
        headerRight: () => (
          <View style={{
          flexDirection: 'row', 
          width: 60,
          justifyContent: 'space-between',
          marginRight: 10,
          }}>
          <Octicons name="search" size={22} color={'black'} />
          <MaterialCommunityIcons name="dots-vertical" size={22} color={'black'} />


          </View>
        )
       }} />
      <Stack.Screen 
      name="ChatRoom" 
      component={ChatRoomScreen} 
      options={({ route }) => ({
        title: route.params.name,
        headerRight: () => (
          <View style={{
            flexDirection: 'row',
            width: 100,
            justifyContent: 'space-between',
            marginRight: 10,
          }}>
            <MaterialIcons name="call" size={22} color={'black'} />
            <FontAwesome5 name="video" size={22} color={'black'} />
            <MaterialCommunityIcons name="dots-vertical" size={22} color={'black'} />
          </View>
        )
      })}
      />
      <Stack.Screen
        name="Contacts"
        component={ContactsScreen}
      />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

