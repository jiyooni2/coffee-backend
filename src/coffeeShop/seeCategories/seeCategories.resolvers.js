import client from "./../../client";

export default {
  Query: {
    seeCategories: (_, { offset }) => {
      return client.category.findMany({
        take: 10,
        skip: offset,
      });
    },
  },
};
