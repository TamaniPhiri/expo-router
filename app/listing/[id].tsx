import { useLocalSearchParams } from "expo-router";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import listingsData from "../../assets/data/airbnb-listings.json";
import Animated, {
  FadeInLeft,
  FadeInDown,
  ZoomInUp,
  SlideInUp,
} from "react-native-reanimated";
import { AntDesign, Feather, FontAwesome, Ionicons } from "@expo/vector-icons";
import Colors from "../../constants/Colors";

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
              <Feather name="users" size={24} color={Colors.yellow} />
              <Text style={styles.metricText}>{listing.guests_included}</Text>
            </View>
            <View style={styles.metricCard}>
              <Ionicons name="bed-outline" size={24} color={Colors.yellow} />
              <Text style={styles.metricText}>{listing.bedrooms}</Text>
            </View>
            <View style={styles.metricCard}>
              <FontAwesome name="bath" size={24} color={Colors.yellow} />
              <Text style={styles.metricText}>{listing.bathrooms}</Text>
            </View>
            <View style={styles.metricCard}>
              <AntDesign name="staro" size={24} color={Colors.yellow} />
              <Text style={styles.metricText}>
                {listing.review_scores_rating / 20}
              </Text>
            </View>
          </Animated.View>
          <View style={styles.hostCard}>
            <Image
              source={{ uri: listing.host_picture_url }}
              width={48}
              height={48}
              style={{ borderRadius: 30, backgroundColor: Colors.yellow }}
            />
            <View>
              <Text style={styles.hostText}>{listing.host_name}</Text>
              <Text style={styles.hostText}>
                Host since {listing.host_since}
              </Text>
            </View>
          </View>
          <Text style={styles.description}>{listing.description}</Text>
        </View>
      </Animated.ScrollView>
      <Animated.View entering={SlideInUp.delay(600)} style={styles.footer}>
        <Text style={{color:"white",fontFamily:"mon-b"}}>K {listing.price} night</Text>
        <TouchableOpacity style={{}}>
          <Text>Reserve</Text>
        </TouchableOpacity>
      </Animated.View>
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
    borderColor: Colors.yellow,
    borderWidth: 0.2,
    flexDirection: "row",
    justifyContent: "space-evenly",
    padding: 8,
    borderRadius: 5,
  },
  location: {
    marginVertical: 12,
    fontFamily: "mon",
    color: "#e5e5e5",
  },
  metricText: {
    fontSize: 24,
    color: "#fff",
    fontFamily: "mon-b",
  },
  hostText: {
    color: "#e5e5e5",
    fontFamily: "mon",
  },
  hostCard: {
    flexDirection: "row",
    marginTop: 12,
    alignItems: "center",
    gap: 12,
    borderTopWidth: 0.2,
    borderBottomWidth: 0.2,
    borderColor: Colors.yellow,
    paddingVertical: 12,
  },
  footer: {
    padding: 24,
    borderTopWidth: 0.2,
    borderColor: Colors.yellow,
    alignItems: "center",
    flexDirection:"row",
    justifyContent:"space-between"
  },
  description: {
    color: "white",
    paddingTop: 12,
    fontFamily: "mon",
  },
});
