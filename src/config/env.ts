import { config } from "dotenv";
config();

export const ENV = {
  THERMAL_PRINTER_INTERFACE: process.env.THERMAL_PRINTER_INTERFACE,
  PORT: process.env.WEB_PORT,
};
