import client from "../../client";
import { protectedResolver } from "../users.utils";

export default {
  Query: {
    isFollowing: protectedResolver(
      async (_, { username }, { loggedInUser }) => {
        const user = await client.user.findUnique({
          where: { username },
          select: { followers: { where: { username: loggedInUser.username } } },
        });

        if (!user) return { ok: false, error: "user does not exist" };

        if (user.followers.length === 0) {
          return { ok: true, isFollowing: false };
        } else {
          return { ok: true, isFollowing: true };
        }
      }
    ),
  },
};
