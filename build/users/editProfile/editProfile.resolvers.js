"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _bcrypt = _interopRequireDefault(require("bcrypt"));

var _client = _interopRequireDefault(require("../../client"));

var _users = require("../users.utils");

var _fs = require("fs");

var _graphqlUpload = require("graphql-upload");

var _shared = require("../../shared/shared.utils");

var _default = {
  Upload: _graphqlUpload.GraphQLUpload,
  Mutation: {
    editProfile: (0, _users.protectedResolver)( /*#__PURE__*/function () {
      var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_, _ref, _ref2) {
        var username, email, name, location, newPassword, avatar, githubUsername, loggedInUser, avatarUrl, uglyPassword, updatedUser;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                username = _ref.username, email = _ref.email, name = _ref.name, location = _ref.location, newPassword = _ref.password, avatar = _ref.avatarUrl, githubUsername = _ref.githubUsername;
                loggedInUser = _ref2.loggedInUser;
                avatarUrl = null;

                if (!avatar) {
                  _context.next = 7;
                  break;
                }

                _context.next = 6;
                return (0, _shared.uploadToS3)(avatar, loggedInUser.id, "avatars");

              case 6:
                avatarUrl = _context.sent;

              case 7:
                uglyPassword = null;

                if (!newPassword) {
                  _context.next = 12;
                  break;
                }

                _context.next = 11;
                return _bcrypt["default"].hash(newPassword, 10);

              case 11:
                uglyPassword = _context.sent;

              case 12:
                _context.next = 14;
                return _client["default"].user.update({
                  where: {
                    id: loggedInUser.id
                  },
                  data: {
                    username: username,
                    email: email,
                    name: name,
                    location: location,
                    password: uglyPassword ? uglyPassword : undefined,
                    avatarUrl: avatarUrl ? avatarUrl : undefined,
                    githubUsername: githubUsername
                  }
                });

              case 14:
                updatedUser = _context.sent;

                if (!updatedUser.id) {
                  _context.next = 19;
                  break;
                }

                return _context.abrupt("return", {
                  ok: true
                });

              case 19:
                return _context.abrupt("return", {
                  ok: false,
                  error: "Could not update profile."
                });

              case 20:
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