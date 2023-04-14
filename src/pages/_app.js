import { ApolloProvider } from "@apollo/client";
import "../styles/Home.module.css";
import "../styles/globals.css";
import client from "@/lib/graphql";

export default function App({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />{" "}
    </ApolloProvider>
  );
}
