import Web3 from "web3";
var fs = require('fs');
import config from "./config";
const contractAddr = config.contractAddress
const parsed= JSON.parse(fs.readFileSync('../src/constants/abi.json'));

export async function isOwner(account: string, web3: Web3) {
    try {
        const contract = new web3.eth.Contract(parsed, contractAddr);
        const bals = await contract.methods.balanceOfBatch(new Array(config.tokenList.length).fill(account), config.tokenList).call();
        const nft = bals.find((b:string) => Number(b) > 0)
        console.log(nft);
        return nft ? true : false;
    } catch (e:any) {
        throw e 
    }
}