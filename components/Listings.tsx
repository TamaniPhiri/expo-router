import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ListRenderItem,
  TouchableOpacity,
  Image,
} from "react-native";
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

  const renderRow: ListRenderItem<AirbnbListing> = ({ item }) => (
    <Link href={`/listing/${item.id}`} asChild>
      <TouchableOpacity style={styles.card}>
        <View>
          <Image source={{ uri: item.medium_url }} style={styles.cardImage} />
          <TouchableOpacity
            style={{ position: "absolute", right: 20, top: 20, zIndex: 1 }}
          >
            <Ionicons name="heart-outline" size={24} color={"white"} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: 6,
            gap: 12,
          }}
        >
          <Text style={{ color: "white", fontFamily: "mon" }}>{item.name}</Text>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 6 }}>
            <Ionicons name="star" color={"white"} />
            <Text style={{ color: "white" }}>
              {item.review_scores_rating / 20}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </Link>
  );
  return (
    <View style={styles.container}>
      <FlatList
        ref={listRef}
        data={loading ? [] : listings}
        renderItem={renderRow}
      />
    </View>
  );
};

export default Listings;

const styles = StyleSheet.create({
  container: {
    marginTop: 135,
  },
  cardImage: {
    width: "100%",
    height: 300,
    borderRadius: 10,
  },
  card: {
    paddingHorizontal: 16,
    paddingTop: 18,
  },
});
