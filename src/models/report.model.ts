import { model, Schema } from "mongoose";
import { Report } from "../shared/interfaces";
import { result } from "../shared/enum";

const reportSchema = new Schema<Report>({
  student: {
    type: Schema.Types.ObjectId,
    ref: "Student",
    required: true,
  },
  slogan: {
    type: Schema.Types.ObjectId,
    ref: "Slogan",
    required: true,
  },
  feedback: {
    type: Schema.Types.ObjectId,
    ref: "Feedback",
    required: true,
  },
  result: {
    type: String,
    enum: [result.optimal, result.correct, result.under],
    required: true,
  },
});

const reportModel = model<Report>("Report", reportSchema);

export { reportModel };
