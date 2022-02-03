"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _client = _interopRequireDefault(require("../client"));

var _default = {
  User: {
    totalFollowing: function totalFollowing(_ref) {
      var id = _ref.id;
      return _client["default"].user.count({
        where: {
          followers: {
            some: {
              id: id
            }
          }
        }
      });
    },
    totalFollowers: function totalFollowers(_ref2) {
      var id = _ref2.id;
      return _client["default"].user.count({
        where: {
          following: {
            some: {
              id: id
            }
          }
        }
      });
    }
  }
};
exports["default"] = _default;