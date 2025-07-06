import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Colors from "@/constants/Colors";
import { Link } from "expo-router";

type Props = {
  track: number;
};
const ChatListItem = ({ track }: Props) => {
  return (

    <View style={styles.chatListContainer}>

      <View style={styles.grayCircle} />
      <View style={styles.detailContainer}>
        <Link push href="/chat-screen">
          <Text style={styles.name}>Contact Name {track.contact}</Text>
        </Link>
        <Text style={styles.text}>Lorem ipsum dolor set amet...{track.userAddress}</Text>
      </View>
      {
         track.messages && (<View style={styles.timeContainer}>
        {/* // (<View style={styles.timeContainer}> */}
          <Text style={styles.time}>8:35 am {track.messages[track.messages.length() -1].createdAt}</Text>
          <View style={styles.badgeContainer}>
            <View style={styles.badge}>
              <Text>3{track.messages.length()}</Text>
            </View>
          </View>
        </View>)
      }
    </View>

  );
};

export default ChatListItem;

const styles = StyleSheet.create({
  chatListContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 100,
    gap: 6,
  },
  grayCircle: {
    width: 56,
    height: 56,
    backgroundColor: Colors.gray,
    borderRadius: 100,
    marginRight: 12,
  },
  detailContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    gap: 8,
    flex: 1,
  },
  timeContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    gap: 8,
  },
  name: {
    fontSize: 18,
    fontWeight: "700",
    color: Colors.white,
  },
  text: {
    fontSize: 14,
    fontWeight: "400",
    color: Colors.white,
  },
  time: {
    fontSize: 12,
    fontWeight: "400",
    color: Colors.gray,
  },
  badgeContainer: {
    display: "flex",
    alignItems: "flex-end",
    gap: 6,
    width: "100%",
  },
  badge: {
    backgroundColor: Colors.primary,
    width: 21,
    height: 21,
    borderRadius: 100,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
