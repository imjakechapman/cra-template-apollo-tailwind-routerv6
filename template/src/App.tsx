import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

// Apollo Client
const client = new ApolloClient({
  uri: process.env.REACT_GRAPHQL_ENDPOINT
});

/**
 * App
 */
const App: React.FC<any> = () => {
  return (
    <ApolloProvider client={client}>
      <div className="flex justify-center items-center w-full min-h-screen bg-gray-300">
        <div className="flex flex-col justify-center items-center rounded select-none bg-white shadow-md px-10 py-6 hover:shadow-xl transition duration-150">
          <p className="text-lg font-semibold text-gray-700">Create React App</p>
          <p className="text-gray-500 mt-2">TypeScript + Apollo + Tailwind + ReactRouter</p>
        </div>
      </div>
    </ApolloProvider>
  );
};

export { App };
