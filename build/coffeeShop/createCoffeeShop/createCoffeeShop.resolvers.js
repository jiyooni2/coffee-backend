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

var _shared = require("../../shared/shared.utils");

var _default = {
  Mutation: {
    createCoffeeShop: (0, _users.protectedResolver)( /*#__PURE__*/function () {
      var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_, _ref, _ref2) {
        var name, latitude, longitude, category, photo, loggedInUser, categoryObj, categories, url, shop;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                name = _ref.name, latitude = _ref.latitude, longitude = _ref.longitude, category = _ref.category, photo = _ref.photo;
                loggedInUser = _ref2.loggedInUser;
                console.log(name, latitude, longitude, category, photo);

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

                if (!photo) {
                  _context.next = 9;
                  break;
                }

                _context.next = 7;
                return (0, _shared.uploadToS3)(photo, loggedInUser.id, "uploads");

              case 7:
                url = _context.sent;
                console.log(url);

              case 9:
                _context.next = 11;
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
                    //생성과 동시에 connect
                    photos: {
                      create: {
                        url: url
                      }
                    }
                  }
                });

              case 11:
                shop = _context.sent;
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