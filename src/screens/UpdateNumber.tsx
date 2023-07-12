import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { getAuth } from "firebase/auth";
import createApolloClient from '../../apollo'
import gql from "graphql-tag";
import {useMutation} from 'react-apollo';

const UpdateNumber = () => {

  const UPDATE_MUTATION = gql`
  mutation update_numbers($id: String!, $value: String!) {
    update_numbers(
    where:{id:{_eq:1}}, _set:{value:"200"}
  ){
    affected_rows
  }
  }
`;

const auth = getAuth();
const getToken = async () => {
  await auth.currentUser?.getIdToken().then((value)=>{
    console.log('HHHHHH',value)
  })  
}

// const onUpdate = async ()  => {
//   const numericRegex = /^([0-9]{1,100})+$/
//   if(numericRegex.test(state.number)){
//     const UPDATE_NUMBER = gql` mutation update_numbers(
//       where:{id:{_eq:1}}, _set:{value:${state.number}}
//     )`
//    if(loading || error){
//     console.info("Loading......");
//    }
//    console.info('Successful', data)
//   }

//   };
  const [state, setState] = useState({
    number: "",
  });
  const [update_numbers, { data, loading, error }] = useMutation(UPDATE_MUTATION,{
    variables: { id: 1, value: 23445 },
    onCompleted:(data) => {
      console.info(data);
    }
  }
  );
  
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
      <TouchableOpacity onPress={update_numbers} style={styles.updateBtn}>
        <Text style={styles.btnText}>Update </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={getToken} style={styles.updateBtn}>
        <Text style={styles.btnText}>GET TOKEN </Text>
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
