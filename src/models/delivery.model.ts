import { model, Schema } from "mongoose";
import { Delivery } from "../shared/interfaces";

const deliverySchema = new Schema<Delivery>({
  slogan: {
    type: Schema.Types.ObjectId,
    ref: "Slogan",
    required: true,
  },
  slogans: [{
    type: Schema.Types.ObjectId,
    ref: "SloganCorrection",
    required: true,
  }],
});

deliverySchema.pre("findOne", function (next) {
  this.populate("slogan");
  this.populate("slogans");
  next();
});

const deliveryModel = model<Delivery>("Delivery", deliverySchema);

export { deliveryModel };
