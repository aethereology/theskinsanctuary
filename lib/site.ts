/**
 * The Skin Sanctuary Co — Site Configuration
 * Single source of truth for brand, contact, booking, and CTA information
 */

export const site = {
  // Brand Identity
  brand: "The Skin Sanctuary Co",
  domain: "theskinsanctuary.co",
  baseUrl: "https://theskinsanctuary.co",
  tagline:
    "Korean lash lifts, brow artistry, refined waxing, and curated aftercare.",
  description:
    "Monica Talbot's boutique beauty studio in Chesapeake, VA — Korean lash lifts, brow lamination, refined waxing, curated aftercare products, and practical beauty guidance.",

  // Service Areas
  serviceAreas: ["Chesapeake, VA"],

  // Contact Information
  contact: {
    phone: {
      value: "757-679-1991",
      confirmed: true,
    },
    phoneHref: "tel:+17576791991",
    email: {
      value: null,
      confirmed: false,
    },
    address: {
      value: null,
      confirmed: false,
    },
    city: "Chesapeake, VA",
    hours: {
      value: "Monday-Thursday 10 AM-5 PM, Friday 10 AM-4 PM, Saturday-Sunday Closed",
      confirmed: true,
    },
  },

  // Operating Hours (structured for schema)
  hoursStructured: {
    mon: { open: "10:00", close: "17:00" },
    tue: { open: "10:00", close: "17:00" },
    wed: { open: "10:00", close: "17:00" },
    thu: { open: "10:00", close: "17:00" },
    fri: { open: "10:00", close: "16:00" },
    sat: "Closed",
    sun: "Closed",
  },

  // Social Media
  social: {
    instagram: {
      value: "https://www.instagram.com/theskinsanctuary_co",
      confirmed: true,
    },
  },

  // Booking
  booking: {
    platform: "Calendly",
    url: "https://calendly.com/theskinsanctuary",
    confirmed: true,
  },

  // Pricing
  pricing: {
    mode: "exact",
    published: true,
  },

  // Call-to-Action
  cta: {
    primary: {
      label: "book my lash lift",
      href: "https://calendly.com/theskinsanctuary",
    },
    secondary: {
      label: "view services",
      href: "/services",
    },
  },

  // Trust Metrics
  trust: {
    rating: 5.0,
    reviewCount: 12,
    credentials: "Virginia-Licensed Esthetician · Chesapeake",
  },
} as const;

// Type definitions
export type Site = typeof site;
