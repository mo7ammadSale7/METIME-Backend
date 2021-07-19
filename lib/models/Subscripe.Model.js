"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = require("mongoose");

const SubscripeSchema = new _mongoose.Schema({
  email: String
});
const SubscripeModel = (0, _mongoose.model)("Subscripe", SubscripeSchema);
var _default = SubscripeModel;
exports.default = _default;