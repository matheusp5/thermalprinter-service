import { BreakLine, CharacterSet, ThermalPrinter } from "node-thermal-printer";
import { PrinterProvider } from "../../domain/providers/printer-provider";
import { Correct, Status, Wrong } from "../../domain/responses/status";
import { ENV } from "../../config/env";

export class ThermalPrinterProvider implements PrinterProvider {
  public conn: ThermalPrinter;

  constructor() {
    this.conn = new ThermalPrinter({
      interface: ENV.THERMAL_PRINTER_INTERFACE as string,
      characterSet: CharacterSet.PC852_LATIN2,
      removeSpecialCharacters: false,
      breakLine: BreakLine.WORD,
    });
  }

  async print(): Promise<Status> {
    try {
      await this.conn.execute();
      this.conn.beep();
      return new Correct();
    } catch (e) {
      return new Wrong(e.message);
    }
  }
}
