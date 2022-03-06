import client from "../../client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export default {
  Mutation: {
    createAccount: async (_, { username, email, name, location, password }) => {
      try {
        const existingUser = await client.user.findFirst({
          where: {
            OR: [{ username }, { email }],
          },
        });

        if (existingUser) {
          throw new Error("This username or email is already taken.");
        }

        const user = await client.user.create({
          data: {
            avatarUrl:
              "https://nomadcoffee-uploader.s3.ap-northeast-2.amazonaws.com/profile.png",
            username,
            email,
            name,
            location,
            password: await bcrypt.hash(password, 5),
          },
        });
        return { ok: true };
      } catch (error) {
        return error;
      }
    },
  },
};
