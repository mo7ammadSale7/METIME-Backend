import Joi from "joi";

import SubscripeModel from "../models/Subscripe.Model";

const Subscripe = {
  ShowAll: async (req, res) => {
    const subscriptions = await SubscripeModel.find({});
    res.send(subscriptions);
  },

  Add: async (req, res) => {
    const { email } = req.body;
    const bodySchema = Joi.object({
      email: Joi.string().required().email(),
    });
    const validationResult = bodySchema.validate(req.body);
    if (validationResult.error) {
      res.statusCode = 400;
      res.send(validationResult.error.details[0].message);
      return;
    }
    try {
      const newSubscripe = new SubscripeModel({
        email,
      });
      await newSubscripe.save();
      res.json({ message: `${newSubscripe.email} has success Added!` });
    } catch (error) {
      res.statusCode = 400;
      res.send(error.message);
    }
  },
};

export default Subscripe;
