import { model, Schema } from "mongoose";
import { SloganCorrection } from "../shared/interfaces";
import { sloganStatus } from "../shared/enum";

const sloganCorrectionSchema = new Schema<SloganCorrection>({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
    enum: [sloganStatus.realized, sloganStatus.incomplete, sloganStatus.notRealized],
    required: true,
  },
});

const sloganCorrectionModel = model<SloganCorrection>("SloganCorrection", sloganCorrectionSchema);

export { sloganCorrectionModel };