# OpenFin8:US - US Open Banking

US open banking (FDX v6.x): consent-managed account data sharing
between a bank (data provider) and registered third-party data
recipients - the US adapter over the openfin8-core kernel.

## Summary

OpenFin8:US is byte-for-byte the same implementation as
OpenFin8:CA - the kernel is shared, the Profile is not. It serves
the identical provider/recipient surface with US identity
(`openfin8:us`, `OPENFIN8_US_VERSION`, `openfin8_us` schema) and an
independent version cadence: a bank operating both markets enables
and upgrades each independently per environment.

- [Architecture (DDD)](design)
- [Security](security)
- [Overview (repo README)](/docs/reference/openfin8-us/)
- The API reference renders in the docs sidebar's **API** section (`openfin8-us`).