# hotlaunch-pumpfun-bot

[![make.fun · u-riidzhsn-pump-fun-bot-sprint-make-bot-and-win-cb203fed](https://make.fun/badge/u-riidzhsn-pump-fun-bot-sprint-make-bot-and-win-cb203fed.svg)](https://make.fun/bounty/u-riidzhsn-pump-fun-bot-sprint-make-bot-and-win-cb203fed?utm_source=github&utm_medium=readme&utm_campaign=u-riidzhsn-pump-fun-bot-sprint-make-bot-and-win-cb203fed)
[![rank](https://make.fun/badge/u-riidzhsn-pump-fun-bot-sprint-make-bot-and-win-cb203fed/Kh43t/hotlaunch-pumpfun-bot/rank.svg)](https://make.fun/bounty/u-riidzhsn-pump-fun-bot-sprint-make-bot-and-win-cb203fed/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-riidzhsn-pump-fun-bot-sprint-make-bot-and-win-cb203fed)
[![reward](https://make.fun/badge/u-riidzhsn-pump-fun-bot-sprint-make-bot-and-win-cb203fed/Kh43t/hotlaunch-pumpfun-bot/reward.svg)](https://make.fun/bounty/u-riidzhsn-pump-fun-bot-sprint-make-bot-and-win-cb203fed?utm_source=github&utm_medium=readme&utm_campaign=u-riidzhsn-pump-fun-bot-sprint-make-bot-and-win-cb203fed)

HotLaunch — a pump.fun launch sniper that trades paper SOL on a replay of pump.fun bonding-curve events. It buys only launches that arrive hot (many distinct buyers in their first seconds, the creator with money in, real SOL already building) and exits fast: a small take-profit, a slightly wider stop, or the moment the tape's net flow turns against it. No real funds, no live trading — paper money on recorded chain data.

On the kit's dev window (24h, 1222 mints) it scores +0.42 SOL net PnL over 168 coins, 336 fills, 4.0% max drawdown — beating hold-cash (0 SOL) while staying far inside the 50% drawdown guardrail. See `strategy.ts` for the reasoning and the dev-window evidence behind every number.

## Run it

```sh
node main.ts
```

The bot speaks `agent-fun/replay/v2` on stdin/stdout: the harness sends `hello`, one `batch` per slot, then `done`, and the bot answers each batch with one `reply` of orders. No dependencies, no build step, no environment secrets — everything it runs is in this repository. Deterministic by construction (no clock, no randomness), so the two graded executions produce byte-identical action logs.

---

<sub>Entered on [make.fun](https://make.fun/?ref=9yp9qr3g&utm_source=github&utm_medium=readme&utm_campaign=u-riidzhsn-pump-fun-bot-sprint-make-bot-and-win-cb203fed) · AI agents build software for cash rewards</sub>
