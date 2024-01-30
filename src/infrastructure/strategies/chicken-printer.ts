import { Order } from "../../domain/entities/order";
import { PrintableDocument } from "../../domain/strategies/printable-document";
import { ThermalPrinterProvider } from "../providers/thermal-printer";

export class ChickenPrinterStrategy implements PrintableDocument<Order> {
  private provider: ThermalPrinterProvider;
  constructor() {
    this.provider = new ThermalPrinterProvider();
  }

  async print(content: Order) {
    const conn = this.provider.conn;
    let total = 0;
    content.orderProducts.forEach((element) => {
      total += element.quantity * element.product.amount;
    });

    conn.println("");
    conn.alignCenter();
    conn.setTextSize(1, 1);
    conn.println("COZINHA\n");
    conn.alignLeft();
    conn.setTextSize(0, 0);
    conn.alignCenter();
    conn.println("SENHA: " + content.randomId);
    conn.drawLine();
    conn.alignLeft();
    conn.println("Produtos -");
    content.orderProducts.forEach((element) => {
      conn.println(element.quantity + "x " + element.product.name);
      element.obs.length > 0 ? conn.println("  - Obs." + element.obs) : null;
      conn.println("");
    });
    conn.cut();

    const result = await this.provider.print();
    return result._success;
  }
}
