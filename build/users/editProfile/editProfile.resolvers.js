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

var _default = {
  Upload: _graphqlUpload.GraphQLUpload,
  Mutation: {
    editProfile: (0, _users.protectedResolver)( /*#__PURE__*/function () {
      var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(_, _ref, _ref2) {
        var username, email, name, location, newPassword, avatar, githubUsername, loggedInUser, avatarUrl, _yield$avatar, filename, createReadStream, newFilename, readStream, writeStream, uglyPassword, updatedUser;

        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                username = _ref.username, email = _ref.email, name = _ref.name, location = _ref.location, newPassword = _ref.password, avatar = _ref.avatarUrl, githubUsername = _ref.githubUsername;
                loggedInUser = _ref2.loggedInUser;
                avatarUrl = null;

                if (!avatar) {
                  _context.next = 14;
                  break;
                }

                _context.next = 6;
                return avatar;

              case 6:
                _yield$avatar = _context.sent;
                filename = _yield$avatar.filename;
                createReadStream = _yield$avatar.createReadStream;
                newFilename = "".concat(loggedInUser.id, "-").concat(Date.now(), "-").concat(filename);
                readStream = createReadStream();
                writeStream = (0, _fs.createWriteStream)(process.cwd() + "/uploads/" + newFilename);
                readStream.pipe(writeStream);
                avatarUrl = "http://localhost:4000/static/".concat(newFilename);

              case 14:
                uglyPassword = null;

                if (!newPassword) {
                  _context.next = 19;
                  break;
                }

                _context.next = 18;
                return _bcrypt["default"].hash(newPassword, 10);

              case 18:
                uglyPassword = _context.sent;

              case 19:
                _context.next = 21;
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

              case 21:
                updatedUser = _context.sent;

                if (!updatedUser.id) {
                  _context.next = 26;
                  break;
                }

                return _context.abrupt("return", {
                  ok: true
                });

              case 26:
                return _context.abrupt("return", {
                  ok: false,
                  error: "Could not update profile."
                });

              case 27:
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