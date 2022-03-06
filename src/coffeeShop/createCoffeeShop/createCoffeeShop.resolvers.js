import client from "../../client";
import { protectedResolver } from "../../users/users.utils";
import { uploadToS3 } from "../../shared/shared.utils";

export default {
  Mutation: {
    createCoffeeShop: protectedResolver(
      async (
        _,
        { name, latitude, longitude, category, photo },
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

        let url;
        if (photo) {
          url = await uploadToS3(photo, loggedInUser.id, "uploads");
          console.log(url);
        }

        const shop = await client.coffeeShop.create({
          data: {
            name,
            latitude,
            longitude,
            user: { connect: { id: loggedInUser.id } },
            categories: categoryObj
              ? {
                  connectOrCreate: categoryObj,
                }
              : undefined,

            //생성과 동시에 connect
            photos: {
              create: {
                url,
              },
            },
          },
        });

        return { ok: true };
      }
    ),
  },
};
