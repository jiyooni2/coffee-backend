require("dotenv").config();
import { ApolloServer } from "apollo-server-express";
import express from "express";
import schema from "./schema";
import logger from "morgan";
import { typeDefs, resolvers } from "./schema";
import { getUser } from "./users/users.utils";
import { GraphQlUpload, graphqlUploadExpress } from "graphql-upload";

const PORT = process.env.PORT;

const apollo = new ApolloServer({
  typeDefs,
  resolvers,
  //모든 resolver에서 user auth X, context로 한번만
  context: async ({ req }) => {
    return {
      loggedInUser: await getUser(req.headers.token),
    };
  },
});

const app = express();
app.use(logger("dev"));
app.use("static", express.static("uploads"));
app.use(graphqlUploadExpress());

apollo.start().then(() => {
  apollo.applyMiddleware({ app, path: "/graphql" });
  //attach Apollo server to an Express server
  app.listen({ port: PORT }, () =>
    console.log(`server is listening on https://localhost:${PORT}/`)
  );
});
