"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _client = _interopRequireDefault(require("../../client"));

var _default = {
  Query: {
    seeCategory: function seeCategory(_, _ref) {
      var name = _ref.name,
          page = _ref.page;
      return _client["default"].category.findUnique({
        where: {
          name: name
        }
      }).shops({
        take: 5,
        skip: (page - 1) * 5
      });
    }
  }
};
exports["default"] = _default;