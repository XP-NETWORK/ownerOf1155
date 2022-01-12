import abi from "./abi";
import { EventData } from "./global";
import validator, { ContractValidatior } from "./services/ContractValidator";

const linkRinkeby =
  "wss://rinkeby.infura.io/ws/v3/94a90403f4624864a5bc8a30e2d41e70";
const linkBsc =
  "wss://speedy-nodes-nyc.moralis.io/6f859660098931668455c52a/bsc/testnet/ws";
const addressRinkeby = "0x99130eDeaC029bA3E4CBb7EF0B062c8d18B1d641";
const addressBsc = "0xf443F1Ca47a3Bf2E4692Cdf5dF8B9f2f6AbB86F4";

validator(linkBsc)
  .getContract(abi, addressBsc)
  .onUnfreeze(
    (validator: ContractValidatior) => (err: any, data: EventData) => {
      if (err) {
        console.log(err);
      }

      console.log(validator);

      console.log(data);
      const {
        returnValues: { actionId, to, value, txFees },
      } = data;

      console.log(actionId, ", actionId");
      console.log(to, ", to");
      console.log(value, ", value");
      console.log(txFees, ", txFees");

      //socketInstance.methods.receiveForeign(actionId, to, value).call();
      //
    }
  );
