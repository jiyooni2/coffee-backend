import { resolveGraphqlOptions } from "apollo-server-core";

const resolvers = {
  Query: {
    video: () => ({ id: 4, title: "new video" }),
  },
};

export default resolvers;
