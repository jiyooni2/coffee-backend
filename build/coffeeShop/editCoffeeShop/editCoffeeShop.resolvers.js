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

var _coffeeShop = _interopRequireDefault(require("../coffeeShop.resolvers"));

var _default = {
  Mutation: {
    editCoffeeShop: (0, _users.protectedResolver)( /*#__PURE__*/function () {
      var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_, _ref, _ref2) {
        var id, name, latitude, longitude, url, category, loggedInUser, coffeeShop, categoryObj, categories, photoObj, photos, updatedCoffeeShop;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                id = _ref.id, name = _ref.name, latitude = _ref.latitude, longitude = _ref.longitude, url = _ref.url, category = _ref.category;
                loggedInUser = _ref2.loggedInUser;
                _context.next = 4;
                return _client["default"].coffeeShop.findUnique({
                  where: {
                    id: id
                  }
                });

              case 4:
                coffeeShop = _context.sent;

                if (!(!coffeeShop && coffeeShop.userId !== loggedInUser.id)) {
                  _context.next = 7;
                  break;
                }

                return _context.abrupt("return", {
                  ok: false,
                  error: "coffeeShop not found"
                });

              case 7:
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

                _context.next = 11;
                return _client["default"].coffeeShop.update({
                  where: {
                    id: id
                  },
                  data: {
                    name: name,
                    latitude: latitude,
                    longitude: longitude,
                    categories: categoryObj ? {
                      disconnect: coffeeShop.categories,
                      connectOrCreate: categoryObj
                    } : undefined,
                    photos: photoObj ? {
                      disconnect: coffeeShop.photos,
                      connectOrCreate: photoObj
                    } : undefined
                  }
                });

              case 11:
                updatedCoffeeShop = _context.sent;
                return _context.abrupt("return", {
                  ok: true
                });

              case 13:
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