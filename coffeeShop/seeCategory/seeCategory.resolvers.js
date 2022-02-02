import client from "../../client";

export default {
  Query: {
    seeCategory: (_, { name, page }) => {
      return client.category
        .findUnique({
          where: { name },
        })
        .shops({ take: 5, skip: (page - 1) * 5 });
    },
  },
};
