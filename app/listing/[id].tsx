import { useLocalSearchParams } from "expo-router";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import listingsData from "../../assets/data/airbnb-listings.json";
import Animated, {
  FadeInLeft,
  FadeInDown,
  ZoomInUp,
} from "react-native-reanimated";
import { Feather, FontAwesome, Ionicons } from "@expo/vector-icons";
import Colors from "../../constants/Colors";

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
          <Text style={styles.location}>
            {listing.room_type} in {listing.smart_location}
          </Text>
          <Animated.View
            entering={FadeInDown.delay(600)}
            style={styles.metricContainer}
          >
            <View style={styles.metricCard}>
              <Feather name="users" size={24} color={Colors.orange} />
              <Text style={styles.metricText}>{listing.guests_included}</Text>
            </View>
            <View style={styles.metricCard}>
              <Ionicons name="bed-outline" size={24} color={Colors.orange} />
              <Text style={styles.metricText}>{listing.bedrooms}</Text>
            </View>
            <View style={styles.metricCard}>
              <FontAwesome name="bath" size={24} color={Colors.orange} />
              <Text style={styles.metricText}>{listing.bathrooms}</Text>
            </View>
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
  metricCard: {
    alignItems: "center",
  },
  metricContainer: {
    borderColor: Colors.orange,
    borderWidth: 0.5,
    flexDirection: "row",
    justifyContent: "space-evenly",
    padding: 8,
    borderRadius: 10,
  },
  location: {
    marginVertical: 12,
    fontFamily: "mon",
    color: "#e5e5e5",
  },
  metricText: {
    fontSize: 24,
    color: "#fff",
    fontFamily:"mon-b"
  },
});
