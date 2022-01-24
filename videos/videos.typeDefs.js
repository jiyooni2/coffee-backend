import { gql } from "apollo-server";

const typeDefs = gql`
  type Video {
    id: Int!
    title: String!
  }

  type Query {
    video: Video
  }
`;

export default typeDefs;
