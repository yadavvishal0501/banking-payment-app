import { Request, Response } from 'express';

export default class PaymentsController {
    async getPaymentHistory(req: Request, res: Response) {
        const paymentHistory = [
            { id: 1, amount: 1000, method: 'NEFT', status: 'Success' },
            { id: 2, amount: 2000, method: 'RTGS', status: 'Pending' },
            { id: 3, amount: 500, method: 'UPI', status: 'Failed' },
        ];
        res.json(paymentHistory);
    }
}