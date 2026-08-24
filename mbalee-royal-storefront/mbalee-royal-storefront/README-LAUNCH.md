# MBALEE ROYAL — Production Launch

This is the approved Premium V3.1 production package.

## Existing Vercel configuration to keep

Do not expose the Shopify token in GitHub. Keep these values in Vercel Environment Variables:

- SHOPIFY_STORE_DOMAIN=jwyi0f-qy.myshopify.com
- SHOPIFY_STOREFRONT_ACCESS_TOKEN=<existing Storefront API token>
- SHOPIFY_API_VERSION=2025-10

## Upload to the existing GitHub project

Upload the CONTENTS of this folder into the same inner GitHub directory currently used as the Vercel Root Directory. Replace matching files and commit to `main`.

Vercel should redeploy automatically after the GitHub commit.
