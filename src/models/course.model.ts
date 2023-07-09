import { model, Schema } from "mongoose";
import { Course } from "../shared/interfaces";

const courseSchema = new Schema<Course>({
  name: {
    type: String,
    required: true,
  },
  deliveries: [{
    type: Schema.Types.ObjectId,
    ref: "Delivery",
    required: true,
  }],
});


courseSchema.pre<Course>("findOne", function (next) {
  this.populate("deliveries");
  next();
});

const courseModel = model<Course>("Course", courseSchema);

export { courseModel };