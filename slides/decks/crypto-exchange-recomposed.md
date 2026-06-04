---
title: Crypto Exchange Recomputed
subtitle: Custody inversion through the durable core
slug: crypto-exchange-recomposed
created: 2026-06-04T05:11:46+00:00
status: split-from-defragmenting-user
format: reveal-md-no-build
source_note: "[[Deck Seed - Crypto Exchange Recomputed]]"
origin_deck: "[[Defragmenting the User]]"
---

# Series B

## Crypto exchange recomposed

Custody inversion: the exchange becomes a service, not the holder of the self.

---

## Centralized exchange today

One giant bundle:

- custodial keys/wallets
- account database and KYC
- matching / routing / risk
- statements, tax, support
- bank rails and integrations
- trading UI/API

The exchange is where the user's trading self exists.

---

## The fragmented trading self

Even one exchange account spans:

- chain wallets
- exchange balances
- bank/payment rails
- email/phone/2FA
- tax software
- portfolio trackers
- trading bots/API keys
- support tickets

---

## Agent-core recomposition

The durable core holds:

- signing policy and key custody
- approvals firewall
- KYC attestations/proofs
- risk limits and preferences
- tax/history records
- recovery plan
- venue trust memory

Venues, matching, market data, compliance, settlement, and tax become services around it.

---

## Claim discipline

Do not say “keys in a chatbot.”

Say:

> The key is not in the exchange. The key is not in the chat. The key is in the governed core.

Policy-gated signing. Recovery. Backups. Explicit approval for irreversible transfers.
