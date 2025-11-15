import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default class PaymentsController {
    async getPaymentHistory(req: Request, res: Response) {
        try {
            const userId = Number(req.params.userId);

            const history = await prisma.payment.findMany({
                where: { userId },
            });

            res.json(history);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Server error" });
        }
    }
}
