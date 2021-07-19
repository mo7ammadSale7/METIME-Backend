"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Subscribe = _interopRequireDefault(require("../controllers/Subscribe.Contoller"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const setupRoutes = app => {
  app.get("/", _Subscribe.default.ShowAll);
  app.post("/", _Subscribe.default.Add); // Get Not Found Page

  app.get("*", (req, res) => res.send("Not Found!"));
};

var _default = setupRoutes;
exports.default = _default;