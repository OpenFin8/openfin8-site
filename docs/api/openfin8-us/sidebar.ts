import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "category",
      label: "policy",
      link: {
        type: "doc",
        id: "api/openfin8-us/openfin-8-us",
      },
      items: [
        {
          type: "doc",
          id: "api/openfin8-us/policy-list-attributes",
          label: "`GET /v1/admin/attributes`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/openfin8-us/policy-put-attribute",
          label: "`PUT /v1/admin/attributes`",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/openfin8-us/policy-delete-attribute",
          label: "`DELETE /v1/admin/attributes`",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/openfin8-us/policy-list-sets",
          label: "`GET /v1/admin/policy-sets`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/openfin8-us/policy-mode-disable",
          label: "`POST /v1/admin/policy-sets/disable`",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/openfin8-us/policy-mode-enforce",
          label: "`POST /v1/admin/policy-sets/enforce`",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/openfin8-us/policy-mode-shadow",
          label: "`POST /v1/admin/policy-sets/shadow`",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/openfin8-us/policy-get-set",
          label: "`GET /v1/admin/policy-sets/{name}`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/openfin8-us/policy-put-set",
          label: "`PUT /v1/admin/policy-sets/{name}`",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/openfin8-us/policy-delete-set",
          label: "`DELETE /v1/admin/policy-sets/{name}`",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/openfin8-us/policy-test-set",
          label: "`POST /v1/admin/policy-sets/{name}/test`",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/openfin8-us/policy-list-relations",
          label: "`GET /v1/admin/relations`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/openfin8-us/policy-put-relation",
          label: "`PUT /v1/admin/relations`",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/openfin8-us/policy-delete-relation",
          label: "`DELETE /v1/admin/relations`",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/openfin8-us/policy-check-relation",
          label: "`GET /v1/admin/relations/check`",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "open-banking",
      items: [
        {
          type: "doc",
          id: "api/openfin8-us/list-admin-audit",
          label: "`GET /v1/admin/audit`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/openfin8-us/list-all-consents",
          label: "`GET /v1/admin/consents`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/openfin8-us/get-provider-profile",
          label: "`GET /v1/admin/provider-profile`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/openfin8-us/update-provider-profile",
          label: "`PUT /v1/admin/provider-profile`",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/openfin8-us/list-recipients",
          label: "`GET /v1/admin/recipients`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/openfin8-us/activate-recipient",
          label: "`POST /v1/admin/recipients/{id}/activate`",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/openfin8-us/suspend-recipient",
          label: "`POST /v1/admin/recipients/{id}/suspend`",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/openfin8-us/list-recipient-accounts",
          label: "`GET /v1/recipient/accounts`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/openfin8-us/get-recipient-account-transactions",
          label: "`GET /v1/recipient/accounts/{id}/transactions`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/openfin8-us/list-recipient-consents",
          label: "`GET /v1/recipient/consents`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/openfin8-us/start-consent",
          label: "`POST /v1/recipient/consents/start`",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/openfin8-us/get-recipient-consent",
          label: "`GET /v1/recipient/consents/{id}`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/openfin8-us/refresh-consent",
          label: "`POST /v1/recipient/consents/{id}/refresh`",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/openfin8-us/revoke-recipient-consent",
          label: "`POST /v1/recipient/consents/{id}/revoke`",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/openfin8-us/list-notifications",
          label: "`GET /v1/recipient/notifications`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/openfin8-us/list-recipient-providers",
          label: "`GET /v1/recipient/providers`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/openfin8-us/get-recipient-provider",
          label: "`GET /v1/recipient/providers/{id}`",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "admin-ui",
      items: [
        {
          type: "doc",
          id: "api/openfin8-us/get-admin-ui",
          label: "`GET /v1/admin/ui/{page}`",
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
          id: "api/openfin8-us/auth-consent-accounts",
          label: "`GET /v1/auth/consent/accounts`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/openfin8-us/auth-consent-approve",
          label: "`POST /v1/auth/consent/approve`",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/openfin8-us/auth-consent-deny",
          label: "`POST /v1/auth/consent/deny`",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/openfin8-us/auth-consent-ui",
          label: "`GET /v1/auth/consent/ui`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/openfin8-us/list-consents",
          label: "`GET /v1/consents`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/openfin8-us/create-consent",
          label: "`POST /v1/consents`",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/openfin8-us/get-consent",
          label: "`GET /v1/consents/{id}`",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/openfin8-us/revoke-consent",
          label: "`POST /v1/consents/{id}/revoke`",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "meta",
      items: [
        {
          type: "doc",
          id: "api/openfin8-us/health",
          label: "`GET /v1/health`",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "internal",
      items: [
        {
          type: "doc",
          id: "api/openfin8-us/execute-step",
          label: "`POST /v1/internal/steps/execute`",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
