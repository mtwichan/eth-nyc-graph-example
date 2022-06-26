// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class Identity extends ethereum.Event {
  get params(): Identity__Params {
    return new Identity__Params(this);
  }
}

export class Identity__Params {
  _event: Identity;

  constructor(event: Identity) {
    this._event = event;
  }

  get communicationAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class Message extends ethereum.Event {
  get params(): Message__Params {
    return new Message__Params(this);
  }
}

export class Message__Params {
  _event: Message;

  constructor(event: Message) {
    this._event = event;
  }

  get reciever(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get message(): string {
    return this._event.parameters[1].value.toString();
  }
}

export class Echo extends ethereum.SmartContract {
  static bind(address: Address): Echo {
    return new Echo("Echo", address);
  }
}

export class LogIdentityCall extends ethereum.Call {
  get inputs(): LogIdentityCall__Inputs {
    return new LogIdentityCall__Inputs(this);
  }

  get outputs(): LogIdentityCall__Outputs {
    return new LogIdentityCall__Outputs(this);
  }
}

export class LogIdentityCall__Inputs {
  _call: LogIdentityCall;

  constructor(call: LogIdentityCall) {
    this._call = call;
  }

  get communicationAddress_(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class LogIdentityCall__Outputs {
  _call: LogIdentityCall;

  constructor(call: LogIdentityCall) {
    this._call = call;
  }
}

export class LogMessageCall extends ethereum.Call {
  get inputs(): LogMessageCall__Inputs {
    return new LogMessageCall__Inputs(this);
  }

  get outputs(): LogMessageCall__Outputs {
    return new LogMessageCall__Outputs(this);
  }
}

export class LogMessageCall__Inputs {
  _call: LogMessageCall;

  constructor(call: LogMessageCall) {
    this._call = call;
  }

  get reciever_(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get message_(): string {
    return this._call.inputValues[1].value.toString();
  }
}

export class LogMessageCall__Outputs {
  _call: LogMessageCall;

  constructor(call: LogMessageCall) {
    this._call = call;
  }
}
