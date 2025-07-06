import {
	DarkTheme,
	DefaultTheme,
	ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";
import { ThirdwebProvider } from "thirdweb/react";
import FontAwesome from '@expo/vector-icons/FontAwesome';

import { useColorScheme } from "@/hooks/useColorScheme";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
	const colorScheme = useColorScheme();
	

	const [loaded, error] = useFonts({
		'WorkSans-Regular': require('../assets/fonts/WorkSans-Regular.ttf'),
		'WorkSans-Bold': require('../assets/fonts/WorkSans-Bold.ttf'),
		'WorkSans-SemiBold': require('../assets/fonts/WorkSans-SemiBold.ttf'),
		'WorkSans-Light': require('../assets/fonts/WorkSans-Light.ttf'),
		'WorkSans-Thin': require('../assets/fonts/WorkSans-Thin.ttf'),
		...FontAwesome.font,
	  });

	useEffect(() => {
		if (loaded) {
			SplashScreen.hideAsync();
		}
	}, [loaded]);

	if (!loaded) {
		return null;
	}

	return (
		<ThirdwebProvider>
			<ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
				<Stack>
				<Stack.Screen name="index" options={{ headerShown: false }} />

					<Stack.Screen name="(tabs)" options={{ headerShown: false }} />
					<Stack.Screen name="chat-screen" options={{ headerShown: false }} />

					<Stack.Screen name="+not-found" />
				</Stack>
			</ThemeProvider>
		</ThirdwebProvider>
	);
}
