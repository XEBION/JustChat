import React from "react";
import { Text, View } from "../components/Themed";
import { useRoute } from "@react-navigation/native";
import { FlatList } from "react-native";
import ChatMessage from "../components/ChatMessage";
import chatRoomData from "../data/Chats";
import InputBox from "../components/InputBox";
import Colors from "../constants/Colors";

const ChatRoomScreen = () => { 

    const route = useRoute();
    
    return (
        <View style={{flex: 1, backgroundColor: Colors.screen.background}}>
            
        <FlatList
            data={chatRoomData.messages}
            renderItem={({ item }) => <ChatMessage message={item} 
            style={{ padding: 20 }}/>}
            
        ></FlatList> 
        <InputBox />
        </View>
    )
}

export default ChatRoomScreen;