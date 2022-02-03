"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _bcrypt = _interopRequireDefault(require("bcrypt"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _client = _interopRequireDefault(require("../../client"));

var _default = {
  Mutation: {
    login: function () {
      var _login = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_, _ref) {
        var username, password, user, passwordOk, token;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                username = _ref.username, password = _ref.password;
                _context.prev = 1;
                _context.next = 4;
                return _client["default"].user.findFirst({
                  where: {
                    username: username
                  }
                });

              case 4:
                user = _context.sent;

                if (user) {
                  _context.next = 7;
                  break;
                }

                return _context.abrupt("return", {
                  ok: false,
                  error: "User not found."
                });

              case 7:
                _context.next = 9;
                return _bcrypt["default"].compare(password, user.password);

              case 9:
                passwordOk = _context.sent;

                if (passwordOk) {
                  _context.next = 12;
                  break;
                }

                return _context.abrupt("return", {
                  ok: false,
                  error: "password check"
                });

              case 12:
                token = _jsonwebtoken["default"].sign({
                  id: user.id
                }, process.env.SECRET_KEY);
                return _context.abrupt("return", {
                  ok: true,
                  token: token
                });

              case 16:
                _context.prev = 16;
                _context.t0 = _context["catch"](1);
                return _context.abrupt("return", {
                  ok: false,
                  error: "error...."
                });

              case 19:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[1, 16]]);
      }));

      function login(_x, _x2) {
        return _login.apply(this, arguments);
      }

      return login;
    }()
  }
};
exports["default"] = _default;