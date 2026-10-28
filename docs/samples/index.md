# Samples

Reference integrations for the OpenFin8 surfaces.

## The recipient journey (e2e)

The platform's E2E suite exercises the full two-ledger ceremony: a
recipient institution discovers a provider, starts a consent, the
customer authorizes at the provider's hosted consent screen, the
callback activates the connection, and consented account data flows
back. See the platform repository's `bank8-e2e` for the journey
suite - it runs against a live fleet.

## The hosted consent screen

The consent RFW screens (`/v1/auth/consent/*`) render in the
platform's consent host: the customer sees the scopes, selects
accounts, and approves or denies. The screen definitions are
jurisdiction-aware through the [`Profile`](https://github.com/OpenFin8/openfin8-core/blob/main/src/profile.rs)
scope vocabulary - the same ceremony serves every market.

## Webhook notifications

Subscribers register callback URLs (`/fdx/v6/notification-subscriptions`
on the served surface); deliveries are HMAC-signed with the
per-subscription secret and retried with backoff. The eFintech-style
recipient app consumes the same event family for reconciliation.

## What's deliberately not here

The FDX wire examples (`/fdx/v6/*` request/response payloads) are
licensed material - sample collections ship with the customer's own
licensed specification rather than these repositories.