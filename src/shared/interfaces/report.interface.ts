import { result } from "../enum";
import { Feedback } from "./feedback.interface";
import { Slogan } from "./slogan.interface";
import { Student } from "./student.interface";

interface Report {
  student: Student;
  slogan: Slogan;
  feedback: Feedback;
  result: result;
}

export { Report }
