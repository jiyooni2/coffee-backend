import client from "../../client";
export default {
  Query: {
    seeCoffeeShops: (_, { offset }) => {
      return client.coffeeShop.findMany({
        take: 2,
        skip: offset,
      });
    },
  },
};
