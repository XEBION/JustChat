import { FlatList, StyleSheet } from 'react-native';
import {useEffect, useState} from "react";
import {
  API,
  graphqlOperation,
  Auth,
} from 'aws-amplify';


import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import ChatListItem from '../components/ChatListItem';
import chatRooms from '../data/ChatRooms';
import Colors from '../constants/Colors';
import NewMessageButton from '../components/NewMessageButton';

import { getUser } from './queries';

export default function ChatsScreen() {

 const [chatRooms, setChatRooms] = useState([]);

  useEffect(() => {
    const fetchChatRooms = async () => {
      try {
        const userInfo = await Auth.currentAuthenticatedUser();

        const userData = await API.graphql(
          graphqlOperation(
            getUser, {
              id: userInfo.attributes.sub,
            }
          )
        )

        setChatRooms(userData.data.getUser.chatRoomUser.items)
      } catch (e) {
        console.log(e);
      }
    }
    fetchChatRooms();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList 
      data={chatRooms} 
      renderItem={({ item }) => <ChatListItem chatRoom={item} />}
      keyExtractor={(item) => item.id}
      />
      <NewMessageButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.screen.background,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }

});
