import { Schema, model } from "mongoose";

const SubscripeSchema = new Schema({
  email: String,
});

const SubscripeModel = model("Subscripe", SubscripeSchema);

export default SubscripeModel;
