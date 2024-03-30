import {Stack} from 'expo-router';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

const client = new ApolloClient({
    uri: 'https://novaubirata.stepzen.net/api/lopsided-quoll/__graphql',
    cache: new InMemoryCache(),
    headers: {
        Authorization: "apikey novaubirata::stepzen.io+1000::5993cc83235fd05af78653c86fa266ce2decf23ca6c323881683e4f0e547ccc5"
    }
});

const Rootlayout = () => {
    return(
    <ApolloProvider client={client}>
        <Stack/>
    </ApolloProvider> 
    );
}

export default Rootlayout;