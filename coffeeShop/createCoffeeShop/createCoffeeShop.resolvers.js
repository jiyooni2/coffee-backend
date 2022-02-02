import client from "../../client";
import { protectedResolver } from "../../users/users.utils";

export default {
  Mutation: {
    createCoffeeShop: protectedResolver(
      async (
        _,
        { name, latitude, longitude, category, url },
        { loggedInUser }
      ) => {
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

        const shop = await client.coffeeShop.create({
          data: {
            name,
            latitude,
            longitude,
            user: { connect: { id: loggedInUser.id } },
            ...(categoryObj && {
              categories: {
                connectOrCreate: categoryObj,
              },
            }),
            ...(photoObj && {
              photos: {
                connectOrCreate: photoObj,
              },
            }),
          },
        });

        return shop;
      }
    ),
  },
};
