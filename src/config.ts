import dotenv from "dotenv";

dotenv.config({ path: "../.env" });

function getOrThrow(key: string): string {
  const value = process.env[key];
  if (!value) {
    throw new Error(`Missing env var ${key}`);
  }
  return value;
}

export default  {
    contractAddress: getOrThrow('CONTRACT'),
    token: getOrThrow('TOKEN'),
    rpc: getOrThrow('RPC'),
    tokenList: Array.from(Array(900).keys())
}