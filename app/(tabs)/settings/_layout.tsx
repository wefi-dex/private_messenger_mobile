import { Stack } from 'expo-router';
const Layout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: 'Settings',
          headerShown: false,
        }}
      />
    </Stack>
  );
};
export default Layout;