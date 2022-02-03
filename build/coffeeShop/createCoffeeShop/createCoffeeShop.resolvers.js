"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _client = _interopRequireDefault(require("../../client"));

var _users = require("../../users/users.utils");

var _default = {
  Mutation: {
    createCoffeeShop: (0, _users.protectedResolver)( /*#__PURE__*/function () {
      var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_, _ref, _ref2) {
        var name, latitude, longitude, category, url, loggedInUser, categoryObj, categories, photoObj, photos, shop;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                name = _ref.name, latitude = _ref.latitude, longitude = _ref.longitude, category = _ref.category, url = _ref.url;
                loggedInUser = _ref2.loggedInUser;

                if (category) {
                  categories = category.split(",").map(function (item) {
                    return item.trim();
                  });
                  categoryObj = categories.map(function (category) {
                    return {
                      where: {
                        name: category
                      },
                      create: {
                        name: category
                      }
                    };
                  });
                }

                if (url) {
                  photos = url.split(",").map(function (item) {
                    return item.trim();
                  });
                  photoObj = photos.map(function (photo) {
                    return {
                      where: {
                        url: photo
                      },
                      create: {
                        url: photo
                      }
                    };
                  });
                }

                _context.next = 6;
                return _client["default"].coffeeShop.create({
                  data: {
                    name: name,
                    latitude: latitude,
                    longitude: longitude,
                    user: {
                      connect: {
                        id: loggedInUser.id
                      }
                    },
                    categories: categoryObj ? {
                      connectOrCreate: categoryObj
                    } : undefined,
                    photos: photoObj ? {
                      connectOrCreate: photoObj
                    } : undefined
                  }
                });

              case 6:
                shop = _context.sent;
                return _context.abrupt("return", shop);

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x, _x2, _x3) {
        return _ref3.apply(this, arguments);
      };
    }())
  }
};
exports["default"] = _default;