/*
 * Please refer to https://docs.envio.dev for a thorough guide on all Envio indexer features
 */
import {
  Cult,
  Cult_Approval,
  Cult_CultMarketGraduated,
  Cult_CultTokenBuy,
  Cult_CultTokenFees,
  Cult_CultTokenSecondaryRewards,
  Cult_CultTokenSell,
  Cult_CultTokenTransfer,
  Cult_Initialized,
  Cult_Transfer,
  CultFactory,
  CultFactory_CultTokenCreated,
  CultFactory_Initialized,
  CultFactory_OwnershipTransferred,
  CultFactory_Upgraded,
  CultRewards,
  CultRewards_Deposit,
  CultRewards_EIP712DomainChanged,
  CultRewards_Withdraw,
} from "generated";


CultFactory.CultTokenCreated.contractRegister(
  async ({ event, context }) => {
     
    context.addCult(event.params.tokenAddress);
  },
  { preRegisterDynamicContracts: true }
);

Cult.Approval.handler(async ({ event, context }) => {
  const entity: Cult_Approval = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    owner: event.params.owner,
    spender: event.params.spender,
    value: event.params.value,
  };

  context.Cult_Approval.set(entity);
});

Cult.CultMarketGraduated.handler(async ({ event, context }) => {
  const entity: Cult_CultMarketGraduated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    tokenAddress: event.params.tokenAddress,
    poolAddress: event.params.poolAddress,
    totalEthLiquidity: event.params.totalEthLiquidity,
    totalTokenLiquidity: event.params.totalTokenLiquidity,
    lpPositionId: event.params.lpPositionId,
    marketType: event.params.marketType,
  };

  context.Cult_CultMarketGraduated.set(entity);
});

Cult.CultTokenBuy.handler(async ({ event, context }) => {
  const entity: Cult_CultTokenBuy = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    buyer: event.params.buyer,
    recipient: event.params.recipient,
    orderReferrer: event.params.orderReferrer,
    totalEth: event.params.totalEth,
    ethFee: event.params.ethFee,
    ethSold: event.params.ethSold,
    tokensBought: event.params.tokensBought,
    buyerTokenBalance: event.params.buyerTokenBalance,
    comment: event.params.comment,
    totalSupply: event.params.totalSupply,
    marketType: event.params.marketType,
  };

  context.Cult_CultTokenBuy.set(entity);
});

Cult.CultTokenFees.handler(async ({ event, context }) => {
  const entity: Cult_CultTokenFees = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    tokenCreator: event.params.tokenCreator,
    orderReferrer: event.params.orderReferrer,
    protocolFeeRecipient: event.params.protocolFeeRecipient,
    tokenCreatorFee: event.params.tokenCreatorFee,
    orderReferrerFee: event.params.orderReferrerFee,
    protocolFee: event.params.protocolFee,
  };

  context.Cult_CultTokenFees.set(entity);
});

Cult.CultTokenSecondaryRewards.handler(async ({ event, context }) => {
  const entity: Cult_CultTokenSecondaryRewards = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    rewards_0: event.params.rewards
        [0]
    ,
    rewards_1: event.params.rewards
        [1]
    ,
    rewards_2: event.params.rewards
        [2]
    ,
    rewards_3: event.params.rewards
        [3]
    ,
    rewards_4: event.params.rewards
        [4]
    ,
    rewards_5: event.params.rewards
        [5]
    ,
  };

  context.Cult_CultTokenSecondaryRewards.set(entity);
});

Cult.CultTokenSell.handler(async ({ event, context }) => {
  const entity: Cult_CultTokenSell = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    seller: event.params.seller,
    recipient: event.params.recipient,
    orderReferrer: event.params.orderReferrer,
    totalEth: event.params.totalEth,
    ethFee: event.params.ethFee,
    ethBought: event.params.ethBought,
    tokensSold: event.params.tokensSold,
    sellerTokenBalance: event.params.sellerTokenBalance,
    comment: event.params.comment,
    totalSupply: event.params.totalSupply,
    marketType: event.params.marketType,
  };

  context.Cult_CultTokenSell.set(entity);
});

Cult.CultTokenTransfer.handler(async ({ event, context }) => {
  const entity: Cult_CultTokenTransfer = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    from: event.params.from,
    to: event.params.to,
    amount: event.params.amount,
    fromTokenBalance: event.params.fromTokenBalance,
    toTokenBalance: event.params.toTokenBalance,
    totalSupply: event.params.totalSupply,
  };

  context.Cult_CultTokenTransfer.set(entity);
});

Cult.Initialized.handler(async ({ event, context }) => {
  const entity: Cult_Initialized = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    version: event.params.version,
  };

  context.Cult_Initialized.set(entity);
});

Cult.Transfer.handler(async ({ event, context }) => {
  const entity: Cult_Transfer = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    from: event.params.from,
    to: event.params.to,
    value: event.params.value,
  };

  context.Cult_Transfer.set(entity);
});

CultFactory.CultTokenCreated.handler(async ({ event, context }) => {
  const entity: CultFactory_CultTokenCreated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    factoryAddress: event.params.factoryAddress,
    tokenCreator: event.params.tokenCreator,
    protocolFeeRecipient: event.params.protocolFeeRecipient,
    bondingCurve: event.params.bondingCurve,
    tokenURI: event.params.tokenURI,
    name: event.params.name,
    symbol: event.params.symbol,
    tokenAddress: event.params.tokenAddress,
    poolAddress: event.params.poolAddress,
    airdropContract: event.params.airdropContract,
  };

  context.CultFactory_CultTokenCreated.set(entity);
});

CultFactory.Initialized.handler(async ({ event, context }) => {
  const entity: CultFactory_Initialized = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    version: event.params.version,
  };

  context.CultFactory_Initialized.set(entity);
});

CultFactory.OwnershipTransferred.handler(async ({ event, context }) => {
  const entity: CultFactory_OwnershipTransferred = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    previousOwner: event.params.previousOwner,
    newOwner: event.params.newOwner,
  };

  context.CultFactory_OwnershipTransferred.set(entity);
});

CultFactory.Upgraded.handler(async ({ event, context }) => {
  const entity: CultFactory_Upgraded = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    implementation: event.params.implementation,
  };

  context.CultFactory_Upgraded.set(entity);
});

CultRewards.Deposit.handler(async ({ event, context }) => {
  const entity: CultRewards_Deposit = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    depositor: event.params.depositor,
    to: event.params.to,
    reason: event.params.reason,
    value: event.params.value,
    comment: event.params.comment,
  };

  context.CultRewards_Deposit.set(entity);
});

CultRewards.EIP712DomainChanged.handler(async ({ event, context }) => {
  const entity: CultRewards_EIP712DomainChanged = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
  };

  context.CultRewards_EIP712DomainChanged.set(entity);
});

CultRewards.Withdraw.handler(async ({ event, context }) => {
  const entity: CultRewards_Withdraw = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    owner: event.params.owner,
    to: event.params.to,
    amount: event.params.amount,
  };

  context.CultRewards_Withdraw.set(entity);
});
