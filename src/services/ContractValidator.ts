/*import { EventData } from "../global";
import { BridgeABI } from "../constants/abi";
import Web3 from "web3";
import { Contract } from "web3-eth-contract";

class ContractValidatior {
  rpcLink: string;
  contractAddress: string;
  web3: Web3;
  contract: Contract;

  constructor(rpcLink: string) {
    this.rpcLink = rpcLink;

    this.web3 = new Web3(
      new Web3.providers.WebsocketProvider(rpcLink, {
        clientConfig: {
          keepalive: true,
          keepaliveInterval: 60000,
        },
        reconnect: {
          auto: true,
          delay: 5000,
          maxAttempts: 5,
          onTimeout: false,
        },
      })
    );
  }

  getContract(json: BridgeABI, contractAddress: string) {
    this.contract = new this.web3.eth.Contract(json.abi, contractAddress);

    return this;
  }

  onAllEvents(
    cb: (instance: ContractValidatior) => (err: any, data: EventData) => void
  ) {
    this.contract.events.allEvents(cb(this)).on("connected", (id) => {
      console.log("connected to ws id=" + id);
    });
    return this;
  }

  onTransfer(
    cb: (instance: ContractValidatior) => (err: any, data: EventData) => void
  ) {
    this.contract.events.Transfer(cb(this)).on("connected", (id) => {
      console.log("connected to ws id=" + id);
    });
    return this;
  }

  onUnfreeze(
    cb: (instance: ContractValidatior) => (err: any, data: EventData) => void
  ) {
    this.contract.events.Unfreeze(cb(this)).on("connected", (id) => {
      console.log("connected to ws id=" + id);
    });
    return this;
  }
}

export default (rpcLink: string) => new ContractValidatior(rpcLink);
export type { ContractValidatior };*/
