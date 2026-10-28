# Security

> OpenFin8 inherits the platform security model by construction. This
> page covers what that means for open-finance data sharing; the
> canonical platform model is the platform's own
> [SECURITY.md](https://github.com/Sentin8/sentin8/blob/main/SECURITY.md).

## The consent boundary

- **No consent, no data.** Every provider route passes the consent
  middleware (valid, unexpired, scope-covered) *on top of* row-level
  security. A route cannot bypass it: the provider surface mounts as a
  sub-router behind the middleware.
- **Revocation is immediate.** A revoked consent stops serving on the
  very next call; revoked consents are terminal - introspection can
  never revive one.
- **Two ledgers.** The provider's grant ledger and the recipient's
  consent registry live in separate tenants. No cross-tenant SQL ever
  exists - either institution may run any technology.

## Data minimization

Responses are projected to the granted CSDF clusters before
serialization, narrowed by scope, product category, and requested
fields. Unknown scopes grant nothing (fail-closed).

## Secrets and tokens

- Delegated provider tokens and webhook HMAC secrets are stored as
  `sentin8-secrets://` references - never plaintext in any column.
- Provider tokens are sender-constrained (DPoP); the recipient's
  PKCE verifier custody follows the OAuth client.
- Webhook notifications are HMAC-signed per subscription with retry
  backoff; exhausted deliveries are triaged, never dropped.

## Tenant isolation and the vertical boundary

- Every domain table is `FORCE ROW LEVEL SECURITY` on `env_id`; the
  same-transaction tenant-context discipline is enforced in every
  handler.
- **The OBVERT boundary**: OpenFin8 never reads another vertical's
  database - bank8's Ledger/Payments are consumed via their public
  APIs and the `bank8::` SDK contracts only.

## Specification licensing

The FDX API specification is licensed under the FDX API License
Agreement and distributed exclusively by FDX. OpenFin8 repositories
never publish it - each adapter's published spec carries
OpenFin8-owned routes only, enforced by a CI drift guard, and
customers supply their licensed copy under gitignored `specs/`. The
OBL (UK) specifications are MIT Open Licensed and may be vendored
with the notice.