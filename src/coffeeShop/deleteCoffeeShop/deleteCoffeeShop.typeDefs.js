import { gql } from "apollo-server";

export default gql`
  type DeleteCoffeeShopResult {
    ok: Boolean!
    error: String
  }
  type Mutation {
    deleteCoffeeShop(id: Int!): DeleteCoffeeShopResult!
  }
`;
