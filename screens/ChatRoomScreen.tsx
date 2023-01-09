import React from "react";
import { Text, View } from "../components/Themed";
import { useRoute } from "@react-navigation/native";
import { FlatList } from "react-native";
import ChatMessage from "../components/ChatMessage";
import chatRoomData from "../data/Chats";
import InputBox from "../components/InputBox";
import Colors from "../constants/Colors";
import { useState, useEffect } from "react";
import {
  API,
  graphqlOperation,
  Auth,
} from 'aws-amplify';
import { listMessages, messagesByChatRoom } from "../src/graphql/queries";
import { onCreateMessage } from '../src/graphql/subscriptions';


const ChatRoomScreen = () => { 
    
  const [messages, setMessages] = useState([]);
  const [myId, setMyId] = useState(null);

  const route = useRoute();
  console.log(route.params.id)

  const fetchMessages = async () => {
    const messagesData = await API.graphql(
      graphqlOperation(
        messagesByChatRoom, {
          chatRoomID: route.params.id,
          sortDirection: "DESC",
        },
      )
    )

    console.log("FETCH MESSAGES")
    setMessages(messagesData.data.messagesByChatRoom.items);
  }

  useEffect(() => {
    fetchMessages();
  }, [])

  useEffect(() => {
    const getMyId = async () => {
      const userInfo = await Auth.currentAuthenticatedUser();
      setMyId(userInfo.attributes.sub);
    }
    getMyId();
  }, [])

  useEffect(() => {
    const subscription = API.graphql(
      graphqlOperation(onCreateMessage)
    ).subscribe({
      next: (data) => {
        const newMessage = data.value.data.onCreateMessage;

        if (newMessage.chatRoomID !== route.params.id) {
          console.log("Message is in another room!")
          return;
        }

        fetchMessages();
        // setMessages([newMessage, ...messages]);
      }
    });

    return () => subscription.unsubscribe();
  }, [])

  console.log(`messages in state: ${messages.length}`)
    
    
    return (
        <View style={{flex: 1, backgroundColor: Colors.screen.background}}>
            
        <FlatList
            data={messages}
            renderItem={({ item }) => <ChatMessage myId={myId} message={item} />}
            inverted
        ></FlatList> 
        <InputBox chatRoomID={route.params.id}/>
        </View>
    )
}

export default ChatRoomScreen;