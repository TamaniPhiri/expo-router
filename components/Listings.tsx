import { useEffect, useRef, useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
interface Props {
  listings: any;
  category: string;
}

const Listings = ({ listings, category }: Props) => {
  const [loading, setLoading] = useState<boolean>(false);
  const listRef = useRef<FlatList>(null);
  useEffect(() => {
    console.log("reload listings", listings.length);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 300);
  }, [category]);
  return (
    <View style={styles.container}>
      <FlatList data={loading ? [] : listings} />
    </View>
  );
};

export default Listings;

const styles = StyleSheet.create({
  container: {
    marginTop: 135,
  },
});
