import { gql } from "apollo-server-express";

export default gql`
  type EditCoffeeShopResult {
    ok: Boolean!
    error: String
  }

  type Mutation {
    editCoffeeShop(
      id: Int!
      name: String
      latitude: String
      longitude: String
      url: String
      category: String
    ): EditCoffeeShopResult!
  }
`;
