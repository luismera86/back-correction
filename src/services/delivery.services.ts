import { deliveryModel } from "../models";


const getAllService = async () => {
  const courses = await deliveryModel.find();
  return courses;
}

const getOneService = async (id: string) => {
  const course = await deliveryModel.findById(id);
  return course;
}

const createService = async (course: any) => {
  const newCourse = await deliveryModel.create(course);
  return newCourse;
}

const updateService = async (id: string, course: any) => {
  const updatedCourse = await deliveryModel.findByIdAndUpdate(id, course, { new: true });
  return updatedCourse;
}

const deleteService = async (id: string) => {
  const deletedCourse = await deliveryModel.findByIdAndDelete(id);
  return deletedCourse;
}

export {
  createService, deleteService, getAllService,
  getOneService, updateService
};

