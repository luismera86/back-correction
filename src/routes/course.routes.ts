
import { Router } from 'express';

import { createController, deleteController, getController, getOneController, updateController } from '../controllers/course.controller';

const router = Router();
router.get('/', getController);
router.get('/:id', getOneController);
router.post('/', createController);
router.put('/:id', updateController);
router.delete('/:id', deleteController);

export { router as courseRoutes}