import client from "../../client";
export default {
  Query: {
    seeCoffeeShops: (_, { page }) => {
      return client.coffeeShop.findMany({
        take: 5,
        skip: (page - 1) * 5,
      });
    },
  },
};
