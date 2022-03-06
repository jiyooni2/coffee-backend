"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _client = _interopRequireDefault(require("./../../client"));

var _default = {
  Query: {
    searchCoffeeShops: function searchCoffeeShops(_, _ref) {
      var keyword = _ref.keyword;
      return _client["default"].coffeeShop.findMany({
        where: {
          name: {
            contains: "".concat(keyword)
          }
        }
      });
    }
  }
};
exports["default"] = _default;