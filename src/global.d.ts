interface ResultValues {
  actionId: String;
  txFees: String;
  to: String;
  value: String;
}

enum EventTypes {
  Transfer,
  Unfreeze,
}

export interface EventData {
  removed: Boolean;
  logIndex: Number;
  transactionIndex: Number;
  transactionHash: String;
  blockHash: String;
  blockNumber: Number;
  address: String;
  id: String;
  returnValues: ResultValues;
  event: EventTypes;
  signature: String;
  raw: {
    data: String;
    topics: String[];
  };
}
