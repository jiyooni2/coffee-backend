import client from "./../../client";

export default {
  Query: {
    seeCategories: (_, { page }) => {
      return client.category.findMany({
        take: 5,
        skip: (page - 1) * 5,
      });
    },
  },
};
