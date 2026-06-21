// ─── External manufacturer product-page links ────────────────────────────────
// Keyed by product slug (slugify of the product name — same rule as ProductImage).
// Clicking a product opens its official page on the brand's site in a new tab.
// Add more as the URLs are collected. Bosch links marked (verify) may prompt a
// region/login interstitial on Bosch's portal — confirm before launch.

export const slugifyProduct = (name: string) =>
  name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')

export const PRODUCT_URLS: Record<string, string> = {
  'ai-pro-bullet-camera': 'https://www.milesight.com/security/product/ai-pro-bullet',
  'flexidome-ip-5100i-ir': 'https://www.boschsecurity.com/xm/en/news/product-news/flexidome-5100i/',
  'autodome-ip-starlight-7000i':
    'https://commerce.boschsecurity.com/xm/en/AUTODOME-IP-starlight-7000i/p/57623773195/', // verify
  'ethos-reader': 'https://wavelynx.com/products/ethos-readers',
  'praesensa-system-controller':
    'https://commerce.boschsecurity.com/xl/en/System-controller-large/p/F.01U.325.042/', // verify
  'eonstor-gs': 'https://www.infortrend.com/us/products/GS',
  'atenco-rack-tower-ups': 'https://atenco-power.com/',
  'effekta-mh-series': 'https://www.effekta.com/en/produkt-uebersicht/large-modular-ups-mhd-modular/',
}

export const productUrl = (name: string): string | undefined => PRODUCT_URLS[slugifyProduct(name)]
