import { View, Text, TextInput, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";
import {} from "react-native-gesture-handler";

const Page = () => {
  return (
    <View className="bg3" style={{ paddingHorizontal: 10 }}>
      <TextInput style={styles.input} />
    </View>
  );
};

export default Page;

const styles = StyleSheet.create({
  input: {
    borderColor: Colors.mid,
    borderWidth: 1,
    padding:8,
    borderRadius:6,
    color:"white"
  },
});
