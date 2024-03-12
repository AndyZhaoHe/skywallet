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
  return IDL.Service({
    create_token: IDL.Func([Metadata], [IDL.Opt(IDL.Principal)], []),
    get_all: IDL.Func([], [IDL.Vec(IDL.Principal)], ['query']),
    get_checksum: IDL.Func([], [IDL.Text], ['query']),
    get_cycles: IDL.Func([IDL.Opt(IDL.Principal)], [IDL.Opt(IDL.Nat)], []),
    get_token: IDL.Func([IDL.Text], [IDL.Opt(IDL.Principal)], ['query']),
    length: IDL.Func([], [IDL.Nat64], ['query']),
    set_admin: IDL.Func([IDL.Principal], [], []),
    top_up: IDL.Func([], [IDL.Nat64], []),
    upgrade: IDL.Func([], [IDL.Vec(IDL.Principal)], []),
    version: IDL.Func([], [IDL.Text], ['query']),
  });
};
export const init = () => {
  return [];
};
