import express from "express";

const app = express();

app.use(express.json());

const PORT : number | undefined = Number(process.env.PORT) || 3333;

/**
 * Starts the server and listens on the specified port.
 * @param {number} port - The port number to listen on.
 */

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
})