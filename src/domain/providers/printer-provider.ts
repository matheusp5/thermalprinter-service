import { Status } from "../responses/status";

export interface PrinterProvider {
  print(...props: any): Promise<Status>;
}
