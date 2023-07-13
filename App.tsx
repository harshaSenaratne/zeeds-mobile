import React from 'react';
import './src/config/firebase';
import { ApolloProvider } from 'react-apollo';
import RootNavigation from './src/navigation';
import { ToastProvider } from 'react-native-toast-notifications';
import createApolloClient from './apollo'
export default function App() {
  return (
    <ApolloProvider client={createApolloClient('')}>
      <ToastProvider>
    <RootNavigation/>
    </ToastProvider>
    </ApolloProvider>
  );
}
