import { Tabs } from "expo-router";
import Colors from "../../constants/Colors";

const Layout = () => {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: Colors.yellow ,tabBarLabelStyle:{
      fontFamily:"mon-sb"
    }}}>
      <Tabs.Screen
        name="index"
        options={{ tabBarLabel: "Explore", title: "Explore" }}
      />
    </Tabs>
  );
};

export default Layout;
