import Colors from '@/constants/Colors';
import { Stack } from 'expo-router';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: 'Chats',
          headerTransparent: true,
          headerTintColor: 'white',
          headerBlurEffect: 'regular',
          headerTitleAlign: 'center',
          headerLeft: () => (
            <TouchableOpacity>
              <View>
                <Text style={styles.headerLeftText}>Edit</Text>
              </View>
            </TouchableOpacity>
          ),
          headerRight: () => (
            <View style={{ flexDirection: 'row', gap: 30 }}>
              <TouchableOpacity>
                <View style={styles.button}>
                  {/* <Image source={} alt="Not" style={styles.callAdd} /> */}
                  <Text style={styles.buttonText}>New</Text>
                </View>
              </TouchableOpacity>
            </View>
          ),
          headerStyle: {
            backgroundColor: Colors.background,
          },
          headerTitle: () => (
            <Text style={styles.headerTitle}>Calls</Text>
          ),
        }}
      />
    </Stack>
  );
};
export default Layout;

const styles = StyleSheet.create({
  headerLeftText: {
    color: Colors.secondaryGray,
    fontSize: 18,
    fontWeight: '500',
  },
  button: {
    backgroundColor: Colors.primary,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 100,
    display: "flex",
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
  },
  buttonText: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: '600',
  },
  headerTitle: {
    color: Colors.white,
    fontSize: 20,
    fontWeight: '700',
  },
  callAdd: {
    width: 18,
    height: 18,
  }
});
