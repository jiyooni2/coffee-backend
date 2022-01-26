import client from "../client";
import bcrypt from "bcrypt";

const resolvers = {
  Mutation: {
    createAccount: async (
      _,
      { username, email, name, location, password, avatarURL, githubUsername }
    ) => {
      const existingEmail = await client.user.findFirst({
        where: { email },
      });
      const existingUsername = await client.user.findFirst({
        where: { username },
      });

      if (existingEmail) return { ok: false, error: "existing Email" };
      else if (existingUsername)
        return { ok: false, error: "existing Username" };
      else if (existingEmail && existingUsername)
        return { ok: false, error: "existing email and existing username" };

      await client.user.create({
        data: {
          username,
          email,
          name,
          location,
          password: await bcrypt.hash(password, 5),
          avatarURL: avatarURL ? avatarURL : null,
          githubUsername: githubUsername ? githubUsername : null,
        },
      });

      return { ok: true };
    },
  },
};

export default resolvers;
