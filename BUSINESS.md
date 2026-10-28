# OpenFin8:Site - Business Requirements & Functionality

> Audience: product owners, business analysts, and anyone evaluating what
> the openfin8.dev website **does for the business**. For architecture
> read `README.md`; the content policy is `docs/security/` on the site.

## 1. Business Purpose

openfin8-site is **the public face of the openfin8 vertical**:
[openfin8.dev](https://openfin8.dev/). It delivers:

- **The buyer's evaluation surface** - the complete story of the
  open-finance vertical: what each jurisdiction adapter does, the
  consent/security model, the kernel, and the markets roadmap - so a
  bank or fintech can evaluate OpenFin8 without reading code.
- **The developer reference** - the generated, interactive API
  references for every OpenFin8-owned route, harvested and rendered
  from the service repositories on every change.
- **The specification-licensing boundary, publicly enforced** - the
  site publishes **only OpenFin8-owned API surfaces**; the licensed
  FDX wire is never published anywhere the site renders (the site's
  spec pipeline inherits the services' publication-guarded specs).
- **The composition story** - bank8.dev and openfin8.dev cross-link:
  each vertical's site carries its own content and hands off to the
  other, mirroring the architecture.

## 2. Business Scope (What the Site Provides)

| # | Capability area | What the business gets |
|---|---|---|
| 1 | Landing page | The vertical's positioning: consent-first open finance, every jurisdiction |
| 2 | Product pages | Per-market pages (CA, US serving; UK honestly marked in-design) with architecture + security sections |
| 3 | API references | Interactive, generated references (harvest + gen-api-docs pipeline) for `openfin8-ca`, `openfin8-us`, `openfin8-uk` |
| 4 | Security page | The consent boundary, data minimization, the OBVERT boundary, and the spec-licensing policy in business language |
| 5 | Developers page | Integration guides: recipient journeys, provider composition, the licensing note for the FDX wire |
| 6 | Samples page | Reference journeys (the two-ledger ceremony, webhooks) and what is deliberately not shown (licensed payloads) |
| 7 | Kernel section | The openfin8-core SDK section - the library every adapter embeds |
| 8 | Reference section | The harvested per-repo docs (README, DESIGN, BUSINESS, SECURITY) - the repositories remain the source of truth |
| 9 | Search | Local site search over the full content set |

**What the site does NOT own (business boundary):**

| Out of scope | Owned by |
|---|---|
| The service documentation itself | The repositories (the site harvests it; it never edits it) |
| The API specs | The service repos' publication-guarded `docs/openapi.json` |
| The bank8 content | bank8.dev (cross-linked, never duplicated) |

## 3. Business Capabilities

### 3.1 The harvest pipeline

Every CI run (and the weekly schedule) harvests the reference
documentation from the repositories, stages the published API specs,
and regenerates the interactive references - the site never trails
the code by more than a build. The repositories stay the single
source of truth.

### 3.2 The publication policy, rendered

The site renders exactly what the services publish: OpenFin8-owned
routes only. The FDX resource surface appears nowhere on openfin8.dev
- the licensing note in the developers/samples pages points
integrators to their own licensed specification.

## 4. Content Governance

- Content is either authored on the site (landing, security,
  developers, samples, the docs root) or harvested (reference, API)
  - never forked from the repos.
- Harvested READMEs must carry GitHub-absolute links (the house
  pattern) so rendered pages resolve - enforced at the source repos,
  not by site-side curation.
- UK status is marked in-design until OBARCH-5 ships - the site never
  overstates readiness.

## 5. Business Rules & Invariants

- No licensed specification material is ever published or rendered -
  the site inherits the services' drift-guarded specs.
- The build fails on broken links (the site never ships dead ends).
- The custom domain is `openfin8.dev` (CNAME); Pages serves via the
  workflow build + deploy pipeline.

## 6. Target-User Roles & Use Cases

| Role | Use case |
|---|---|
| Bank CTO / product owner | Evaluates the vertical: the markets table, the security model, the composition story |
| Fintech integrator | Reads the API references and the recipient journey; brings their licensed FDX spec for the wire |
| Regulator / auditor | Reads the consent + licensing posture in business language |
| OpenFin8 engineers | The site is the public check of the publication policy - CI green means policy holds |

## 7. KPIs / Success Criteria

- **Freshness**: harvested content within one CI run of the repos.
- **Policy visibility**: zero licensed-material findings, ever
  (structural: the spec pipeline only carries published specs).
- **Discoverability**: openfin8.dev reachable from bank8.dev, the
  org profile, and the group README.

## 8. Dependencies & Reliance on Other Services

| Dependency | What the site gets |
|---|---|
| @sentin8/site-engine | The Docusaurus config/sidebar factories, the harvest + gen pipeline (site-engine-v0.9.21) |
| The openfin8 service repos | The harvested documentation + published API specs (via sibling checkout locally, raw GitHub in CI) |
| GitHub Pages | Hosting + the openfin8.dev custom domain |

## 9. Acceptance Criteria

- CI green: harvest → build (SSG + broken-link check) → Pages deploy.
- The site serves at openfin8.dev once the DNS record points at
  GitHub Pages.
- The API references render 43 operations each for CA and US (the
  publication-guarded surfaces).

## 10. Open Business Questions

- Should the site grow a per-market conformance/evidence section
  when UK lands (OBL conformance results)?
- Should the harvested reference section carry per-unit CHANGELOGs
  (currently skipped where repos lack them)?
- Does the showcase want live links to recipient-fintech case studies
  as they exist (none yet - the section awaits real integrations)?

---

**Architecture & Design:** openfin8:site and its underlying concepts were
designed by [Hamid Jahanzad](https://www.linkedin.com/in/hamidjahanzad/).