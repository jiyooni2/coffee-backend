import client from "./../client";

export default {
  Category: {
    totalShops: async ({ id }) => {
      return client.coffeeShop.count({
        where: { categories: { some: { id } } },
      });
    },
  },
  CoffeeShop: {
    photos: ({ id }) => {
      return client.coffeeShopPhoto.findMany({
        where: { shop: { id } },
      });
    },
  },
};
