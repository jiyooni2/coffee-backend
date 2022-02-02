import client from "../../client";
import { protectedResolver } from "../../users/users.utils";
import coffeeShopResolvers from "../coffeeShop.resolvers";

export default {
  Mutation: {
    editCoffeeShop: protectedResolver(
      async (
        _,
        { id, name, latitude, longitude, url, category },
        { loggedInUser }
      ) => {
        const coffeeShop = await client.coffeeShop.findUnique({
          where: { id },
        });
        if (!coffeeShop && coffeeShop.userId !== loggedInUser.id) {
          return { ok: false, error: "coffeeShop not found" };
        }

        let categoryObj;
        if (category) {
          const categories = category.split(",").map((item) => item.trim());
          categoryObj = categories.map((category) => ({
            where: { name: category },
            create: { name: category },
          }));
        }

        let photoObj;
        if (url) {
          const photos = url.split(",").map((item) => item.trim());
          photoObj = photos.map((photo) => ({
            where: { url: photo },
            create: { url: photo },
          }));
        }

        const updatedCoffeeShop = await client.coffeeShop.update({
          where: { id },
          data: {
            name,
            latitude,
            longitude,
            ...(categoryObj && {
              categories: {
                disconnect: coffeeShop.categories,
                connectOrCreate: categoryObj,
              },
            }),
            ...(photoObj && {
              photos: {
                disconnect: coffeeShop.photos,
                connectOrCreate: photoObj,
              },
            }),
          },
        });

        return { ok: true };
      }
    ),
  },
};
