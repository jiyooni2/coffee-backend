require("dotenv").config();
import { ApolloServer } from "apollo-server";
import resolvers from "./videos/videos.resolvers";
import typeDefs from "./videos/videos.typeDefs";

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const PORT = process.env.PORT;

server
  .listen()
  .then(() => console.log(`server is listening on https://localhost:${PORT}/`));
