# MBALEE ROYAL Storefront

Custom influencer-led Shopify storefront for MBALEE ROYAL, South Africa.

## Included
- Editorial influencer homepage using the supplied campaign image
- Live Shopify product import via Storefront GraphQL API
- Shop page with New / Pre-Owned / Accessories filters
- Product detail pages and variant selection
- Persistent cart stored in the browser
- Shopify-hosted secure checkout, so the active Shopify payment gateway handles payment
- ZAR-friendly formatting and responsive mobile/desktop layout

## Connect Shopify
1. Copy `.env.example` to `.env.local`.
2. Put the Storefront API token in `SHOPIFY_STOREFRONT_ACCESS_TOKEN`.
3. Keep the provided store domain: `jwyi0f-qy.myshopify.com`.
4. Run `npm install` and `npm run dev`.

Do not commit `.env.local` to Git.

## Deploy
Create a Vercel project, add the same 3 environment variables, and deploy. The site reads products directly from Shopify at runtime; no manual product duplication is required.

## Shopify catalogue note
For cleaner category filtering, tag products consistently, for example:
- `new`
- `pre-owned`
- `accessories`

The starter also attempts to infer categories from product names/types/tags.
