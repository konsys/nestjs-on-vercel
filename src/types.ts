import axios from 'axios';

export function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export type TPosition = {
  total_withdrawn1: string; // 0,
  sqrt_price: string; // 5196441596164144776609792,
  total_fees0: string; // 0.005433219440149034,
  in_range: boolean;
  fees_value: string; // 46.907421332943761825440874,
  total_fees1: string; // 23.420945,
  first_mint_ts: number;
  fee_apr_sig: string; // 169e8ad08dcafbadb4aedd6a9f205232be1a23afab4efe9a48e6d44be0ac62c0,
  pool: string; // 0x641c00a822e8b671738d32a431a4fb6074e5c79d,
  age: number;
  og_owner: string; // 0x5fb52b7d3de68053298e561f0ce4662b4bb48f88,
  collected_fees0: string; // 0.004282216065008831,
  has_withdrawn: boolean;
  price_upper: string; // 4665.639795939158,
  performance: {
    hodl: {
      pnl: string; // 31.6015869759491166579280658805,
      roi: string; // 1.064314957,
      apr: string; // 133.1152744,
      pool_pnl: string; // 32.051395630552663604783021,
      pool_roi: string; // 1.079464135,
      pool_apr: string; // 135.0273528,
      il: string; // -14.856025702391098220657853,
      fee_apr: string; // 197.5879965
    };
    token0: {
      pnl: string; // 0.0182253852673060456005,
      roi: string; // 2.689384097,
      apr: string; // 336.4592471,
      pool_pnl: string; // 0.0183296986465570456,
      pool_roi: string; // 2.704776844,
      pool_apr: string; // 338.4291778,
      il: string; // 0.0074505184130345126,
      fee_apr: string; // 200.8407908
    };
    token1: {
      pnl: string; // -14.4840867915420660282977234450,
      roi: string; // -0.4815396318,
      apr: string; // -60.21048374,
      pool_pnl: string; // -14.023441449324548423027916,
      pool_roi: string; // -0.4662249633,
      pool_apr: string; // -58.30318803,
      il: string; // -60.810545160707462607682210,
      fee_apr: string; // 194.4944260
    };
  };
  collected_fees1: string; // 18.496025,
  uncollected_fees1: string; // 4.92492,
  nft_id: number;
  diffs0: string; // 0.214623056873142627,
  current_amount0: string; // 0.5545247192,
  underlying_value: string; // 2953.8892119471967992,
  autocomp_deposited1: 0;
  token1: string; // 0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9,
  token0: string; // 0x82af49447d8a07e3bd95bd0d56f35241523fbab1,
  autocompounding_details: {
    balances: null;
  };
  autocomp_deposited0: 0;
  liquidity: string; // 914293006693246,
  real_owner: string; // 0x5fb52b7d3de68053298e561f0ce4662b4bb48f88,
  total_deposits1: string; // 1499.349178,
  withdrawals_value: string; // 0,
  pool_tick: number;
  now_ts: number;
  cash_flows: [
    {
      amount: string; // -0.000085616292965,
      tx_hash: string; // 0x2166c12446c12288056d36df326dacd0a6f59a5f4651b8ca51c647e7258a6be7,
      gas_price: number; // 9.8245E-11,
      type: string; // gas-costs,
      prices: {
        native_token: {
          usd: number;
          token1: number;
          token0: number;
          token_key: string; // native-token,
          eth: number;
        };
      };
      gas_used: number;
      from: string; // 0xbb1a1a2773a799d83078ae4d59d9f4b2b6ac50ff,
      with_receipt: true;
      amount_usd: string; // -0.369185140269152831365,
      timestamp: number;
      owner: string; // 0x5fb52b7d3de68053298e561f0ce4662b4bb48f88
    },
  ];
  exited: boolean;
  deposits_value: string; // 2968.745237649587897420657853,
  diffs1: string; // -938.009157,
  total_withdrawn0: string; // 0,
  tick_upper: number; // -191840,

  network: string; // arbitrum,
  exchange: string; // uniswapv3,
  current_amount1: string; // 561.340021,
  pool_price: string; // 4301.82692597088,
  total_deposits0: string; // 0.339901662326857373,
  fee_tier: string; // 500,
  price_lower: string; // 4221.666573316443,
  autocompounding: boolean;
  owner: string; // 0x5fb52b7d3de68053298e561f0ce4662b4bb48f88,
  uncollected_fees0: string; // 0.001151003375140203,
  tick_lower: number; // -192840

  // total_withdrawn1: string; // '0',
  // sqrt_price: string; // '35430465601290701888012765807',
  // total_fees0: string; // '0.0',
  // in_range: true;
  // fees_value: string; // '0E-31',
  // total_fees1: string; //  '0.0',
  // first_mint_ts: number;
  // pool: string; //  '0x9f21c6126a6055377620ff5b2e7d70a527d8bfb1',
  // age: number;
  // og_owner: string; // '0x5fb52b7d3de68053298e561f0ce4662b4bb48f88',
  // collected_fees0: string; // '0',
  // has_withdrawn: false;
  // price_upper: string; // '403.30779107245206',
  // performance: string; //  [Object],
  // collected_fees1: string; //  '0',
  // uncollected_fees1: string; // '0.0',
  // nft_id: number;
  // diffs0: string; //  '0.00',
  // current_amount0: string; // '12085.94',
  // underlying_value: string; // '0E-36',
  // autocomp_deposited1: number;
  // token1: string; //  '0x67be17186a88909eabd1369906d7ea161029dec6',
  // token0: string; //  '0x31bad2058cf099a585ba32c783321ee07b088afc',
  // autocompounding_details: string; // [Object],
  // autocomp_deposited0: number;
  // liquidity: string; // '5527870103898742735475',
  // real_owner: string; //  '0x5fb52b7d3de68053298e561f0ce4662b4bb48f88',
  // total_deposits1: string; // '2196.780057836132206206',
  // withdrawals_value: string; //  '0',
  // pool_tick: number;
  // now_ts: number;
  // cash_flows: string; // [Array],
  // exited: false;
  // deposits_value: string; // '0E-48',
  // diffs1: string; //  '-8.36132206206E-7',
  // total_withdrawn0: string; // '0',
  // tick_upper: number;
  // tokens: string; //  [Object],
  // network: string; //  'unichain',
  // exchange: string; // 'uniswapv3',
  // current_amount1: string; // '2196.780057',
  // pool_price: string; //  '0.19998367807988282',
  // total_deposits0: string; // '12085.94',
  // fee_tier: string; //  '3000',
  // price_lower: string; //  '0.002479495864289801',
  // autocompounding: false;
  // owner: string; // '0x5fb52b7d3de68053298e561f0ce4662b4bb48f88',
  // uncollected_fees0: string; // '0.0',
  // tick_lower: number;
};

export type PositionResponseDto = {
  success: boolean;
  total_count: number;
  exited_count: number;
  data: TPosition[];
};

(async () => {
  const res = await axios
    .get<PositionResponseDto>(
      'https://api.revert.finance/v1/positions/uniswapv3/account/0x5fb52b7d3de68053298e561f0ce4662b4bb48f88?active=true',
    )
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });


})();
