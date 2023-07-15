import { feedbackModel } from "../models";


const getAllService = async () => {
  const courses = await feedbackModel.find();
  return courses;
}

const getOneService = async (id: string) => {
  const course = await feedbackModel.findById(id);
  return course;
}

const createService = async (course: any) => {
  const newCourse = await feedbackModel.create(course);
  return newCourse;
}

const updateService = async (id: string, course: any) => {
  const updatedCourse = await feedbackModel.findByIdAndUpdate(id, course, { new: true });
  return updatedCourse;
}

const deleteService = async (id: string) => {
  const deletedCourse = await feedbackModel.findByIdAndDelete(id);
  return deletedCourse;
}

export {
  createService, deleteService, getAllService,
  getOneService, updateService
};

