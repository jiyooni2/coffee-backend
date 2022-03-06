"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _client = _interopRequireDefault(require("./../client"));

var _default = {
  Category: {
    totalShops: function () {
      var _totalShops = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_ref) {
        var id;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                id = _ref.id;
                return _context.abrupt("return", _client["default"].coffeeShop.count({
                  where: {
                    categories: {
                      some: {
                        id: id
                      }
                    }
                  }
                }));

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function totalShops(_x) {
        return _totalShops.apply(this, arguments);
      }

      return totalShops;
    }()
  },
  CoffeeShop: {
    photos: function photos(_ref2) {
      var id = _ref2.id;
      return _client["default"].coffeeShopPhoto.findMany({
        where: {
          shop: {
            id: id
          }
        }
      });
    },
    categories: function categories(_ref3) {
      var id = _ref3.id;
      return _client["default"].category.findMany({
        where: {
          shops: {
            some: {
              id: id
            }
          }
        }
      });
    },
    user: function user(_ref4) {
      var userId = _ref4.userId;
      return _client["default"].user.findUnique({
        where: {
          id: userId
        }
      });
    }
  }
};
exports["default"] = _default;