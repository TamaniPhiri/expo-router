import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Colors from "../../constants/Colors";

const Page = () => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor={Colors.mid}
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
      <View style={styles.dividerContainer}>
        <View style={styles.seperator}></View>
        <Text style={{ color: "white" }}>Or</Text>
        <View style={styles.seperator}></View>
      </View>
    </View>
  );
};

export default Page;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    flexDirection: "column",
    gap: 12,
  },
  input: {
    borderColor: Colors.mid,
    borderWidth: 1,
    padding: 8,
    borderRadius: 6,
    color: "white",
    fontFamily: "mon",
  },
  button: {
    backgroundColor: Colors.orange,
    paddingVertical: 14,
    borderRadius: 6,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 18,
    fontFamily: "mon-sb",
  },
  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  seperator: { borderBottomWidth: 1 },
});
