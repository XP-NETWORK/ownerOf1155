import express, {Request, Response, Router} from "express";
import Web3 from "web3";
import { isOwner } from "./helpers";


export const txRouter = (web3:Web3): Router => {
    const router = Router();
  
    router.get("/", async (req:Request, res:Response) => {
      try {
        res.render('../../src/views/home');
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
            console.log(account)
            //contract = new w.eth.Contract(config.abi, config.address);
            //const owner = await contract.methods.ownerOf(config.token).call();
    
            if (isOwner(account, web3)) {
                res.redirect('/public/file.txt')
            } else {
              res.redirect('/')
            }
           
          }
        } catch (e: any) {
          res.status(500).json({ message: e.toString() });
        }
      });
    
      
      return router;

    }
  
  