import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "category",
      label: "ais",
      items: [
        {
          type: "doc",
          id: "api/openfin8-eu/get-accounts",
          label: "`GET /v1/ais/consents/{consentId}/accounts`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/openfin8-eu/get-balances",
          label: "`GET /v1/ais/consents/{consentId}/accounts/{accountId}/balances`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/openfin8-eu/get-transactions",
          label: "`GET /v1/ais/consents/{consentId}/accounts/{accountId}/transactions`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/openfin8-eu/get-card-accounts",
          label: "`GET /v1/ais/consents/{consentId}/card-accounts`",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "consent",
      items: [
        {
          type: "doc",
          id: "api/openfin8-eu/create-consent",
          label: "`POST /v1/consents`",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/openfin8-eu/get-consent",
          label: "`GET /v1/consents/{id}`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/openfin8-eu/list-authorisations",
          label: "`GET /v1/consents/{id}/authorisations`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/openfin8-eu/start-authorisation",
          label: "`POST /v1/consents/{id}/authorisations`",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/openfin8-eu/get-authorisation",
          label: "`GET /v1/consents/{id}/authorisations/{authorisationId}`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/openfin8-eu/get-consent-status",
          label: "`GET /v1/consents/{id}/status`",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "sca",
      items: [
        {
          type: "doc",
          id: "api/openfin8-eu/redirect-callback",
          label: "`POST /v1/consents/{id}/authorisations/{authorisationId}/callback`",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/openfin8-eu/start-decoupled",
          label: "`POST /v1/consents/{id}/authorisations/{authorisationId}/decoupled`",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/openfin8-eu/start-embedded",
          label: "`POST /v1/consents/{id}/authorisations/{authorisationId}/embedded`",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/openfin8-eu/answer-embedded",
          label: "`POST /v1/consents/{id}/authorisations/{authorisationId}/embedded/answer`",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/openfin8-eu/start-redirect",
          label: "`POST /v1/consents/{id}/authorisations/{authorisationId}/redirect`",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/openfin8-eu/poll-decoupled",
          label: "`GET /v1/consents/{id}/authorisations/{authorisationId}/status`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/openfin8-eu/execute-step-handler",
          label: "`POST /v1/internal/steps/execute`",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "extended",
      items: [
        {
          type: "doc",
          id: "api/openfin8-eu/discovery",
          label: "`GET /v1/discovery`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/openfin8-eu/download-document",
          label: "`GET /v1/documents/{documentId}`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/openfin8-eu/list-mandates",
          label: "`GET /v1/mandates`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/openfin8-eu/list-push-ais",
          label: "`GET /v1/push-ais`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/openfin8-eu/list-request-to-pay",
          label: "`GET /v1/request-to-pay`",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "payments",
      items: [
        {
          type: "doc",
          id: "api/openfin8-eu/create-payment",
          label: "`POST /v1/payments/{paymentProduct}`",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/openfin8-eu/get-payment-status",
          label: "`GET /v1/payments/{paymentProduct}/{paymentId}`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/openfin8-eu/cancel-payment",
          label: "`DELETE /v1/payments/{paymentProduct}/{paymentId}`",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/openfin8-eu/create-basket",
          label: "`POST /v1/signing-baskets`",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/openfin8-eu/get-basket",
          label: "`GET /v1/signing-baskets/{basketId}`",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "piis",
      items: [
        {
          type: "doc",
          id: "api/openfin8-eu/confirm-funds",
          label: "`POST /v1/piis/consents/{consentId}/funds-confirmations`",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
