"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _joi = _interopRequireDefault(require("joi"));

var _Subscripe = _interopRequireDefault(require("../models/Subscripe.Model"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Subscripe = {
  ShowAll: async (req, res) => {
    const subscriptions = await _Subscripe.default.find({});
    res.send(subscriptions);
  },
  Add: async (req, res) => {
    const {
      email
    } = req.body;

    const bodySchema = _joi.default.object({
      email: _joi.default.string().required().email()
    });

    const validationResult = bodySchema.validate(req.body);

    if (validationResult.error) {
      res.statusCode = 400;
      res.send(validationResult.error.details[0].message);
      return;
    }

    try {
      const newSubscripe = new _Subscripe.default({
        email
      });
      await newSubscripe.save();
      res.json({
        message: "".concat(newSubscripe.email, " has success Added!")
      });
    } catch (error) {
      res.statusCode = 400;
      res.send(error.message);
    }
  }
};
var _default = Subscripe;
exports.default = _default;