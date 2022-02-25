import { gql } from "apollo-server";

export default gql`
  type User {
    id: String!
    username: String!
    email: String!
    name: String!
    location: String!
    password: String!
    avatarUrl: String
    githubUsername: String
    followers: [User]
    following: [User]
    totalFollowing: Int!
    totalFollowers: Int!
  }
`;
