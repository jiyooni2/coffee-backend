import client from "../../client";
export default {
  Query: {
    seeCoffeeShop: (_, { id }) => {
      return client.coffeeShop.findUnique({
        where: { id },
      });
    },
  },
};
