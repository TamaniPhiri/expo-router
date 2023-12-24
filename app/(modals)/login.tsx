import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Colors from "../../constants/Colors";
import {} from "react-native-gesture-handler";

const Page = () => {
  return (
    <View style={{ paddingHorizontal: 10 }}>
      <TextInput style={styles.input} />
      <TouchableOpacity style={styles.button}>
        <Text style={{ color: "white", textAlign: "center" }}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Page;

const styles = StyleSheet.create({
  input: {
    borderColor: Colors.mid,
    borderWidth: 1,
    padding: 8,
    borderRadius: 6,
    color: "white",
  },
  button: {
    backgroundColor: Colors.orange,
    paddingVertical: 14,
    borderRadius: 6,
  },
});
