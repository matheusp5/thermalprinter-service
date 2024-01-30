import { app } from "./app";
import { ENV } from "../../config/env";

app.listen(ENV.PORT, () => {
  console.log("Server listening on *:" + ENV.PORT);
});
