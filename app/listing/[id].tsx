import { useLocalSearchParams } from "expo-router";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import listingsData from "../../assets/data/airbnb-listings.json";
import Animated, { FadeInLeft, ZoomInUp } from "react-native-reanimated";
import { Feather } from "@expo/vector-icons";

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
          entering={ZoomInUp.duration(500)}
          source={{ uri: listing.xl_picture_url }}
          style={styles.image}
        />
        <View style={styles.infoContainer}>
          <Animated.Text
            style={styles.name}
            entering={FadeInLeft.delay(400).duration(500)}
          >
            {listing.name}
          </Animated.Text>
          <Text>
            {listing.room_type} in {listing.smart_location}
          </Text>
          <Animated.View style={{ borderColor: "gray", borderWidth: 0.5 }}>
            <View>
              <Feather name="users"/>
              <Text>
              {listing.guests_included}
              </Text>
              </View> {listing.bedrooms} 
          </Animated.View>
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
  name: {
    fontFamily: "mon-b",
    color: "white",
    fontSize: 24,
  },
  infoContainer: {
    padding: 24,
  },
});
