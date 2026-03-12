const siteConfigs = {
  // ─────────────────────────────────────────────
  //  Client 1 → khodor.vercel.app/watchesStore
  // ─────────────────────────────────────────────
  watchesStore: {
    /** ── Meta (browser tab / SEO) ──────────── */
    meta: {
      title: "مُسْتَقَر – ساعات فاخرة",
      description: "أصالة تُكمل شخصيتك",
    },

    /** ── TopBar ────────────────────────────── */
    topBar: {
      // add any top-bar props your component needs, e.g.:
      // announcementText: "شحن مجاني على الطلبات فوق 500$",
    },

    /** ── Hero Section ──────────────────────── */
    hero: {
      // Images live in /public/sites/watchesStore/
      bannerImage: "/sites/watchesStore/Hero-banner.jpg",
      logoImage: "/sites/watchesStore/Logo-White.svg",

      storeName: "مُــسْـتـقَـــــــر",
      tagline: "أصالة تُكمل شخصيتك",

      location: {
        city: "مدينة إدلب",
        address: "جنوب ساحة الساعة - بناية...",
      },
    },

    /** ── Category Sections ─────────────────── */
    categories: [
      {
        id: 1,
        // …your existing category fields
      },
    ],

    /** ── Features Section ──────────────────── */
    features: {
      // add feature props here
    },

    /** ── Footer ────────────────────────────── */
    footer: {
      // add footer props here
    },
  },

  // ─────────────────────────────────────────────
  //  Client 2 → khodor.vercel.app/coffeeShop
  //  (scaffold – fill in when ready)
  // ─────────────────────────────────────────────
  coffeeShop: {
    meta: {
      title: "قهوتي – أفضل قهوة في المدينة",
      description: "رائحة الصباح، طعم اللحظة",
    },
    topBar: {},
    hero: {
      bannerImage: "/sites/coffeeShop/Hero-banner.jpg",
      logoImage: "/sites/coffeeShop/Logo-White.svg",
      storeName: "قهوتي",
      tagline: "رائحة الصباح، طعم اللحظة",
      location: {
        city: "مدينة حلب",
        address: "شارع النيال - بناية...",
      },
    },
    categories: [],
    features: {},
    footer: {},
  },
};

/**
 * Returns the config for a given URL slug, or null if not found.
 * @param {string} slug  - e.g. "watchesStore"
 */
export function getSiteConfig(slug) {
  return siteConfigs[slug] ?? null;
}

/**
 * Returns all registered slugs (useful for generateStaticParams).
 */
export function getAllSiteSlugs() {
  return Object.keys(siteConfigs);
}
