# OpenFin8:UK - UK Open Banking

UK open banking: the Open Banking Limited (OBL) Read/Write API ASPSP
surface (v3.1.x, v4.0.1 configurable) - serving Account Information
Service Providers, Payment Initiation Service Providers, and
Card-Based Payment Instrument Issuers.

## Summary

OpenFin8:UK **implements the OB surface** (OBARCH-5, first full pass):
the first adapter with a non-FDX wire. The landed surface:

- the **intent-based consent model** - the client-credentials staging
  into the kernel's `awaiting_authorization` + `intent_payload`, the
  OB four-state machine (`AwaitingAuthorisation`/`Authorised`/
  `Rejected`/`Consumed` + terminal `Revoked`), the authorization
  observation path, the revocation→400 rule, and the 24h
  staged-intent expiry sweep;
- the **FAPI 1 Advanced ceremony + detached JWS signing** - the OB
  Directory `crit`/`iss`/`tan`/`iat` JOSE-header validation, the
  fail-closed verdicts (the Directory down → 503, never skip-verify),
  the DCR with the software-statement assertion, and the hybrid
  request-object shape binding the `openbanking-intent-id`;
- the **`{Data, Links, Meta}` envelope + the OBL error semantics** -
  `OBErrorResponse1` with the `UK.OBIE.*` vocabulary, the
  conditional-field exclusion, the 400-vs-404 rules, the
  `x-idempotency-key` discipline;
- the **aisp/pisp/cbpii surfaces** - the account/sub-resource reads
  behind the permission chokepoint (the Ledger proxy lane); domestic
  payments + VRP (the control parameters enforced at initiation
  time); the funds confirmations (the Ledger balance verdict); and
  the OBL event notifications (webhook + aggregated-polling).

File payments answer the honest 404 (the decided follow-on); the
FAPI browser PSU-authorization page is the recipient-app story.

UK specifications are MIT Open Licensed - unlike the FDX adapters,
this one publishes the OB resource paths with the OBL notice
preserved (17 served operations).

- [Architecture (DDD)](design)
- [Security](security)
- [Overview (repo README)](/docs/reference/openfin8-uk/)