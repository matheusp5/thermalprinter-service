import moment from "moment";
import { Order } from "../../domain/entities/order";
import { PrintableDocument } from "../../domain/strategies/printable-document";
import { ThermalPrinterProvider } from "../providers/thermal-printer";

export class OrderPrinterStrategy implements PrintableDocument<Order> {
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
    conn.bold(true);
    conn.println("TIP TI LANCHES\n");
    conn.alignLeft();
    conn.bold(false);
    conn.setTextSize(0, 0);
    conn.println("Cliente: " + content.consumerName);
    conn.println("Total: R$ " + total.toString().replace(".", ","));
    conn.println(
      "Criado em: " + moment(content.createdAt).format("DD/MM/yyyy hh:mm:ss")
    );
    conn.println("");
    conn.bold(true);
    conn.drawLine();
    conn.alignCenter();
    conn.setTextSize(1, 1);
    conn.println("SENHA: " + content.randomId);
    conn.setTextSize(0, 0);
    conn.drawLine();
    conn.println("");
    conn.bold(false);
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
