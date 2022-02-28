import Web3 from "web3";
var fs = require('fs');
import config from "./config";
const contractAddr = config.contractAddress
const parsed= JSON.parse(fs.readFileSync('../src/constants/ruven.json'));

export async function isOwner(account: string, web3: Web3) {
    try {
        const contract = new web3.eth.Contract(parsed, contractAddr);
        const bals = await contract.methods.balanceOfBatch(new Array(config.tokenList.length).fill(account), config.tokenList).call();
        const nftIdx = bals.findIndex((b:string) => Number(b) > 0)
        console.log(nftIdx);
        return nftIdx > - 1 ? true : false;
    } catch (e:any) {
        console.log(e);
        throw e 
    }
}