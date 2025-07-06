import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Link } from "expo-router";
import { SimpleLineIcons } from "@expo/vector-icons";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import {
  useConnect,
} from "thirdweb/react";
import Colors from "@/constants/Colors";
import {
  inAppWallet,
} from "thirdweb/wallets/in-app";
import { chain, client } from "@/constants/thirdweb";
import {
  InAppWalletSocialAuth,
} from "thirdweb/wallets";
import { useThemeColor } from "@/hooks/useThemeColor";
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';

const Header = () => (
  <View style={styles.headerContainer}>
    <Text style={styles.headerText}>Let’s get you</Text>
    <Text style={styles.headerText}>Started</Text>
  </View>
);

const SubHeader = () => (
  <View>
    <Text style={styles.headerSubText}>
      In order to use the app please sign in via your phone number or login with
      your google account.
    </Text>
  </View>
);

export default function HomeScreen() {
  return (
    <View style={styles.mainContainer}>
      <View>
        <Header />
        <SubHeader />
      </View>

      <View style={styles.imageContainer}>
        <Image
          style={styles.mainImage}
          source={require("../assets/images/wallet-coin-main.png")}
        />
      </View>

      <View>
        <Link href={"/chats"} replace asChild>
          <TouchableOpacity>
            <View style={[styles.buttonBase, styles.buttonPrimary]}>
              <SimpleLineIcons name="phone" size={24} color="white" />
              <Text style={[styles.buttonText, styles.buttonTextWhite]}>
                Sign In Via Phone Number
              </Text>
            </View>
          </TouchableOpacity>
        </Link>

        <TouchableOpacity>
          <View style={[styles.buttonWhite]}>
            <ConnectWithSocial key={"google"} auth={"google"} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function ConnectWithSocial(props: { auth: InAppWalletSocialAuth }) {
  const router = useRouter();
  const bgColor = useThemeColor({}, "border");
  const { connect, isConnecting } = useConnect();
  const strategy = props.auth;
  const connectInAppWallet = async () => {
    await connect(async () => {
      const wallet = inAppWallet({
        smartAccount: {
          chain,
          sponsorGas: true,
        },
      });
      await wallet.connect({
        client,
        strategy,
        redirectUrl: "com.thirdweb.demo://",
      });

      const account = wallet.getAccount();
      
      if(!account) return wallet;

      const walletAddress = account.address;
      const url = `${process.env.EXPO_PUBLIC_BACKEND_URL}/api/auth/w-login?wallet=${walletAddress}`;
      const res = await axios.get(url);
      if (!res.data.token) {
        throw new Error("Communication Error.")
      } 
      await AsyncStorage.setItem('pm-token', res.data.token);
      router.push(`/(tabs)/chats`)
      return wallet;
    });
  };

  return (
    <View>
      {isConnecting ? (
        <ActivityIndicator />
      ) : (
        <TouchableOpacity
          style={[styles.buttonBase, styles.transparent]}
          key={strategy}
          onPress={connectInAppWallet}
          disabled={isConnecting}
        >
          <Text style={styles.buttonText}>Google Login</Text>
          <Image
            source={getSocialIcon(strategy)}
            style={{
              width: 25,
              height: 25,
              resizeMode: "contain",
            }}
          />
        </TouchableOpacity>
      )}
    </View>
  );
}

function getSocialIcon(strategy: string) {
  switch (strategy) {
    case "google":
      return require("@/assets/images/google.png");
  }
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: "100%",
    width: "100%",
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  rowContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 24,
    justifyContent: "space-evenly",
  },
  mainContainer: {
    flex: 1,
    justifyContent: "space-between",
    paddingVertical: hp(9),
    backgroundColor: Colors.background,
  },
  transparent: {
    backgroundColor: Colors.white,
    height: 60,
    borderRadius: 60,
  },
  headerContainer: {
    alignItems: "center",
  },
  headerText: {
    color: Colors.primary,
    fontSize: 32,
    textAlign: "center",
    fontFamily: "WorkSans-Bold",
  },
  headerSubText: {
    color: Colors.white,
    textAlign: "center",
    fontSize: 18,
    paddingTop: hp(1.5),
    paddingHorizontal: wp(4),

    fontFamily: "WorkSans-Regular",
  },
  imageContainer: {
    alignItems: "center",
  },
  mainImage: {
    width: wp(70),
    height: wp(70),
  },
  logoImage: {
    width: wp(5),
    height: wp(5),
  },
  buttonBase: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: wp(2),
    paddingHorizontal: wp(2),
    borderRadius: 100,
    gap: 6,
    width: wp(95),
    margin: "auto",
  },
  buttonPrimary: {
    backgroundColor: Colors.primary,
    marginBottom: wp(3),
    height: 60,
    borderRadius: 60,
  },
  buttonWhite: {
    height: 60,
    borderRadius: 30,
  },
  buttonText: {
    color: Colors.background,
    fontSize: 20,
    fontWeight: "600",
    fontFamily: "WorkSans-Bold",
  },
  buttonTextWhite: {
    color: Colors.white,
  },
});
