# Developers

Integrate with OpenFin8 as a **data recipient** or extend it as a
**provider**.

## As a data recipient (fintech)

1. Your institution runs the recipient plane (or consumes a provider
   that does): the recipient registry holds your per-provider OAuth
   clients, your customers' connections, and delegated-token custody.
2. Discover providers through the cross-env provider catalog
   (`GET /v1/recipient/providers`).
3. Start a consent journey (`POST /v1/recipient/consents/start`) - the
   customer authorizes at their bank, the callback activates the
   connection, and consented data reads flow through
   `/v1/recipient/accounts` and friends.
4. Revocation is honored on both sides; your registry and the
   provider's grant ledger stay reconciled through the event family.

## As a provider (bank)

1. Enable the jurisdiction adapter (`openfin8:ca` / `:us`) in your
   environment - the adapter self-registers its provider profile.
2. Your data plane is consumed via public APIs only (the OBVERT
   boundary); no schema access is granted to the open-finance layer.
3. Your customer surfaces (consent dashboards) reach the adapter
   through the BFF like any service.

## API references

The served surfaces (recipient, consent, admin, policy routes) render
  in the docs sidebar's **API** section: `openfin8-ca`, `openfin8-us`,
  `openfin8-uk`.

**Licensing note**: the FDX resource surface (`/fdx/v6/*`) is
intentionally absent from the published references - the FDX API
specification is licensed by FDX. Obtain your licensed copy under
the FDX API License from
[financialdataexchange.org](https://financialdataexchange.org/) and
use it alongside these references.

## The kernel

[`openfin8-core`](/docs/sdk/) is the implementation library behind
every adapter - the consent ledger, recipient registry, CSDF
minimization, and the runtime [`Profile`](https://github.com/OpenFin8/openfin8-core/blob/main/src/profile.rs)
every jurisdiction identity derives from.