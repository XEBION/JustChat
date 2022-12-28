import { FlatList, StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import ChatListItem from '../components/ChatListItem';
import chatRooms from '../data/ChatRooms';
import Colors from '../constants/Colors';
import NewMessageButton from '../components/NewMessageButton';

export default function ChatsScreen() {
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
