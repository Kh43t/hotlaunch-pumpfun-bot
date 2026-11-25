// HotLaunch — a pump.fun launch sniper for the make.fun "Pump.fun Bot Sprint" bounty.
//
// Run by the grader as `node /bot/main.ts` (Node strips the types; no build, no install).
// The strategy lives in strategy.ts; the wire protocol and state live in shim.ts.
//
// The bot trades paper money on a replay of pump.fun bonding-curve events: it buys only
// launches that arrive hot (many distinct buyers in their first seconds, the creator with
// money in), and exits fast on a small take-profit, a wider stop, or the moment the tape's
// net flow turns against it. See strategy.ts for the full reasoning and the dev-window
// evidence behind every number.

import { runBot } from './shim.ts';
import { createStrategy, DEFAULT_PARAMS } from './strategy.ts';

// Tuned entry params (dev window, 24h, 1222 mints, mean over 4 failed-tx draws):
// stake 0.30 -> 0.50 SOL and TP +12% -> +15% lift mean net PnL 0.4565 -> 0.6067 SOL
// and flip the 2x-fee case from -0.0579 to +0.1246 SOL; loosening the flow exit
// 1.5 -> 2.0 SOL adds a little more (0.6150 mean, +0.1366 at 2x fees). Bigger stakes
// and wider TPs both lose past these points (stake 600M == 500M: the 1%-of-real-SOL
// size cap binds; TP +18% falls back to 0.4368), so these are the measured peaks,
// not guesses. Everything else stays at DEFAULT_PARAMS.
const TUNED_PARAMS = {
  ...DEFAULT_PARAMS,
  stakeLamports: 500_000_000n,
  tpBps: 1500n,
  exitFlowLamports: 2_000_000_000n,
};

await runBot(createStrategy(TUNED_PARAMS));
