# The openfin8-core kernel

`openfin8-core` is the open-finance kernel: the library every
jurisdiction adapter embeds. It is a *library crate* - no process
runs on it - and the entire implementation of consent, registry,
minimization, and notifications lives here, shared byte-for-byte
across markets.

## What it contains

| Module | What it is |
|---|---|
| `profile` | the runtime jurisdiction [`Profile`](https://github.com/OpenFin8/openfin8-core/blob/main/src/profile.rs) - every identity string (service type, env prefix, family, schema, scope vocabulary, standard version) derives from one value |
| `consent_records` / `handlers` | the provider grant ledger + lifecycle (seeded from the AS grant event), the consent APIs |
| `csdf` | the data-minimization engine over profile scope vocabularies |
| `event_consumer` / `event_notifications` | the Bus env-init/grant-seed consumers and the HMAC-signed delivery worker |
| `middleware` / `validation` | the consent chokepoint and the route contract |
| `server` / `config` | boot + routes, profile-scoped configuration |
| the wire families | accounts, statements, customers, money movement, PIP, recurring, notifications, discovery |

## How an adapter uses it

Each adapter binary contributes exactly three things: its
`Profile` constructor (`Profile::canada()`, `::united_states()`),
its registration data (policy sets, Shield gates, admin UI), and
its published-spec policy. Adding a market is a constructor and a
binary - never a port.

- [Architecture (DDD)](core/design)
- [Security](core/security)
- [Reference (harvested repo docs)](/docs/reference/core/)