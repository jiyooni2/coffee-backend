import client from "./../../client";

export default {
  Query: {
    //can search without login
    searchUsers: async (_, { keyword }) => {
      const users = await client.user.findMany({
        where: { username: { contains: `${keyword}` } },
      });

      return { ok: true, users };
    },
  },
};
