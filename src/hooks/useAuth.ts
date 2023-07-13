import React, { useEffect } from "react";
import { getAuth, onAuthStateChanged, User } from "firebase/auth";
import createApolloClient from '../../apollo'
import AsyncStorage from '@react-native-async-storage/async-storage';

const auth = getAuth();

export function useAuth() {
  const [user, setUser] = React.useState<User>();

  const getIdToken = async () => {
    return await auth.currentUser?.getIdToken(); 
  }
  const storeData = async (value:string) => {
    try {
      await AsyncStorage.setItem('token', value);
      return value;
    } catch (e) {
      console.log('Error ',e)
    }
  };

  useEffect(() => {
    const unsubscribeFromAuthStateChanged = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        getIdToken().then(async(token:any)=>{
          storeData(token).then((value)=>{
            createApolloClient(value)
          })
        });
      } else {
        // User is signed out
        storeData('')
        setUser(undefined);

      }
    });

    return unsubscribeFromAuthStateChanged;
  }, []);

  return {
    user,
  };
}
