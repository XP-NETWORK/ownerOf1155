
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import Web3 from "web3";
import { txRouter } from "./router";
import config from "./config";
import { isOwner } from "./helpers";

const web3 = new Web3(config.rpc);

(async function main() {
  const app = express();
  app.use(cors());
  app.get(`/public/${config.fileName}`, function(req, res, next) {
    const {sign} = req.query
    if (!sign) return res.sendStatus(400);
    next()
   });
  app.use('/public', express.static('../public'));
  app.use(bodyParser.json({ limit: "50mb" }));
  app.use(bodyParser.urlencoded({ extended: true }));

  app.set('view engine', 'ejs');

 
  app.use("/", txRouter(web3));

  app.listen(config.port || 3100, () => {
    console.log(`Listening on port ${process.env.PORT}`);
  });
})();
