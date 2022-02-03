import client from "../../client";
import { protectedResolver } from "../users.utils";

export default {
  Mutation: {
    followUser: protectedResolver(async (_, { username }, { loggedInUser }) => {
      const user = await client.user.findUnique({
        where: { username },
        select: { id: true },
      });
      if (!user) return { ok: false, error: "user does not exist" };

      await client.user.update({
        where: { id: loggedInUser.id },
        data: {
          following: {
            connect: {
              username,
            },
          },
        },
      });

      return { ok: true };
    }),
  },
};
