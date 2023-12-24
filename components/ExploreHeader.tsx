import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { ScrollView } from "react-native-gesture-handler";
import { useRef, useState } from "react";

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
  const scrollRef = useRef<ScrollView>(null);
  const itemsRef = useRef<Array<TouchableOpacity | null>>([]);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const selectCategory = (index: number) => {
    const selected = itemsRef.current[index];
    setActiveIndex(index);
    selected?.measure((x) => {
      scrollRef.current?.scrollTo({ x: x - 16, y: 0, animated: true });
    });
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style="light" backgroundColor="#262626" />
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
                <Text style={{ fontFamily: "mon", color: "#a3a3a3" }}>
                  Anywhere - Any week - Add guests
                </Text>
              </View>
            </TouchableOpacity>
          </Link>
          <TouchableOpacity style={styles.filterButton}>
            <Ionicons name="options-outline" size={24} color={"white"} />
          </TouchableOpacity>
        </View>
        <ScrollView
          ref={scrollRef}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            alignItems: "center",
            gap: 24,
            flexGrow: 1,
          }}
        >
          {categories.map((item, i) => (
            <TouchableOpacity
              key={i}
              onPress={() => selectCategory(i)}
              ref={(el) => (itemsRef.current[i] = el)}
              style={
                activeIndex === i
                  ? styles.categoryBtnActive
                  : styles.categoryBtn
              }
            >
              <MaterialIcons
                name={item.icon as any}
                color={activeIndex === i ? "#e5e5e5" : "#a3a3a3"}
                size={20}
              />
              <Text
                style={
                  activeIndex === i
                    ? styles.categoryTextActive
                    : styles.categoryText
                }
              >
                {item.name}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
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
  categoryText: {
    color: "#a3a3a3",
    fontFamily: "mon-sb",
  },
  categoryTextActive: {
    color: "#e5e5e5",
    fontFamily: "mon-sb",
  },
  categoryBtn: {
    flexDirection: "column",
    alignItems: "center",
    gap: 4,
    paddingBottom: 8,
    marginTop: 12,
  },
  categoryBtnActive: {
    flexDirection: "column",
    alignItems: "center",
    gap: 4,
    paddingBottom: 8,
    marginTop: 12,
    borderBottomWidth: 2,
    borderBottomColor: "white",
  },
});
