import { useLocalSearchParams } from "expo-router";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import listingsData from "../../assets/data/airbnb-listings.json";
import Animated, { SlideInUp, SlideOutUp } from "react-native-reanimated";

const { width } = Dimensions.get("window");
const Page = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const listing: AirbnbListing = (listingsData as any[]).find(
    (item: AirbnbListing) => item.id === id
  );
  return (
    <View style={styles.container}>
      <Animated.ScrollView>
        <Animated.Image
          entering={SlideInUp}
          exiting={SlideOutUp}
          source={{ uri: listing.xl_picture_url }}
          style={styles.image}
        />
      </Animated.ScrollView>
    </View>
  );
};

export default Page;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: width,
    height: 300,
  },
});
