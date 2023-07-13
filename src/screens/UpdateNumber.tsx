import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { useMutation } from "react-apollo";
import { useToast } from "react-native-toast-notifications";
const UpdateNumber = () => {
  const toast = useToast();
  const FETCH_DATA = gql`
    query {
      numbers {
        id
        value
      }
    }
  `;
  const UPDATE_MUTATION = gql`
    mutation update_numbers($id: Int!, $value: Int!) {
      update_numbers(where: { id: { _eq: $id } }, _set: { value: $value }) {
        affected_rows
      }
    }
  `;

  const [state, setState] = useState({
    number: 0,
  });

  const [getId, setId] = useState();
  const [update_numbers] = useMutation(UPDATE_MUTATION);
  return (
    <View style={styles.container}>
      <Query query={FETCH_DATA} onCompleted={(data: any) => setId(data)}>
        {({ data, error, loading }: any) => {
          if (error || loading) {
            return (
              <View>
                <Text style={styles.title}>Loading ....</Text>
              </View>
            );
          }
          return (
            <View>
              <Text style={styles.title}>
                Current Number :{data?.numbers[0]?.value}
              </Text>
            </View>
          );
        }}
      </Query>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          keyboardType="numeric"
          placeholder="type a number"
          placeholderTextColor="#003f5c"
          onChangeText={(value) => setState({ number: parseInt(value) })}
        />
      </View>
      <TouchableOpacity
        onPress={(e) => {
          e.preventDefault();
          update_numbers({
            variables: { id: getId?.numbers[0]?.id, value: state.number },
          }).then(() => {
            Keyboard.dismiss();
            toast.show("Update Successful!", {
              type: "success",
              placement: "bottom",
              duration: 4000,
              animationType: "slide-in",
            });
          });
        }}
        style={styles.updateBtn}
      >
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
  btnText: {
    fontSize: 30,
    alignItems: "center",
    justifyContent: "center",
  },
});
export default UpdateNumber;
