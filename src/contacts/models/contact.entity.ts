import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Contact {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true, type: 'text' })
  priceWETH: string;

  @Column({ nullable: true, type: 'text' })
  nft_id: number;

  @Column({ nullable: true, type: 'text' })
  date: string;

  @Column({ nullable: true, type: 'text' })
  total_withdrawn1: string; // 0,

  @Column({ nullable: true, type: 'text' })
  sqrt_price: string; // 5196441596164144776609792,

  @Column({ nullable: true, type: 'text' })
  total_fees0: string; // 0.005433219440149034,

  @Column({ nullable: true, type: 'text' })
  in_range: boolean;

  @Column({ nullable: true, type: 'text' })
  fees_value: string; // 46.907421332943761825440874,

  @Column({ nullable: true, type: 'text' })
  total_fees1: string; // 23.420945,

  @Column({ nullable: true, type: 'integer' })
  first_mint_ts: number;

  @Column({ nullable: true, type: 'text' })
  fee_apr_sig: string; // 169e8ad08dcafbadb4aedd6a9f205232be1a23afab4efe9a48e6d44be0ac62c0,

  @Column({ nullable: true, type: 'text' })
  pool: string; // 0x641c00a822e8b671738d32a431a4fb6074e5c79d,

  @Column({ nullable: true, type: 'text' })
  age: number;

  @Column({ nullable: true, type: 'text' })
  og_owner: string; // 0x5fb52b7d3de68053298e561f0ce4662b4bb48f88,

  @Column({ nullable: true, type: 'text' })
  collected_fees0: string; // 0.004282216065008831,

  @Column({ nullable: true, type: 'text' })
  has_withdrawn: boolean;

  @Column({ nullable: true, type: 'text' })
  price_upper: string; // 4665.639795939158,

  @Column({ nullable: true, type: 'text' })
  collected_fees1: string; // 18.496025,

  @Column({ nullable: true, type: 'text' })
  uncollected_fees1: string; // 4.92492,

  @Column({ nullable: true, type: 'text' })
  diffs0: string; // 0.214623056873142627,

  @Column({ nullable: true, type: 'text' })
  current_amount0: string; // 0.5545247192,

  @Column({ nullable: true, type: 'text' })
  underlying_value: string; // 2953.8892119471967992,

  @Column({ nullable: true, type: 'text' })
  autocomp_deposited1: number;

  @Column({ nullable: true, type: 'text' })
  token1: string; // 0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9,

  @Column({ nullable: true, type: 'text' })
  token0: string; // 0x82af49447d8a07e3bd95bd0d56f35241523fbab1,

  @Column({ nullable: true, type: 'text' })
  autocomp_deposited0: number;

  @Column({ nullable: true, type: 'text' })
  liquidity: string; // 914293006693246,

  @Column({ nullable: true, type: 'text' })
  real_owner: string; // 0x5fb52b7d3de68053298e561f0ce4662b4bb48f88,

  @Column({ nullable: true, type: 'text' })
  total_deposits1: string; // 1499.349178,

  @Column({ nullable: true, type: 'text' })
  withdrawals_value: string; // 0,

  @Column({ nullable: true, type: 'text' })
  pool_tick: number;

  @Column({ nullable: true, type: 'text' })
  now_ts: number;

  @Column({ nullable: true, type: 'text' })
  network: string; // arbitrum,

  @Column({ nullable: true, type: 'text' })
  exchange: string; // uniswapv3,

  @Column({ nullable: true, type: 'text' })
  current_amount1: string; // 561.340021,

  @Column({ nullable: true, type: 'text' })
  pool_price: string; // 4301.82692597088,

  @Column({ nullable: true, type: 'text' })
  total_deposits0: string; // 0.339901662326857373,

  @Column({ nullable: true, type: 'text' })
  fee_tier: string; // 500,

  @Column({ nullable: true, type: 'text' })
  price_lower: string; // 4221.666573316443,

  @Column({ nullable: true, type: 'text' })
  autocompounding: boolean;

  @Column({ nullable: true, type: 'text' })
  owner: string; // 0x5fb52b7d3de68053298e561f0ce4662b4bb48f88,

  @Column({ nullable: true, type: 'text' })
  uncollected_fees0: string; // 0.001151003375140203,

  @Column({ nullable: true, type: 'text' })
  tick_lower: number; // -192840
}
