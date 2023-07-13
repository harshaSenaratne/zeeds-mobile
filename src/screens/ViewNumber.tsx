import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { getAuth, signOut } from "firebase/auth";
import { Query } from "react-apollo";
import gql from "graphql-tag";

const auth = getAuth();

const ViewNumber = () => {
  const FETCH_DATA = gql`
    query {
      numbers {
        id
        value
      }
    }
  `;

  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity onPress={() => signOut(auth)}>
          <Text style={styles.title}> Sign out</Text>
        </TouchableOpacity>
      </View>
      <Query query={FETCH_DATA}>
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
