
import { Router } from 'express';

import { createController, deleteController, getController, getOneController, updateController } from '../controllers/report.controller';

const router = Router();
router.get('/', getController);
router.get('/:id', getOneController);
router.post('/', createController);
router.put('/:id', updateController);
router.delete('/:id', deleteController);

export { router as reportRoutes}