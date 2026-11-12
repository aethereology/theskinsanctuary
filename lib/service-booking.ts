/**
 * Direct Calendly event URLs previously used by this website (prior to the
 * general-booking-link migration). The business owner reconfirmed this Calendly
 * account and its 16 current event names/prices on November 12, 2026.
 *
 * Important: Calendly slugs are not automatically renamed when an event is
 * renamed or copied. Three historical URLs have misleading clone names:
 * fullArmWax, halfArmWax and bikiniWax. Those mappings come from the older
 * repository, not invented URLs. Confirm the *event title* in Calendly before
 * merging. If one has changed, replace only the value in this file.
 *
 * Keep the generic booking homepage in site.booking.url for buttons that do
 * not refer to a particular service.
 */
const BASE = "https://calendly.com/theskinsanctuary";

export const calendlyServiceUrls = {
  koreanLashLift: `${BASE}/kll`,
  browWaxLamiTint: `${BASE}/new-meeting`,
  softGirlPackage: `${BASE}/soft-girl-summer-255`,
  lashFillExistingClients: `${BASE}/lash-fill-existing-clients-95`,
  patchTest: `${BASE}/patch-test-0`,
  browLamiWax: `${BASE}/browlami`,
  browWaxTint: `${BASE}/brow-wax-tint`,
  browWax: `${BASE}/brow-wax`,
  fullLegWax: `${BASE}/full-leg-wax`,
  halfLegWax: `${BASE}/half-leg-wax`,
  fullArmWax: `${BASE}/half-arm-wax-30-clone`,
  halfArmWax: `${BASE}/underarm-wax-30-clone`,
  underarmWax: `${BASE}/underarm-wax`,
  lipWax: `${BASE}/lip-wax`,
  bikiniWax: `${BASE}/brazilian-wax-`,
  brazilianWax: `${BASE}/brazilian-wax`,
} as const;
