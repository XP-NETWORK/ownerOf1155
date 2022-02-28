import {Request, Response, Router} from "express";
import Web3 from "web3";
import { isOwner } from "./helpers";
import config from "./config";


export const txRouter = (web3:Web3): Router => {
    const router = Router();
  
    router.get("/", async (req:Request, res:Response) => {
      try {
        res.render('../../src/views/home', {message: config.messageToSign});
      } catch (e: any) {
        res.status(500).json({ message: e.toString() });
      }
    });

    router.post("/sign", async (req:Request, res:Response) => {
        try {
          const {message, signature} : {
            message:string, signature: string
          } = req.body
    
          if (message && signature) {
            
            let account = web3.eth.accounts.recover(message, signature);
            console.log(account);
    
            if (await isOwner(account, web3)) {
                res.header('fileName', config.fileName)
                return res.sendFile(config.fileName, { root: require('path').join(__dirname, '../public') });
            } else {
                res.header('redirect', config.redirect_url)
                return res.sendStatus(301);
            }
           
          } else {
            res.status(401).json({ message: 'Cannot recover user from signaure' });
          }

        } catch (e: any) {
          res.status(500).json({ message: e.toString() });
        }
      });
    
      
      return router;

    }
  
  