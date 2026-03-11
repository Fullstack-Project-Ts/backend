import express from "express";
import config from "config";
import router from "./router.js"

const app = express();

app.use("/api/", router);

app.use(express.json());

const port = config.get<number>("port");

app.listen(3000, async () =>{
  console.log("Aplicação está funcionando na porta: ${port}");
});