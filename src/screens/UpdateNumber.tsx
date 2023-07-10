import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
const UpdateNumber = () => {

  const onUpdate = () => {
    // Do something about signup operation
  };
  const [state, setState] = useState({
    number: "",
  });
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Current Number : 1</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          keyboardType='numeric'
          placeholder="type a number"
          placeholderTextColor="#003f5c"
          onChangeText={(value) => setState({ number: value })}
        />
      </View>
      <TouchableOpacity onPress={onUpdate} style={styles.updateBtn}>
        <Text style={styles.btnText}>Update </Text>
      </TouchableOpacity>

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
  inputView: {
    width: "80%",
    backgroundColor: "#3AB4BA",
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20,
  },
  inputText: {
    height: 50,
    color: "white",
  },
  updateBtn: {
    width: "80%",
    backgroundColor: "#fb5b5a",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10,
  },
  btnText:{
    fontSize: 30,
    alignItems: "center",
    justifyContent: "center",
  }
});
export default UpdateNumber;
