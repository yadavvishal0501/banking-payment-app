import { Router } from 'express';
import PaymentsController from '../controllers/paymentsController';

const router = Router();
const paymentsController = new PaymentsController();

router.get('/history', paymentsController.getPaymentHistory.bind(paymentsController));

export default function setRoutes(app: any) {
    app.use('/api/payments', router);
}