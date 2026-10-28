# OpenFin8:CA - Canadian Open Banking

Canadian open banking (FDX v6.x, consumer-driven banking): consent-managed
account data sharing between a bank (data provider) and registered
third-party data recipients - plus money-movement initiation, event
notifications, and the hosted consent UI.

## Summary

OpenFin8:CA is the Canadian adapter over the openfin8-core kernel: it
serves the provider role (`/fdx/v6/*` from the configured
`OPENFIN8_CA_VERSION`) and the recipient surfaces
(`/v1/recipient/*`) used by fintech apps. The provider and the
recipient are independent organizations: the recipient registers its
OAuth client at the provider's authorization server (DCR, RFC 7591),
and each institution keeps its own consent records - the two-ledger
model.

The Canadian profile carries its own version cadence, its own
per-environment enablement, and the extension hooks for the federal
consumer-driven-banking framework (directory participation, bilingual
consent screens, Canadian payment-rail identifiers) as those
requirements finalize.

- [Architecture (DDD)](design)
- [Security](security)
- [Overview (repo README)](/docs/reference/openfin8-ca/)
- The API reference renders in the docs sidebar's **API** section (`openfin8-ca`).