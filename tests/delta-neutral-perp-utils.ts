import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
import {
  AdminChanged,
  BeaconUpgraded,
  DepositAllowed,
  Initialized,
  OwnershipTransferred,
  PFCharged,
  PerpReferralCodeChanged,
  PositionAdjusted,
  USDCDeposited,
  USDCWithdrawn,
  Upgraded
} from "../generated/DeltaNeutralPerp/DeltaNeutralPerp"

export function createAdminChangedEvent(
  previousAdmin: Address,
  newAdmin: Address
): AdminChanged {
  let adminChangedEvent = changetype<AdminChanged>(newMockEvent())

  adminChangedEvent.parameters = new Array()

  adminChangedEvent.parameters.push(
    new ethereum.EventParam(
      "previousAdmin",
      ethereum.Value.fromAddress(previousAdmin)
    )
  )
  adminChangedEvent.parameters.push(
    new ethereum.EventParam("newAdmin", ethereum.Value.fromAddress(newAdmin))
  )

  return adminChangedEvent
}

export function createBeaconUpgradedEvent(beacon: Address): BeaconUpgraded {
  let beaconUpgradedEvent = changetype<BeaconUpgraded>(newMockEvent())

  beaconUpgradedEvent.parameters = new Array()

  beaconUpgradedEvent.parameters.push(
    new ethereum.EventParam("beacon", ethereum.Value.fromAddress(beacon))
  )

  return beaconUpgradedEvent
}

export function createDepositAllowedEvent(user: Address): DepositAllowed {
  let depositAllowedEvent = changetype<DepositAllowed>(newMockEvent())

  depositAllowedEvent.parameters = new Array()

  depositAllowedEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )

  return depositAllowedEvent
}

export function createInitializedEvent(version: i32): Initialized {
  let initializedEvent = changetype<Initialized>(newMockEvent())

  initializedEvent.parameters = new Array()

  initializedEvent.parameters.push(
    new ethereum.EventParam(
      "version",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(version))
    )
  )

  return initializedEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createPFChargedEvent(
  triger: Address,
  pfAmount: BigInt
): PFCharged {
  let pfChargedEvent = changetype<PFCharged>(newMockEvent())

  pfChargedEvent.parameters = new Array()

  pfChargedEvent.parameters.push(
    new ethereum.EventParam("triger", ethereum.Value.fromAddress(triger))
  )
  pfChargedEvent.parameters.push(
    new ethereum.EventParam(
      "pfAmount",
      ethereum.Value.fromUnsignedBigInt(pfAmount)
    )
  )

  return pfChargedEvent
}

export function createPerpReferralCodeChangedEvent(
  newCode: Bytes
): PerpReferralCodeChanged {
  let perpReferralCodeChangedEvent = changetype<PerpReferralCodeChanged>(
    newMockEvent()
  )

  perpReferralCodeChangedEvent.parameters = new Array()

  perpReferralCodeChangedEvent.parameters.push(
    new ethereum.EventParam("newCode", ethereum.Value.fromFixedBytes(newCode))
  )

  return perpReferralCodeChangedEvent
}

export function createPositionAdjustedEvent(
  operationType: boolean,
  positionType: boolean,
  usdcValue: BigInt,
  wValue: BigInt,
  adjustedValue: BigInt
): PositionAdjusted {
  let positionAdjustedEvent = changetype<PositionAdjusted>(newMockEvent())

  positionAdjustedEvent.parameters = new Array()

  positionAdjustedEvent.parameters.push(
    new ethereum.EventParam(
      "operationType",
      ethereum.Value.fromBoolean(operationType)
    )
  )
  positionAdjustedEvent.parameters.push(
    new ethereum.EventParam(
      "positionType",
      ethereum.Value.fromBoolean(positionType)
    )
  )
  positionAdjustedEvent.parameters.push(
    new ethereum.EventParam(
      "usdcValue",
      ethereum.Value.fromUnsignedBigInt(usdcValue)
    )
  )
  positionAdjustedEvent.parameters.push(
    new ethereum.EventParam("wValue", ethereum.Value.fromUnsignedBigInt(wValue))
  )
  positionAdjustedEvent.parameters.push(
    new ethereum.EventParam(
      "adjustedValue",
      ethereum.Value.fromUnsignedBigInt(adjustedValue)
    )
  )

  return positionAdjustedEvent
}

export function createUSDCDepositedEvent(
  user: Address,
  usdcAmount: BigInt,
  dcMintingAmount: BigInt
): USDCDeposited {
  let usdcDepositedEvent = changetype<USDCDeposited>(newMockEvent())

  usdcDepositedEvent.parameters = new Array()

  usdcDepositedEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  usdcDepositedEvent.parameters.push(
    new ethereum.EventParam(
      "usdcAmount",
      ethereum.Value.fromUnsignedBigInt(usdcAmount)
    )
  )
  usdcDepositedEvent.parameters.push(
    new ethereum.EventParam(
      "dcMintingAmount",
      ethereum.Value.fromUnsignedBigInt(dcMintingAmount)
    )
  )

  return usdcDepositedEvent
}

export function createUSDCWithdrawnEvent(
  user: Address,
  usdcAmount: BigInt
): USDCWithdrawn {
  let usdcWithdrawnEvent = changetype<USDCWithdrawn>(newMockEvent())

  usdcWithdrawnEvent.parameters = new Array()

  usdcWithdrawnEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  usdcWithdrawnEvent.parameters.push(
    new ethereum.EventParam(
      "usdcAmount",
      ethereum.Value.fromUnsignedBigInt(usdcAmount)
    )
  )

  return usdcWithdrawnEvent
}

export function createUpgradedEvent(implementation: Address): Upgraded {
  let upgradedEvent = changetype<Upgraded>(newMockEvent())

  upgradedEvent.parameters = new Array()

  upgradedEvent.parameters.push(
    new ethereum.EventParam(
      "implementation",
      ethereum.Value.fromAddress(implementation)
    )
  )

  return upgradedEvent
}
