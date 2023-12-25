import { useLocalSearchParams } from "expo-router";
import { View, Text, StyleSheet, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import listingsData from "../../assets/data/airbnb-listings.json";
import Animated from "react-native-reanimated";

const Page = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const listing: AirbnbListing = (listingsData as any[]).find(
    (item: AirbnbListing) => item.id === id
  );
  return (
    <View style={styles.container}>
      <Animated.ScrollView>
        <Animated.Image source={{ uri: listing.xl_picture_url}} height={200} />
      </Animated.ScrollView>
    </View>
  );
};

export default Page;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
