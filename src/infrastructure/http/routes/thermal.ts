import { Router } from "express";
import { ThermalPrinterController } from "../controllers/thermal-controller";
const router = Router();

const controller = new ThermalPrinterController();
router.post("/consumer", controller.consumer);
router.post("/chicken", controller.chicken);

export { router };
