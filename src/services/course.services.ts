import { courseModel } from "../models";


const getAllService = async () => {
  const courses = await courseModel.find();
  return courses;
}

const getOneService = async (id: string) => {
  const course = await courseModel.findById(id);
  return course;
}

const createService = async (course: any) => {
  const newCourse = await courseModel.create(course);
  return newCourse;
}

const updateService = async (id: string, course: any) => {
  const updatedCourse = await courseModel.findByIdAndUpdate(id, course, { new: true });
  return updatedCourse;
}

const deleteService = async (id: string) => {
  const deletedCourse = await courseModel.findByIdAndDelete(id);
  return deletedCourse;
}

export {
  createService, deleteService, getAllService,
  getOneService, updateService
};

