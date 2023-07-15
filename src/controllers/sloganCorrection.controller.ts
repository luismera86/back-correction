import { Request, Response } from "express";
import { createService, deleteService, getAllService, getOneService, updateService } from "../services/sloganCorrection.services";

const getController = async (req: Request, res: Response) => {
  try {
    const courses = await getAllService();
    res.status(200).json(courses);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

const getOneController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const course = await getOneService(id);
    res.status(200).json(course);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

const createController = async (req: Request, res: Response) => {
  try {
    const course = req.body;
    await createService(course);
    res.status(201).json(course);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

const updateController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const course = req.body;
    await updateService(id, course);
    res.status(200).json(course);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

const deleteController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await deleteService(id);
    res.status(200).json({ message: `Course ${id} deleted` });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export { createController, deleteController, getController, getOneController, updateController };
