import Web3 from "web3";
var fs = require('fs');
import config from "./config";
const token = config.token
const contractAddr = config.contractAddress

export function isOwner(account: string, web3: Web3) {
   // const bals = await balanceOfBatch(new Array(tokenIdList.length).fill(owner), tokenIdList);
    //return bals.find((b) => b.gt(0));
    var parsed= JSON.parse(fs.readFileSync('../src/constants/abi.json'));
    const c = new web3.eth.Contract(parsed, contractAddr);
    console.log(c, 'd');
    return true
}