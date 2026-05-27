// lib/data.ts — Content sourced from the design briefs (claude.md + design.md).
// Single source of truth for service tables, hours, contact, reviews, schema, and metadata.

export const business = {
  name: "The Skin Sanctuary Co",
  siteUrl: "https://theskinsanctuary.co",
  phoneDisplay: "619-458-2483",
  phoneHref: "tel:+16194582483",
  address: "1009 Greenbrier Pkwy, Chesapeake, VA 23320",
  street: "1009 Greenbrier Pkwy",
  city: "Chesapeake",
  region: "VA",
  postalCode: "23320",
  bookingUrl:
    "https://book.squareup.com/appointments/m81s4l6y20r3qn/location/LJ42QHKWZRHE6/bookings",
  instagramUrl: "https://www.instagram.com/theskinsanctuary_co",
  googleProfileUrl: "https://share.google/HkviCFNpwJN3Lmkhd",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=1009+Greenbrier+Pkwy+Chesapeake+VA+23320",
} as const;

export type ServiceItem = {
  name: string;
  price: number | null;
  duration: string;
  description?: string;
  subtitle?: string;
  tag?: string;
};

export type ServiceCategory = {
  n: string;
  category: string;
  intro: string;
  tagline: string;
  items: ServiceItem[];
  note?: string;
};

export const services: ServiceCategory[] = [
  {
    n: "01",
    category: "Facials",
    intro: "Relax, reset, and leave glowing.",
    tagline: "Personalized care for every skin moment.",
    items: [
      { name: "Behind the Scenes", price: 100, duration: "1 hr", description: "A back facial designed to help clear blemishes, exfoliate, and deeply hydrate for smoother, revitalized skin." },
      { name: "Skin-n-out", price: 55, duration: "35 min", description: "A quick glow facial with double cleanse, skin analysis, exfoliation or mask, toner, moisturizer, and SPF." },
      { name: "Welcome Facial", price: 35, duration: "TBD", description: "Active new-client offer. Exact duration and inclusions pending confirmation.", tag: "New client" },
    ],
  },
  {
    n: "02",
    category: "Waxing",
    intro: "Simple, polished waxing services in a clean and welcoming environment.",
    tagline: "Smooth, simple, and thoughtfully done.",
    items: [
      { name: "Bikini", price: 50, duration: "50 min" },
      { name: "Brazilian", price: 55, duration: "50 min" },
      { name: "Full Arms", price: 45, duration: "30 min" },
      { name: "Full Leg", price: 65, duration: "30 min" },
      { name: "Half Arms", price: 25, duration: "30 min" },
      { name: "Half Legs", price: 45, duration: "30 min" },
    ],
    note: "One additional waxing service is pending confirmation and intentionally omitted from this menu.",
  },
  {
    n: "03",
    category: "Brows",
    intro: "From subtle cleanup to fuller, fluffier definition — designed to make your everyday routine easier.",
    tagline: "Clean shape. Soft definition.",
    items: [
      { name: "Brow Babe Trio", price: 125, duration: "50 min", subtitle: "Wax · Lamination · Tint", tag: "Signature" },
      { name: "Lamination", price: 75, duration: "45 min" },
      { name: "Tint", price: 35, duration: "45 min" },
      { name: "Wax", price: 25, duration: "1 hr" },
      { name: "Wax & Lami", price: 85, duration: "1 hr" },
      { name: "Wax & Tint", price: 55, duration: "1 hr" },
    ],
  },
  {
    n: "04",
    category: "Lashes",
    intro: "The Korean Lash Lift & Tint is the standout service here, especially for clients wanting a natural result without extensions.",
    tagline: "A natural lift you'll wake up with.",
    items: [
      { name: "Korean Lash Lift & Tint", price: 130, duration: "1 hr 10 min", description: "A Korean-method lash lift and tint designed for longer-lasting results and a healthier lift.", tag: "Client favorite" },
      { name: "Lash Removal", price: 35, duration: "30 min" },
    ],
  },
  {
    n: "05",
    category: "Packages",
    intro: "Bundle your beauty favorites into one appointment.",
    tagline: "Two of the favorites, in one visit.",
    items: [
      { name: "Soft Girl Summer", price: 255, duration: "2 hrs", description: "Signature Brow Babe plus a Korean Lash Lift in one appointment.", tag: "Best value" },
    ],
  },
];

export type Review = { quote: string; author: string; theme: string };

export const reviewsFeatured: Review[] = [
  { quote: "Monica was so sweet and had amazing attention to detail.", author: "Angelica Shucet", theme: "Attention to detail" },
  { quote: "The suite feels like a luxurious oasis!", author: "Jessica Conley", theme: "Environment" },
  { quote: "I am OBSESSED with the results every time.", author: "Gabi Center", theme: "Repeat trust" },
];

export const reviewsAll: Review[] = [
  { quote: "Monica was so sweet and had amazing attention to detail.", author: "Angelica Shucet", theme: "Attention to detail" },
  { quote: "The suite feels like a luxurious oasis!", author: "Jessica Conley", theme: "Environment" },
  { quote: "I am OBSESSED with the results every time.", author: "Gabi Center", theme: "Repeat trust" },
  { quote: "Super sweet and welcoming environment.", author: "Jhasmelly Ventura", theme: "Warm experience" },
  { quote: "The environment she works in is amazing and so relaxing.", author: "Melanie Clore", theme: "Relaxing studio" },
  { quote: "This lift gives me the perfect natural glam I need.", author: "Lesley Martinez", theme: "Natural lash result" },
  { quote: "The facial was just what I needed, and I left feeling refreshed and new.", author: "Candy Robertson", theme: "Facial result" },
  { quote: "Such a nice, welcoming environment.", author: "Emilee Quinn", theme: "Comfort" },
  { quote: "Seriously THE BEST!! Monica is so talented.", author: "Makaira Kennedy", theme: "Talent and trust" },
];

export const themes: string[] = [
  "Welcoming environment", "Attention to detail", "Lash-lift results",
  "Relaxing facials", "Repeat clients", "Trusted recommendations",
];

export type Faq = { q: string; a: string };

export const faq: Faq[] = [
  { q: "Do I need an appointment?", a: "Yes. Booking ahead is the best way to reserve your service and your preferred time. Walk-ins aren't available." },
  { q: "Where are you located?", a: "1009 Greenbrier Pkwy, Chesapeake, VA 23320 — easy parking, easy to find, and a calm space the moment you walk in." },
  { q: "Do you offer a first-time visit option?", a: "Yes — the $35 Welcome Facial is active for new clients. It's the easiest way to experience the studio." },
  { q: "What services do you offer?", a: "Facials, lashes, brows, and waxing. The Korean Lash Lift & Tint is a client favorite." },
  { q: "What is your cancellation policy?", a: "Appointments canceled or rescheduled with less than 24 hours' notice may be subject to a fee equal to 50% of the scheduled service total." },
];

export const prepFaq: Faq[] = [
  { q: "Arrive with clean skin", a: "Especially for facials and brow/lash services — minimal eye makeup helps Monica do her best work." },
  { q: "Skip strong exfoliants", a: "If you're booked for waxing, avoid retinoids or strong acids on the treatment area for a few days beforehand." },
  { q: "Plan for recovery if you're sensitive", a: "A little redness can be normal post-treatment. Build in buffer time for events." },
  { q: "Not sure which facial?", a: "Book based on time and goals — or text Monica for a quick recommendation." },
];

export const welcomeFaq: Faq[] = [
  { q: "New clients only?", a: "Yes — the Welcome Facial is positioned as an introductory offer for first-time visitors." },
  { q: "How does booking work?", a: "Booking is completed through Square. Tap any Book Now button to start." },
  { q: "Not sure which service to choose?", a: "Start here, or view the full service menu and pick what fits your time and goals." },
];

export const contactFaq: Faq[] = [
  { q: "How do I book?", a: "Use any of the Book Now buttons — they open the Square booking page." },
  { q: "Can I call or text?", a: "Yes — use the phone number listed above. Texting is the fastest way to reach Monica." },
  { q: "When are you open?", a: "Monday through Thursday from 10 AM to 5 PM, and Friday from 10 AM to 4 PM. Closed Saturday and Sunday." },
  { q: "Do you accept walk-ins?", a: "The studio is appointment-only so every client gets unhurried, personal attention." },
];

export type HoursRow = { day: string; hours: string; closed?: boolean };

export const hours: HoursRow[] = [
  { day: "Monday", hours: "10 AM – 5 PM" },
  { day: "Tuesday", hours: "10 AM – 5 PM" },
  { day: "Wednesday", hours: "10 AM – 5 PM" },
  { day: "Thursday", hours: "10 AM – 5 PM" },
  { day: "Friday", hours: "10 AM – 4 PM" },
  { day: "Saturday", hours: "Closed", closed: true },
  { day: "Sunday", hours: "Closed", closed: true },
];

// Mapping JS getDay() index → schedule for "open today" status
export const hoursMap: Record<number, { label: string; h: string; open?: number; close?: number; closed?: boolean }> = {
  0: { label: "Sunday", h: "Closed", closed: true },
  1: { label: "Monday", h: "10 AM – 5 PM", open: 10, close: 17 },
  2: { label: "Tuesday", h: "10 AM – 5 PM", open: 10, close: 17 },
  3: { label: "Wednesday", h: "10 AM – 5 PM", open: 10, close: 17 },
  4: { label: "Thursday", h: "10 AM – 5 PM", open: 10, close: 17 },
  5: { label: "Friday", h: "10 AM – 4 PM", open: 10, close: 16 },
  6: { label: "Saturday", h: "Closed", closed: true },
};

export const trustItems: string[] = [
  "Licensed in VA",
  "5.0 ★ on Google",
  "Facials · Lashes · Brows · Waxing",
  "Chesapeake, VA",
];

export const marquee: string[] = [
  "Welcome Facial · $35",
  "Korean Lash Lift & Tint",
  "Brow Babe Trio",
  "Open Mon–Fri",
  "Booking through Square",
  "Chesapeake, VA",
  "Licensed esthetician",
  "5.0 ★ on Google",
];

export type Policy = { h: string; n: string; p: string };

export const policies: Policy[] = [
  { h: "Cancellation policy", n: "01", p: "Appointments canceled or rescheduled with less than 24 hours' notice may be subject to a fee equal to 50% of the scheduled service total." },
  { h: "Late arrivals", n: "02", p: "Please arrive on time for your appointment. If you are more than 10 minutes late, your service may need to be shortened or rescheduled so the next client is not affected." },
  { h: "No-shows", n: "03", p: "Clients who miss an appointment without notice may be charged 100% of the scheduled service total and may be required to prepay for future bookings." },
  { h: "Booking requirements", n: "04", p: "Some appointments may require a card on file or deposit to secure the booking. You'll see any requirement before you confirm your time on Square." },
];

export const credentials: string[] = [
  "Virginia-licensed esthetician",
  "Chesapeake, Virginia studio",
  "Facials · Lashes · Brows · Waxing",
];

export const loves: [string, string][] = [
  ["A welcoming, friendly environment", "Clients describe Monica as sweet, attentive, and easy to talk to."],
  ["Strong attention to detail", "Every appointment is unhurried, and the work shows."],
  ["Natural-looking lash and brow results", "Polished without ever looking overdone."],
  ["A relaxing, calming studio experience", "A real sanctuary — not a clinic, not a chain."],
];
