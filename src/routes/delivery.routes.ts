
import { Router } from 'express';

import { createController, deleteController, getController, getOneController, updateController } from '../controllers/delivery.controller';

const router = Router();
router.get('/', getController);
router.get('/:id', getOneController);
router.post('/', createController);
router.put('/:id', updateController);
router.delete('/:id', deleteController);

export { router as deliveryRoutes}