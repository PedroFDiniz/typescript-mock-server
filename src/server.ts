import express, { Request, Response } from "express";
import cors from "cors";
import routes from "./routes.js";

const server = express();

server.use(express.json());
server.use(cors());
server.use(routes);

/* Essa rota é para checar se a API está funcionando. */
server.get("/api", (request: Request, response: Response) => {
    return response.send({ message: "API online!" });
});

export default server;