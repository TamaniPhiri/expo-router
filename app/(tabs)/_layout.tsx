import { Tabs } from "expo-router";
import Colors from "../../constants/Colors";

const Layout = () => {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: Colors.yellow }}>
      <Tabs.Screen name="index" options={{ tabBarLabel: "Explore" }} />
    </Tabs>
  );
};

export default Layout;
