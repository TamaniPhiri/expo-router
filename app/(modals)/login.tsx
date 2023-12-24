import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Colors from "../../constants/Colors";
import { Ionicons } from "@expo/vector-icons";

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
        <Text style={styles.regularText}>Or</Text>
        <View style={styles.seperator}></View>
      </View>
      <TouchableOpacity style={styles.outlineButton}>
        <Ionicons name="md-logo-google" />
        <Text style={styles.buttonText}>Continue with Google</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Page;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    flexDirection: "column",
    gap: 24,
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
    fontSize: 16,
    fontFamily: "mon-sb",
  },
  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  seperator: {
    borderBottomWidth: 0.5,
    flex: 1,
    borderColor: Colors.mid,
  },
  regularText: {
    color: "white",
    fontFamily: "mon",
  },
  outlineButton: {
    borderColor: Colors.mid,
    borderWidth: 1,
    padding: 14,
    borderRadius: 6,
    color: "white",
    fontFamily: "mon",
    flexDirection: "row",
    alignItems: "center",
    justifyContent:"center"
  },
});
