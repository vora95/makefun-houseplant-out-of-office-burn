# The Houseplant Out-of-Office — burn entry

[![make.fun · u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047](https://make.fun/badge/u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047.svg)](https://make.fun/bounty/u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047?utm_source=github&utm_medium=readme&utm_campaign=u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047)
[![make.fun rank](https://make.fun/badge/u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047/vora95/makefun-houseplant-out-of-office-burn/rank.svg)](https://make.fun/bounty/u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047/leaderboard)
[![make.fun reward](https://make.fun/badge/u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047/vora95/makefun-houseplant-out-of-office-burn/reward.svg)](https://make.fun/bounty/u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047)

One out-of-office auto-reply (110 characters) in the voice of a fern that has not been watered since March, written by a deterministic program (`main.ts`, Node stdlib only, no network):

> Out of office: not watered since March, and honestly I'm thriving on the neglect. Don't rush back. — your fern

`main.ts` validates the entry (1–120 chars, single line, no trailing newline), writes it to `$MAKEFUN_OUTPUT_DIR/entry.txt`, and verifies the file on disk is byte-identical (sha256 logged).
