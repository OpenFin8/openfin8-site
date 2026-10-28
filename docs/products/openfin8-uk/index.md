# OpenFin8:UK - UK Open Banking

UK open banking: the Open Banking Limited (OBL) Read/Write API ASPSP
surface (v3.1.x, v4.0.1 configurable) - serving Account Information
Service Providers, Payment Initiation Service Providers, and
Card-Based Payment Instrument Issuers.

## Summary

OpenFin8:UK is in **design** (OBARCH-5): the first adapter with a
non-FDX wire. The design covers the FAPI 1 Advanced ceremony
(client-credentials intent staging, hybrid flow with request
objects), intent-based consents over the kernel's
`awaiting_authorization` state, the `{Data, Links, Meta}` response
envelope, detached JWS request/response signing, OB Directory trust,
domestic payments including variable recurring payments (VRP), and
the OBL event-notification API.

UK specifications are MIT Open Licensed - unlike the FDX adapters,
this one may publish the OB resource paths with the OBL notice
preserved.

- [Architecture (DDD)](design)
- [Security](security)
- [Overview (repo README)](/docs/reference/openfin8-uk/)