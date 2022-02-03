import { gql } from "apollo-server";

export default gql`
  type SearchUsersResult {
    ok: Boolean!
    users: [User]
  }

  type Query {
    searchUsers(keyword: String!): SearchUsersResult!
  }
`;
