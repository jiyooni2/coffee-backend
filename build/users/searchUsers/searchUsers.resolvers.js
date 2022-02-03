"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _client = _interopRequireDefault(require("./../../client"));

var _default = {
  Query: {
    //can search without login
    searchUsers: function () {
      var _searchUsers = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_, _ref) {
        var keyword, users;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                keyword = _ref.keyword;
                _context.next = 3;
                return _client["default"].user.findMany({
                  where: {
                    username: {
                      contains: "".concat(keyword)
                    }
                  }
                });

              case 3:
                users = _context.sent;
                return _context.abrupt("return", {
                  ok: true,
                  users: users
                });

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function searchUsers(_x, _x2) {
        return _searchUsers.apply(this, arguments);
      }

      return searchUsers;
    }()
  }
};
exports["default"] = _default;