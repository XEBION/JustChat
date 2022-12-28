import React from 'react';
import {Text, View} from 'react-native';
import { Message } from "../../types";
import moment from "moment";
import styles from './styles';
import Colors from '../../constants/Colors';
import format from 'date-fns/format';
import { formatDistance, formatDistanceToNow } from 'date-fns';
import { tr } from 'date-fns/locale';

export type ChatMessageProps = {
  message: Message;
  myId: String,
}

const ChatMessage = (props: ChatMessageProps) => {
  const { message, myId } = props;

  const isMyMessage = () => {
    return message.user.id == 'u1';
  }

  return (
    <View style={styles.container}>
      <View style={[
        styles.messageBox, {
          backgroundColor: isMyMessage() ? Colors.screen.mymessagebackground : '#2d2d30',
          marginLeft: isMyMessage() ? 50 : 0,
          marginRight: isMyMessage() ? 0 : 50,
        }
      ]}>
        {!isMyMessage() && <Text style={styles.name}>{message.user.name}</Text>}
        <Text style={styles.message}>{message.content}</Text>
        <Text style={styles.time}>{formatDistanceToNow(new Date(message.createdAt), {locale: tr, addSuffix: true},)}</Text>
      </View>
    </View>
  )
}

export default ChatMessage;
