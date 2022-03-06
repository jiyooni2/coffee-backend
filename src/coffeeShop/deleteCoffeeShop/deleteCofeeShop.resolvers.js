import { protectedResolver } from "../../users/users.utils";
import client from "./../../client";

export default {
  Mutation: {
    deleteCoffeeShop: protectedResolver(async (_, { id }, { loggedInUser }) => {
      const coffeeShop = await client.coffeeShop.findUnique({
        where: {
          id,
        },
        select: { id: true, user: true },
      });
      console.log(coffeeShop.user.id);
      console.log(loggedInUser);

      if (!coffeeShop) {
        return { ok: false, error: "Photo not found" };
      } else if (coffeeShop.user.id !== loggedInUser.id) {
        return { ok: false, error: "Not authorized" };
      } else {
        await client.coffeeShopPhoto.deleteMany({
          where: { coffeeShopId: id },
        });

        await client.coffeeShop.delete({ where: { id } });
      }

      return { ok: true };
    }),
  },
};
