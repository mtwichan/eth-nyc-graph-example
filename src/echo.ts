import {
  Identity as IdentityEvent,
  Message as MessageEvent
} from "../generated/Echo/Echo"
import { Identity, Message } from "../generated/schema"

export function handleIdentity(event: IdentityEvent): void {
  let entity = new Identity(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.communicationAddress = event.params.communicationAddress
  entity.timestamp = event.block.timestamp
  entity.from = event.transaction.from
  entity.save()
}

export function handleMessage(event: MessageEvent): void {
  let entity = new Message(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.reciever = event.params.reciever
  entity.message = event.params.message
  entity.timestamp = event.block.timestamp
  entity.save()
}

