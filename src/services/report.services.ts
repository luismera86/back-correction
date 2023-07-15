import { reportModel } from "../models";


const getAllService = async () => {
  const courses = await reportModel.find();
  return courses;
}

const getOneService = async (id: string) => {
  const course = await reportModel.findById(id);
  return course;
}

const createService = async (course: any) => {
  const newCourse = await reportModel.create(course);
  return newCourse;
}

const updateService = async (id: string, course: any) => {
  const updatedCourse = await reportModel.findByIdAndUpdate(id, course, { new: true });
  return updatedCourse;
}

const deleteService = async (id: string) => {
  const deletedCourse = await reportModel.findByIdAndDelete(id);
  return deletedCourse;
}

export {
  createService, deleteService, getAllService,
  getOneService, updateService
};

