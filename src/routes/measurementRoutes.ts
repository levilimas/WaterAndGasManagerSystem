import { Router } from 'express';
import MeasurementController from '../controllers/measurementController';

const router = Router();

router.get('/measurements/:id', MeasurementController.getById);
router.post('/measurements', MeasurementController.create);

router.post('/measurements/upload', MeasurementController.uploadImage);

export default router;