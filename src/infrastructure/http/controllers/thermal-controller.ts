import { Request, Response } from "express";
import { OrderPrinterStrategy } from "../../strategies/order-printer";
import { ChickenPrinterStrategy } from "../../strategies/chicken-printer";

export class ThermalPrinterController {
  async consumer(req: Request, res: Response) {
    const result = await new OrderPrinterStrategy().print(req.body);
    if (!result) {
      return res.status(500).json({
        success: false,
      });
    }
    return res.status(200).json({
      success: true,
    });
  }

  async chicken(req: Request, res: Response) {
    const result = await new ChickenPrinterStrategy().print(req.body);
    if (!result) {
      return res.status(500).json({
        success: false,
      });
    }
    return res.status(200).json({
      success: true,
    });
  }
}
