# OpenFin8:EU - European Open Finance

European open finance (Berlin Group openFinance V2): AIS/PIS/PIIS
over the XS2A wire - the three SCA approaches (redirect mandatory;
decoupled + embedded conditional per the RTS), eIDAS QWAC/QSEALC
certificates, bank-by-bank DCR (no central directory), consent
authorisation pre-steps, and signing baskets.

## Summary

OpenFin8:EU is the European adapter over the openfin8-core kernel:
the XS2A Account Servicing Payment Service Provider surface -
account information, payment initiation, and confirmation of funds -
over the Berlin Group openFinance framework (the NextGenPSD2
successor). The ceremony is its own family: bank-by-bank DCR against
each ASPSP's own authorization server (no central directory - the EU
trust model), eIDAS QWAC (TLS client auth) + QSEALC (request
signing) certificates as the trust anchors, and the three SCA
interaction modes between the PSU, the ASPSP, and the TPP.

The consent + authorisation model is the adapter's defining surface:
unlike a single-grant model, every XS2A consent carries explicit
authorisation sub-resources - each SCA ceremony is its own object,
tracked separately from the consent grant (the four-state consent
machine `received`/`valid`/`rejected`/`expired` over the kernel's
`awaiting_authorization` state; the pre-step selects the SCA
approach before the PSU ceremony begins). SCA success is never
conflated with the consent grant: two separate state machines.

- [Architecture (DDD)](design)
- [Security](security)
- [Overview (repo README)](/docs/reference/openfin8-eu/)
- The API reference renders in the docs sidebar's **API** section
(`openfin8-eu`).