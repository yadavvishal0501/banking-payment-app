import { Router } from "express";
import PaymentsController from "../controllers/paymentsController";

const router = Router();
const controller = new PaymentsController();

// GET /api/payments/:userId
router.get("/:userId", controller.getPaymentHistory.bind(controller));

export default router;
