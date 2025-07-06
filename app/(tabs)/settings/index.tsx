import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const Page: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<string | null>("Media");
  let tabs = ["Media", "Docs", "Links", "Audio", "GIFs"];
  console.log("selectedTab", selectedTab);
  return (
    <View style={styles.container}>
      <Image
        source={require("@/assets/images/BackgroundProfile.png")}
        style={styles.backgroundImage}
        resizeMode="contain"
      />
      <View style={styles.contentContainer}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Hesam Sanei</Text>
          <Text style={styles.headerSubtitle}>online</Text>
        </View>
        <View style={styles.profileContainer}>
          <View style={styles.profileInfo}>
            <Image
              source={require("@/assets/images/atIcon.png")}
              style={styles.icon}
            />
            <View>
              <Text style={styles.profileName}>Hesamx</Text>
              <Text style={styles.profileLabel}>Username</Text>
            </View>
          </View>
          <View style={styles.divider} />
          <View style={styles.profileInfo}>
            <Image
              source={require("@/assets/images/Info.png")}
              style={styles.icon}
            />
            <View>
              <Text style={styles.profileName}>Full stack designer</Text>
              <Text style={styles.profileLabel}>Bio</Text>
            </View>
          </View>
          <Image
            source={require("@/assets/images/message.png")}
            style={styles.messageIcon}
          />
        </View>

        <View style={styles.notificationsContainer}>
          <View style={styles.profileInfo}>
            <Image
              source={require("@/assets/images/Notifications.png")}
              style={styles.icon}
            />
            <View>
              <Text style={styles.notificationsTitle}>Notifications</Text>
              <Text style={styles.notificationsSubtitle}>Enabled</Text>
            </View>
          </View>
        </View>
        <View style={styles.tabsContainer}>
          <View style={{ marginHorizontal: wp(3), paddingVertical: 10 }}>
            <FlatList
              data={tabs}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={[
                    styles.tabItem,
                    selectedTab === item && styles.selectedTab,
                  ]}
                  onPress={() => setSelectedTab(item)}
                >
                  <Text style={styles.tabText}>{item}</Text>
                </TouchableOpacity>
              )}
              keyExtractor={(item) => item}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#141414",
    flex: 1,
  },
  backgroundImage: {
    width: "100%",
    height: "60%",
    position: "absolute",
  },
  contentContainer: {
    flex: 1,
    justifyContent: "center",
    top: 40,
  },
  header: {
    marginHorizontal: wp(5),
    marginTop: wp(20),
  },
  headerTitle: {
    color: "#FAFAFA",
    fontWeight: "700",
    fontSize: 32,
  },
  headerSubtitle: {
    color: "#4B69FF",
    fontWeight: "500",
    fontSize: 20,
  },
  profileContainer: {
    backgroundColor: "#373737",
    borderRadius: wp(8),
    position: "relative",
    marginTop: wp(5),
  },
  profileInfo: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
  },
  icon: {
    marginRight: wp(5),
    height: 30,
    width: 30,
  },
  profileName: {
    color: "#FAFAFA",
    fontWeight: "500",
    fontSize: 20,
  },
  profileLabel: {
    color: "#888888",
    fontWeight: "500",
    fontSize: 14,
  },
  divider: {
    height: 1.5,
    backgroundColor: "#505050",
    marginHorizontal: wp(10),
  },
  messageIcon: {
    position: "absolute",
    right: 20,
    top: -45,
    height: 80,
    width: 80,
  },
  notificationsContainer: {
    backgroundColor: "#373737",
    borderRadius: wp(8),
    marginTop: wp(5),
  },
  notificationsTitle: {
    color: "#FAFAFA",
    fontWeight: "500",
    fontSize: 20,
  },
  notificationsSubtitle: {
    color: "#888888",
    fontWeight: "500",
    fontSize: 14,
  },
  tabsContainer: {
    backgroundColor: "#373737",
    // padding: wp(5),
    marginTop: wp(8),
    borderRadius: wp(5),
  },
  tabItem: {
    padding: 13,
    borderRadius: wp(10),
    paddingHorizontal: 23,
  },
  selectedTab: {
    backgroundColor: "#4B69FF",
  },
  tabText: {
    color: "#FAFAFA",
  },
});

export default Page;
