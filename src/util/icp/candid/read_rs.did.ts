export const idlFactory = ({ IDL }) => {
  const MixedHashTree = IDL.Rec();
  const AccountBalanceArgs = IDL.Record({ account: IDL.Text });
  const ICPTs = IDL.Record({ e8s: IDL.Nat64 });
  const TimeStamp = IDL.Record({ timestamp_nanos: IDL.Nat64 });
  const Transfer = IDL.Variant({
    Burn: IDL.Record({ from: IDL.Text, amount: ICPTs }),
    Mint: IDL.Record({ to: IDL.Text, amount: ICPTs }),
    Send: IDL.Record({
      to: IDL.Text,
      fee: ICPTs,
      from: IDL.Text,
      amount: ICPTs,
    }),
  });
  const Transaction = IDL.Record({
    memo: IDL.Nat64,
    created_at_time: TimeStamp,
    transfer: Transfer,
  });
  const HashOf = IDL.Record({ inner: IDL.Vec(IDL.Nat8) });
  const Block = IDL.Record({
    transaction: Transaction,
    timestamp: TimeStamp,
    parent_hash: IDL.Opt(HashOf),
  });
  const RegistryGetChangesSinceRequest = IDL.Record({ version: IDL.Nat64 });
  const Fork = IDL.Record({
    right_tree: IDL.Opt(MixedHashTree),
    left_tree: IDL.Opt(MixedHashTree),
  });
  const Labeled = IDL.Record({
    subtree: IDL.Opt(MixedHashTree),
    label: IDL.Vec(IDL.Nat8),
  });
  const TreeEnum = IDL.Variant({
    Empty: IDL.Null,
    LeafData: IDL.Vec(IDL.Nat8),
    PrunedDigest: IDL.Vec(IDL.Nat8),
    Fork: Fork,
    Labeled: Labeled,
  });
  MixedHashTree.fill(IDL.Record({ tree_enum: IDL.Opt(TreeEnum) }));
  const CertifiedResponse = IDL.Record({
    certificate: IDL.Vec(IDL.Nat8),
    hash_tree: IDL.Opt(MixedHashTree),
  });
  const RegistryValue = IDL.Record({
    value: IDL.Vec(IDL.Nat8),
    version: IDL.Nat64,
    deletion_marker: IDL.Bool,
  });
  const RegistryDelta = IDL.Record({
    key: IDL.Vec(IDL.Nat8),
    values: IDL.Vec(RegistryValue),
  });
  const RegistryError = IDL.Record({
    key: IDL.Vec(IDL.Nat8),
    code: IDL.Int32,
    reason: IDL.Text,
  });
  const RegistryGetChangesSinceResponse = IDL.Record({
    deltas: IDL.Vec(RegistryDelta),
    error: IDL.Opt(RegistryError),
    version: IDL.Nat64,
  });
  const RegistryGetValueRequest = IDL.Record({
    key: IDL.Vec(IDL.Nat8),
    version: IDL.Opt(IDL.Nat64),
  });
  const RegistryGetValueResponse = IDL.Record({
    value: IDL.Vec(IDL.Nat8),
    error: IDL.Opt(RegistryError),
    version: IDL.Nat64,
  });
  return IDL.Service({
    account_balance_pb: IDL.Func([AccountBalanceArgs], [ICPTs], []),
    block_pb: IDL.Func([IDL.Nat64], [Block], []),
    get_certified_changes_since: IDL.Func(
      [RegistryGetChangesSinceRequest],
      [CertifiedResponse],
      []
    ),
    get_certified_latest_version: IDL.Func([], [CertifiedResponse], []),
    get_changes_since: IDL.Func(
      [RegistryGetChangesSinceRequest],
      [RegistryGetChangesSinceResponse],
      []
    ),
    get_latest_version: IDL.Func([], [RegistryGetChangesSinceRequest], []),
    get_now_index: IDL.Func([], [IDL.Nat64], []),
    get_value: IDL.Func(
      [RegistryGetValueRequest],
      [RegistryGetValueResponse],
      []
    ),
    total_supply_pb: IDL.Func([], [ICPTs], []),
  });
};
export const init = ({ IDL }) => {
  return [IDL.Opt(IDL.Principal)];
};
