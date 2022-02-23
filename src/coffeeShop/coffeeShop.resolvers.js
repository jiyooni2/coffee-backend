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
    categories: ({ id }) => {
      return client.category.findMany({
        where: { shops: { some: { id } } },
      });
    },
    user: ({ userId }) => {
      return client.user.findUnique({
        where: { id: userId },
      });
    },
  },
};
