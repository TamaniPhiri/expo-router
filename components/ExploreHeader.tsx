import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "../constants/Colors";
import { Link } from "expo-router";

const categories = [
  {
    name: "Tiny homes",
    icon: "home",
  },
  {
    name: "Cabins",
    icon: "house-siding",
  },
  {
    name: "Trending",
    icon: "local-fire-department",
  },
  {
    name: "Play",
    icon: "videogame-asset",
  },
  {
    name: "City",
    icon: "apartment",
  },
  {
    name: "Beachfront",
    icon: "beach-access",
  },
  {
    name: "Countryside",
    icon: "nature-people",
  },
];

const ExploreHeader = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        <View style={{ backgroundColor: Colors.mid,flex:1 }}>
          <View>
            <Link href={"/(modals)/booking"}>Booking</Link>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ExploreHeader;
