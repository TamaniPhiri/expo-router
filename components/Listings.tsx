import { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
interface Props {
  listings: any;
  category: string;
}

const Listings = ({ listings, category }: Props) => {
  useEffect(() => {
    console.log("reload listings",listings.length);
  }, [category]);
  return (
    <View style={styles.container}>
      <Text>Listings</Text>
    </View>
  );
};

export default Listings;

const styles = StyleSheet.create({
  container: {
    marginTop: 135,
  },
});
