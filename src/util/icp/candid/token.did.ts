export const idlFactory = ({ IDL }) => {
  const Metadata = IDL.Record({
    fee: IDL.Nat,
    decimals: IDL.Nat8,
    owner: IDL.Principal,
    logo: IDL.Text,
    name: IDL.Text,
    totalSupply: IDL.Nat,
    symbol: IDL.Text,
    feeTo: IDL.Principal,
  });
  const TxError = IDL.Variant({
    AlreadyNotified: IDL.Null,
    InsufficientAllowance: IDL.Null,
    FeeExceededLimit: IDL.Null,
    InsufficientBalance: IDL.Null,
    Unauthorized: IDL.Null,
    NotificationFailed: IDL.Null,
    TransactionDoesNotExist: IDL.Null,
    AmountTooSmall: IDL.Null,
  });
  const Result = IDL.Variant({ Ok: IDL.Nat, Err: TxError });
  const AuctionInfo = IDL.Record({
    auction_time: IDL.Nat64,
    auction_id: IDL.Nat64,
    first_transaction_id: IDL.Nat,
    last_transaction_id: IDL.Nat,
    tokens_distributed: IDL.Nat,
    cycles_collected: IDL.Nat64,
    fee_ratio: IDL.Float64,
  });
  const AuctionError = IDL.Variant({
    NoBids: IDL.Null,
    TooEarlyToBeginAuction: IDL.Null,
    BiddingTooSmall: IDL.Null,
    AuctionNotFound: IDL.Null,
  });
  const Result_1 = IDL.Variant({ Ok: AuctionInfo, Err: AuctionError });
  const Result_2 = IDL.Variant({ Ok: IDL.Nat64, Err: AuctionError });
  const BiddingInfo = IDL.Record({
    caller_cycles: IDL.Nat64,
    auction_period: IDL.Nat64,
    accumulated_fees: IDL.Nat,
    last_auction: IDL.Nat64,
    total_cycles: IDL.Nat64,
    fee_ratio: IDL.Float64,
  });
  const TokenInfo = IDL.Record({
    holderNumber: IDL.Nat64,
    deployTime: IDL.Nat64,
    metadata: Metadata,
    historySize: IDL.Nat,
    cycles: IDL.Nat64,
    feeTo: IDL.Principal,
  });
  const TransactionStatus = IDL.Variant({
    Failed: IDL.Null,
    Succeeded: IDL.Null,
  });
  const Operation = IDL.Variant({
    Approve: IDL.Null,
    Burn: IDL.Null,
    Mint: IDL.Null,
    Auction: IDL.Null,
    Transfer: IDL.Null,
    TransferFrom: IDL.Null,
  });
  const TxRecord = IDL.Record({
    to: IDL.Principal,
    fee: IDL.Nat,
    status: TransactionStatus,
    from: IDL.Principal,
    operation: Operation,
    timestamp: IDL.Int,
    caller: IDL.Opt(IDL.Principal),
    index: IDL.Nat,
    amount: IDL.Nat,
  });
  const Result_3 = IDL.Variant({ Ok: IDL.Null, Err: TxError });
  return IDL.Service({
    allowance: IDL.Func([IDL.Principal, IDL.Principal], [IDL.Nat], ['query']),
    approve: IDL.Func([IDL.Principal, IDL.Nat], [Result], []),
    auctionInfo: IDL.Func([IDL.Nat64], [Result_1], ['query']),
    balanceOf: IDL.Func([IDL.Principal], [IDL.Nat], ['query']),
    bidCycles: IDL.Func([IDL.Principal], [Result_2], []),
    biddingInfo: IDL.Func([], [BiddingInfo], ['query']),
    burn: IDL.Func([IDL.Nat], [Result], []),
    decimals: IDL.Func([], [IDL.Nat8], ['query']),
    getAllowanceSize: IDL.Func([], [IDL.Nat64], ['query']),
    getHolders: IDL.Func(
      [IDL.Nat64, IDL.Nat64],
      [IDL.Vec(IDL.Tuple(IDL.Principal, IDL.Nat))],
      ['query']
    ),
    getMetadata: IDL.Func([], [Metadata], ['query']),
    getMinCycles: IDL.Func([], [IDL.Nat64], ['query']),
    getTokenInfo: IDL.Func([], [TokenInfo], ['query']),
    getTransaction: IDL.Func([IDL.Nat], [TxRecord], ['query']),
    getTransactions: IDL.Func(
      [IDL.Nat, IDL.Nat],
      [IDL.Vec(TxRecord)],
      ['query']
    ),
    getUserApprovals: IDL.Func(
      [IDL.Principal],
      [IDL.Vec(IDL.Tuple(IDL.Principal, IDL.Nat))],
      ['query']
    ),
    getUserTransactionAmount: IDL.Func([IDL.Principal], [IDL.Nat], ['query']),
    getUserTransactions: IDL.Func(
      [IDL.Principal, IDL.Nat, IDL.Nat],
      [IDL.Vec(TxRecord)],
      ['query']
    ),
    historySize: IDL.Func([], [IDL.Nat], ['query']),
    logo: IDL.Func([], [IDL.Text], ['query']),
    mint: IDL.Func([IDL.Principal, IDL.Nat], [Result], []),
    name: IDL.Func([], [IDL.Text], ['query']),
    notify: IDL.Func([IDL.Nat], [Result], []),
    owner: IDL.Func([], [IDL.Principal], ['query']),
    runAuction: IDL.Func([], [Result_1], []),
    setAuctionPeriod: IDL.Func([IDL.Nat64], [Result_3], []),
    setFee: IDL.Func([IDL.Nat], [], []),
    setFeeTo: IDL.Func([IDL.Principal], [], []),
    setLogo: IDL.Func([IDL.Text], [], []),
    setMinCycles: IDL.Func([IDL.Nat64], [Result_3], []),
    setName: IDL.Func([IDL.Text], [], []),
    setOwner: IDL.Func([IDL.Principal], [], []),
    symbol: IDL.Func([], [IDL.Text], ['query']),
    totalSupply: IDL.Func([], [IDL.Nat], ['query']),
    transfer: IDL.Func(
      [IDL.Principal, IDL.Nat, IDL.Opt(IDL.Nat)],
      [Result],
      []
    ),
    transferAndNotify: IDL.Func(
      [IDL.Principal, IDL.Nat, IDL.Opt(IDL.Nat)],
      [Result],
      []
    ),
    transferFrom: IDL.Func(
      [IDL.Principal, IDL.Principal, IDL.Nat],
      [Result],
      []
    ),
    transferIncludeFee: IDL.Func([IDL.Principal, IDL.Nat], [Result], []),
  });
};
export const init = ({ IDL }) => {
  const Metadata = IDL.Record({
    fee: IDL.Nat,
    decimals: IDL.Nat8,
    owner: IDL.Principal,
    logo: IDL.Text,
    name: IDL.Text,
    totalSupply: IDL.Nat,
    symbol: IDL.Text,
    feeTo: IDL.Principal,
  });
  return [Metadata];
};
