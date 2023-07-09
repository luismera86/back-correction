import { model, Schema } from "mongoose";
import { Student } from "../shared/interfaces";

const studentSchema = new Schema<Student>({
  fullName: {
    type: String,
    required: true,
  },
  commission: {
    type: Number,
    required: true,
  },
  tutor: {
    type: String,
    required: true,
  },
  courseName: {
    type: String,
    required: true,
  },
});

const studentModel = model<Student>("Student", studentSchema);

export { studentModel };