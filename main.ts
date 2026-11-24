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

await runBot(createStrategy(DEFAULT_PARAMS));
