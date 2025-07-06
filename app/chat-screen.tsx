// ChatScreen.tsx
import { BlurView } from "expo-blur";
import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  ListRenderItem,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

interface Message {
  id: string;
  text: string;
  sender: "me" | "other";
  time: string;
  date?: string;
  notDelivered?: boolean;
}

const messages: Message[] = [
  {
    id: "1",
    text: "Hi!",
    sender: "other",
    time: "12:56 pm",
    date: "Tuesday, 15",
  },
  { id: "2", text: "We can meet? I am free", sender: "me", time: "11:30 pm" },
  {
    id: "3",
    text: "Can you write the time and place of the meeting?",
    sender: "me",
    time: "11:30 pm",
  },
  { id: "4", text: "That’s fine", sender: "other", time: "2:40 pm" },
  {
    id: "5",
    text: "Then at 5 near the tower",
    sender: "other",
    time: "2:41 pm",
  },
  { id: "6", text: "Deal!", sender: "me", time: "11:43 pm" },
  { id: "7", text: "Kisses! 😘", sender: "other", time: "2:44 pm" },
  {
    id: "9",
    text: "Hey! I looked at your project yesterday that you sent me. I corrected some errors, now and will send it 📑",
    sender: "me",
    time: "8:01 am",
    date: "Friday, 18",
  },
  {
    id: "9",
    text: "Hey! I looked at your project yesterday that you sent me. I corrected some errors, now and will send it 📑",
    sender: "me",
    time: "8:01 am",
    date: "Friday, 18",
  },
  {
    id: "9",
    text: "Hey! I looked at your project yesterday that you sent me. I corrected some errors, now and will send it 📑",
    sender: "me",
    time: "8:01 am",
    date: "Friday, 18",
  },
  {
    id: "10",
    text: "Oh thank you! I won't be in debt)",
    sender: "other",
    time: "8:03 am",
  },
];

const ChatScreen: React.FC = () => {
  const renderItem: ListRenderItem<Message> = ({ item }) => {
    const isMe = item.sender === "me";

    return (
      <View style={styles.messageWrapper}>
        {isMe ? (
          <View style={[styles.myMessageContainer]}>
            <View style={[styles.message, styles.myMessage]}>
              <Text style={styles.text}>{item?.text}</Text>
            </View>
            <Text style={[styles.time, styles.myTime]}>{item?.time}</Text>
          </View>
        ) : (
          <View style={[styles.otherMessageContainer]}>
            <View style={[styles.message, styles.otherMessage]}>
              <Text style={styles.text}>{item?.text}</Text>
            </View>
            <Text style={[styles.time, styles.otherTime]}>{item?.time}</Text>
          </View>
        )}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.chat}
        inverted
      />
      <View style={styles.inputContainer}>
        <Image
          source={require("@/assets/images/emoji.png")}
          style={styles.emojiIcon}
        />
        <View style={styles.textInputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="Hi! How are you?"
            placeholderTextColor="#aaa"
          />
          <View style={styles.sendIconWrapper}>
            <Image
              source={require("@/assets/images/send.png")}
              style={styles.sendIcon}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
  },

  blurContainer: {
    padding: 10,
    alignItems: "center",
  },

  chat: {
    paddingHorizontal: 10,
    paddingBottom: 10,
    paddingTop: 50, // Add padding top to avoid overlapping with the header
  },
  messageWrapper: {
    flex: 1,
    paddingVertical: 10,
  },
  myMessageContainer: {
    flexDirection: "row-reverse",
    marginLeft: wp(25),
  },
  otherMessageContainer: {
    flexDirection: "row",
    marginRight: wp(25),
  },
  message: {
    padding: 15,
    paddingVertical: wp(3),
    borderRadius: wp(5),
  },
  myMessage: {
    backgroundColor: "#4B69FF",
    borderTopRightRadius: wp(2),
  },
  otherMessage: {
    backgroundColor: "#505050",
    borderTopLeftRadius: wp(2),
  },
  text: {
    color: "#EBEBEB",
    fontWeight: "400",
    fontSize: 16,
  },
  time: {
    fontWeight: "400",
    fontSize: 16,
    alignSelf: "flex-end",
  },
  myTime: {
    color: "#888888",
    marginRight: wp(2),
  },
  otherTime: {
    color: "#888888",
    marginLeft: wp(2),
  },
  inputContainer: {
    flexDirection: "row",
    padding: 10,
    borderColor: "#ccc",
    backgroundColor: "rgba(50, 50, 50, 0.7)",
    justifyContent: "space-between",
    alignItems: "center",
  },
  emojiIcon: {
    height: 38,
    width: 38,
  },
  textInputWrapper: {
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    flex: 1,
    paddingHorizontal: wp(2),
    borderRadius: wp(10),
    marginHorizontal: wp(1.5),
    position: "relative",
  },
  input: {
    color: "#fff",
    borderRadius: 20,
    height: hp(7),
    padding: 10,
  },
  sendIconWrapper: {
    position: "absolute",
    right: 20,
    bottom: 10,
  },
  sendIcon: {
    height: 38,
    width: 38,
  },
});

export default ChatScreen;
