import { useLocalSearchParams } from "expo-router";
import { View, Text } from "react-native";

const Page = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  console.log(id);
  return (
    <View>
      <Text>Listing</Text>
    </View>
  );
};

export default Page;
