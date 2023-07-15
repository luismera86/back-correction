import { sloganCorrectionModel } from "../models";


const getAllService = async () => {
  const courses = await sloganCorrectionModel.find();
  return courses;
}

const getOneService = async (id: string) => {
  const course = await sloganCorrectionModel.findById(id);
  return course;
}

const createService = async (course: any) => {
  const newCourse = await sloganCorrectionModel.create(course);
  return newCourse;
}

const updateService = async (id: string, course: any) => {
  const updatedCourse = await sloganCorrectionModel.findByIdAndUpdate(id, course, { new: true });
  return updatedCourse;
}

const deleteService = async (id: string) => {
  const deletedCourse = await sloganCorrectionModel.findByIdAndDelete(id);
  return deletedCourse;
}

export {
  createService, deleteService, getAllService,
  getOneService, updateService
};

