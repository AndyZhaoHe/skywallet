export const idlFactory = ({ IDL }) => {
  const CumulativePrice = IDL.Record({
    timestamp: IDL.Nat32,
    price0: IDL.Nat,
    price1: IDL.Nat,
  });
  const Reserves = IDL.Record({
    block_timestamp_last: IDL.Nat32,
    reserve0: IDL.Nat,
    reserve1: IDL.Nat,
  });
  const Operation = IDL.Variant({
    TransactionReceived: IDL.Null,
    Burn: IDL.Null,
    Mint: IDL.Null,
    Swap: IDL.Null,
    TransactionSent: IDL.Null,
  });
  const TransactionInfo = IDL.Record({
    id: IDL.Nat,
    ts: IDL.Nat64,
    reserves: IDL.Tuple(IDL.Nat, IDL.Nat),
    in_amount: IDL.Tuple(IDL.Nat, IDL.Nat),
    operation: Operation,
    caller: IDL.Principal,
    out_amount: IDL.Tuple(IDL.Nat, IDL.Nat),
  });
  const TokenWeightsInfo = IDL.Record({
    weight0: IDL.Float64,
    weight1: IDL.Float64,
    original_weight0: IDL.Float64,
    original_weight1: IDL.Float64,
    current_ts: IDL.Nat64,
    target_weight0: IDL.Float64,
    target_weight1: IDL.Float64,
    weights_can_change: IDL.Bool,
    change_started: IDL.Nat64,
  });
  const Result = IDL.Variant({ Ok: IDL.Null, Err: IDL.Text });
  const RollingTotal = IDL.Record({
    token0_volume: IDL.Nat,
    transaction_fees: IDL.Nat,
    token1_volume: IDL.Nat,
  });
  const PairStats = IDL.Record({
    token1_reserve: IDL.Nat,
    token0_price: IDL.Float64,
    average_apy: IDL.Float64,
    token0_reserve: IDL.Nat,
    token1_price: IDL.Float64,
    token0: IDL.Principal,
    token1: IDL.Principal,
    protocol_fee_enabled: IDL.Bool,
    total_supply: IDL.Nat,
    rolling_total: RollingTotal,
  });
  const TransactionNotification = IDL.Record({
    token_id: IDL.Principal,
    from: IDL.Principal,
    amount: IDL.Nat,
  });
  return IDL.Service({
    burn: IDL.Func([IDL.Opt(IDL.Nat)], [IDL.Tuple(IDL.Nat, IDL.Nat)], []),
    change_weights_gradual: IDL.Func([IDL.Float64, IDL.Float64], [], []),
    disable_weight_changing: IDL.Func([], [], []),
    get_cap: IDL.Func([], [IDL.Opt(IDL.Nat)], ['query']),
    get_cumulative_price: IDL.Func([], [CumulativePrice], ['query']),
    get_current_price: IDL.Func([], [IDL.Float64, IDL.Float64], ['query']),
    get_history_length: IDL.Func([], [IDL.Nat], ['query']),
    get_owner: IDL.Func([], [IDL.Principal], ['query']),
    get_reserves: IDL.Func([], [Reserves], ['query']),
    get_supply: IDL.Func([IDL.Principal], [IDL.Nat], ['query']),
    get_token0: IDL.Func([], [IDL.Principal], ['query']),
    get_token1: IDL.Func([], [IDL.Principal], ['query']),
    get_total_supply: IDL.Func([], [IDL.Nat], ['query']),
    get_transactions: IDL.Func(
      [IDL.Nat, IDL.Nat64, IDL.Opt(IDL.Principal)],
      [IDL.Vec(TransactionInfo)],
      ['query']
    ),
    get_transit: IDL.Func([], [IDL.Tuple(IDL.Nat, IDL.Nat)], ['query']),
    get_weights: IDL.Func([], [TokenWeightsInfo], ['query']),
    mint: IDL.Func([], [], []),
    receive_icp: IDL.Func(
      [IDL.Opt(IDL.Vec(IDL.Nat8)), IDL.Nat64, IDL.Principal],
      [Result],
      []
    ),
    refund_transfer: IDL.Func([], [IDL.Tuple(IDL.Nat, IDL.Nat)], []),
    set_cap: IDL.Func([IDL.Opt(IDL.Nat)], [], []),
    set_fee_to: IDL.Func([IDL.Principal], [], []),
    set_owner: IDL.Func([IDL.Principal], [], []),
    set_weights: IDL.Func([IDL.Float64, IDL.Float64], [], []),
    skim: IDL.Func([IDL.Principal], [], []),
    stats: IDL.Func([], [PairStats], ['query']),
    swap: IDL.Func([], [IDL.Tuple(IDL.Nat, IDL.Nat)], []),
    sync: IDL.Func([], [], []),
    top_up: IDL.Func([], [IDL.Nat64], []),
    transaction_notification: IDL.Func([TransactionNotification], [], []),
    transfer_from: IDL.Func([IDL.Principal, IDL.Nat], [], []),
    weights_change_allowed: IDL.Func([], [IDL.Bool], ['query']),
  });
};
export const init = ({ IDL }) => {
  const Standard = IDL.Variant({ Erc20: IDL.Null, Ledger: IDL.Null });
  const TokenInfo = IDL.Record({
    principal: IDL.Principal,
    standard: Standard,
  });
  const WeightsConfig = IDL.Record({
    change_allowed: IDL.Bool,
    weight0: IDL.Float64,
    weight1: IDL.Float64,
  });
  return [
    TokenInfo,
    TokenInfo,
    IDL.Principal,
    IDL.Opt(WeightsConfig),
    IDL.Opt(IDL.Nat),
  ];
};
