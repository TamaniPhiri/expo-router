import { useLocalSearchParams } from "expo-router";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import listingsData from "../../assets/data/airbnb-listings.json";
import Animated, { FadeInLeft, ZoomInUp } from "react-native-reanimated";

const { width } = Dimensions.get("window");
const Page = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const listing: AirbnbListing = (listingsData as any[]).find(
    (item: AirbnbListing) => item.id === id
  );
  const textAnimationConfig = {
    ...FadeInLeft,
    delay: 500,
  };
  return (
    <View style={styles.container}>
      <Animated.ScrollView>
        <Animated.Image
          entering={ZoomInUp}
          source={{ uri: listing.xl_picture_url }}
          style={styles.image}
        />
        <View>
          <Animated.Text entering={FadeInLeft.delay(400)}>
            {listing.name}
          </Animated.Text>
        </View>
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
