import { BigInt } from "@graphprotocol/graph-ts"
import {
  DeltaNeutralPerp,
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
import { Deposit, Withdrawal, PositionAdjust } from "../generated/schema"

export function handleAdminChanged(event: AdminChanged): void {}

export function handleBeaconUpgraded(event: BeaconUpgraded): void {}

export function handleDepositAllowed(event: DepositAllowed): void {}

export function handleInitialized(event: Initialized): void {}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {}

export function handlePFCharged(event: PFCharged): void {}

export function handlePerpReferralCodeChanged(
  event: PerpReferralCodeChanged
): void {}

export function handlePositionAdjusted(event: PositionAdjusted): void {
    let adjustedEntity = PositionAdjust.load(event.transaction.hash.toHex())

    if (!adjustedEntity) {
        adjustedEntity = new PositionAdjust(event.transaction.hash.toHex())
    }

    adjustedEntity.ts = event.block.timestamp
    adjustedEntity.ethAmount = event.params.wValue
    adjustedEntity.usdcAmount = event.params.usdcValue
    adjustedEntity.totalAmount = event.params.adjustedValue

    if (event.params.operationType) {
        adjustedEntity.isIncrease = event.params.positionType
    } else {
        adjustedEntity.isIncrease = false
    }

    adjustedEntity.save()
}

export function handleUSDCDeposited(event: USDCDeposited): void {
    let depositEntity = Deposit.load(event.transaction.hash.toHex())

    if (!depositEntity) {
        depositEntity = new Deposit(event.transaction.hash.toHex())
    }

    depositEntity.ts = event.block.timestamp
    depositEntity.depositAmount = event.params.usdcAmount
    depositEntity.mintedAmount = event.params.dcMintingAmount
    depositEntity.userAddress = event.params.user
    depositEntity.save()
}

export function handleUSDCWithdrawn(event: USDCWithdrawn): void {
    let withdrawEntity = Withdrawal.load(event.transaction.hash.toHex())

    if (!withdrawEntity) {
        withdrawEntity = new Withdrawal(event.transaction.hash.toHex())
    }

    withdrawEntity.ts = event.block.timestamp
    withdrawEntity.wthdrawAmount = event.params.usdcAmount
    withdrawEntity.userAddress = event.params.user
    withdrawEntity.save()
}

export function handleUpgraded(event: Upgraded): void {}
