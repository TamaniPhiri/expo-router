import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "../constants/Colors";
import { Link } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

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
      <View style={styles.container}>
        <View style={styles.filterContainer}>
          <Link
            style={styles.searchInputContainer}
            href={"/(modals)/booking"}
            asChild
          >
            <TouchableOpacity style={styles.search}>
              <Ionicons name="search" size={24} color="white" />
              <View>
                <Text style={[styles.whiteText, { fontFamily: "mon-b" }]}>
                  Where to?
                </Text>
                <Text style={[styles.whiteText, { fontFamily: "mon" }]}>
                  Anywhere Any Week
                </Text>
              </View>
            </TouchableOpacity>
          </Link>
          <TouchableOpacity style={styles.filterButton}>
            <Ionicons name="options-outline" size={24} color={"white"} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ExploreHeader;

const styles = StyleSheet.create({
  container: {
    height: 130,
    backgroundColor: "#262626",
    paddingHorizontal: 10,
    paddingTop: 12,
  },
  filterContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
  },
  filterButton: {
    borderWidth: 1,
    borderColor: "gray",
    padding: 8,
    borderRadius: 24,
  },
  searchInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  whiteText: {
    color: "white",
  },
  search: {
    borderColor: "gray",
    borderWidth: 0.5,
    flex: 1,
    padding: 8,
    borderRadius: 24,
  },
});
