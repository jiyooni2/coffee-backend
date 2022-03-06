"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _client = _interopRequireDefault(require("./../../client"));

var _default = {
  Query: {
    seeCategories: function seeCategories(_, _ref) {
      var offset = _ref.offset;
      return _client["default"].category.findMany({
        take: 10,
        skip: offset
      });
    }
  }
};
exports["default"] = _default;