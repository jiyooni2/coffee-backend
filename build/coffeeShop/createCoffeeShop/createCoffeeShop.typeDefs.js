"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _apolloServerExpress = require("apollo-server-express");

var _templateObject;

var _default = (0, _apolloServerExpress.gql)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  type CreateCoffeeShopResult {\n    ok: Boolean!\n    error: String\n  }\n  type Mutation {\n    createCoffeeShop(\n      name: String!\n      latitude: String!\n      longitude: String!\n      category: String!\n      photo: Upload\n    ): CreateCoffeeShopResult\n  }\n"])));

exports["default"] = _default;