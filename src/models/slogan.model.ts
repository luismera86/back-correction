import { model, Schema } from "mongoose";
import { Slogan } from "../shared/interfaces";

const sloganSchema = new Schema<Slogan>({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  slogans: {
    type: [{
      type: Schema.Types.ObjectId,
      ref: "SloganCorrection",
      required: true,
    }],
    required: true,
  },
});

const sloganModel = model<Slogan>("Slogan", sloganSchema);

export { sloganModel };