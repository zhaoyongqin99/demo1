import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";
import {
    makeExecutableSchema,
    addMockFunctionsToSchema
} from 'graphql-tools';
import { mockNetworkInterfaceWithSchema } from 'apollo-test-utils';
import { typeDefs } from './schema';
import './css/index.css'
import App from './App';
const schema = makeExecutableSchema({ typeDefs });
addMockFunctionsToSchema({ schema });
const mockNetworkInterface = mockNetworkInterfaceWithSchema({ schema });
const client = new ApolloClient({
    networkInterface: mockNetworkInterface,
  });
ReactDom.render(<Router>
    <Switch>
        <ApolloProvider client={client}>
            <Route path="/" component={App} ></Route>
        </ApolloProvider>
    </Switch>
</Router>, document.getElementById("root"))
