import { gql } from "apollo-server-express";

export default gql`
  type IsFollowingResult {
    ok: Boolean!
    isFollowing: Boolean
    error: String
  }

  type Query {
    isFollowing(username: String!): IsFollowingResult!
  }
`;
