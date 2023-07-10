import React from "react";
import {
  StyleSheet,
  Text,
  View,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { getAuth, signOut } from "firebase/auth";

const auth = getAuth();

const ViewNumber = () => {
  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity  onPress={() => signOut(auth)}>
      <Text style={styles.title}> Sign out</Text>
      </TouchableOpacity>
      </View>
      <Text style={styles.title}> The Number Is : 1</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4FD3DA",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 30,
    color: "#fb5b5a",
    marginBottom: 40,
  },
});
export default ViewNumber;
