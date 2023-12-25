import { View, Text, StyleSheet } from "react-native";
import MapView from "react-native-maps";
import listingsDataGeo from "../assets/data/airbnb-listings.geo.json";
import AirbnbGeoListing from "../types/interface";

interface Props {
  listings: AirbnbGeoListing;
}
const ListingsMap = ({ listings }: Props) => {
  console.log(listings.geolocation);

  return (
    <View style={styles.container}>
      <MapView style={styles.map} />
    </View>
  );
};

export default ListingsMap;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    height: "100%",
    width: "100%",
  },
});
