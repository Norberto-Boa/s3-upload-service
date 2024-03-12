import express from "express";
import { router } from "./routes/routes";
import "dotenv/config";

const app = express();

app.use(express.json());
app.use(router);

const PORT: number | undefined = Number(process.env.PORT) || 4444;

/**
 * Starts the server and listens on the specified port.
 * @param {number} port - The port number to listen on.
 */

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
