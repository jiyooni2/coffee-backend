import { gql } from "apollo-server";

const typeDefs = gql`
  type User {
    id: Int!
    username: String!
    email: String!
    name: String!
    location: String!
    password: String!
    avatarURL: String
    githubUsername: String
  }

  type result {
    ok: Boolean!
    error: String
  }

  type Query {
    seeUser(username: String): User
  }

  type Mutation {
    createAccount(
      username: String!
      email: String!
      name: String!
      location: String!
      password: String!
      avatarURL: String
      githubUsername: String
    ): result
  }
`;

export default typeDefs;
