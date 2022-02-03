"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _client = _interopRequireDefault(require("../../client"));

var _bcrypt = _interopRequireDefault(require("bcrypt"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _default = {
  Mutation: {
    createAccount: function () {
      var _createAccount = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_, _ref) {
        var username, email, name, location, password, existingUser, user;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                username = _ref.username, email = _ref.email, name = _ref.name, location = _ref.location, password = _ref.password;
                _context.prev = 1;
                _context.next = 4;
                return _client["default"].user.findFirst({
                  where: {
                    OR: [{
                      username: username
                    }, {
                      email: email
                    }]
                  }
                });

              case 4:
                existingUser = _context.sent;

                if (!existingUser) {
                  _context.next = 7;
                  break;
                }

                throw new Error("This username or email is already taken.");

              case 7:
                _context.t0 = _client["default"].user;
                _context.t1 = username;
                _context.t2 = email;
                _context.t3 = name;
                _context.t4 = location;
                _context.next = 14;
                return _bcrypt["default"].hash(password, 5);

              case 14:
                _context.t5 = _context.sent;
                _context.t6 = {
                  username: _context.t1,
                  email: _context.t2,
                  name: _context.t3,
                  location: _context.t4,
                  password: _context.t5
                };
                _context.t7 = {
                  data: _context.t6
                };
                _context.next = 19;
                return _context.t0.create.call(_context.t0, _context.t7);

              case 19:
                user = _context.sent;
                return _context.abrupt("return", {
                  ok: true
                });

              case 23:
                _context.prev = 23;
                _context.t8 = _context["catch"](1);
                return _context.abrupt("return", _context.t8);

              case 26:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[1, 23]]);
      }));

      function createAccount(_x, _x2) {
        return _createAccount.apply(this, arguments);
      }

      return createAccount;
    }()
  }
};
exports["default"] = _default;