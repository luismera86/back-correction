import { studentModel } from "../models";


const getAllService = async () => {
  const courses = await studentModel.find();
  return courses;
}

const getOneService = async (id: string) => {
  const course = await studentModel.findById(id);
  return course;
}

const createService = async (course: any) => {
  const newCourse = await studentModel.create(course);
  return newCourse;
}

const updateService = async (id: string, course: any) => {
  const updatedCourse = await studentModel.findByIdAndUpdate(id, course, { new: true });
  return updatedCourse;
}

const deleteService = async (id: string) => {
  const deletedCourse = await studentModel.findByIdAndDelete(id);
  return deletedCourse;
}

export {
  createService, deleteService, getAllService,
  getOneService, updateService
};

