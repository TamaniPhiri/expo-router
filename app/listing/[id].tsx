import { useLocalSearchParams } from "expo-router";
import { View, Text, StyleSheet } from "react-native";

const Page = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  console.log(id);
  return (
    <View style={styles.container}>
      <Text>Listing</Text>
    </View>
  );
};

export default Page;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"white"
  },
});
