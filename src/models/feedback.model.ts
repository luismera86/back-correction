import { model, Schema } from "mongoose";
import { Feedback } from "../shared/interfaces";

const feedbackSchema = new Schema<Feedback>({
  result: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
});

const feedbackModel = model<Feedback>("Feedback", feedbackSchema);

export { feedbackModel };