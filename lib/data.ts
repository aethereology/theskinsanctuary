/**
 * The Skin Sanctuary Co — Services, Reviews, and Data
 */

export interface Service {
  name: string;
  price: string;
  description?: string;
  featured?: boolean;
  ctaLabel?: string;
  bookingUrl?: string;
}

export interface ServiceCategory {
  category: string;
  description?: string;
  items: Service[];
}

export interface Review {
  quote: string;
  reviewer?: string;
  service?: string;
}

export interface Product {
  name: string;
  price: string;
  image: string;
  imageAlt: string;
  description: string;
  details?: string[];
  sections?: {
    title: string;
    price?: string;
    description?: string;
    details?: string[];
    timing?: string[];
  }[];
}

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  category: string;
  readTime: string;
  excerpt: string;
  image?: string;
  imageAlt?: string;
  imageFit?: "cover" | "contain";
  imagePosition?: string;
  sections: {
    heading: string;
    body: string;
  }[];
}

// Services data from Calendly menu
export const services: ServiceCategory[] = [
  {
    category: "Signature Services",
    description:
      "The lash and brow work Monica is known for — designed for a polished look that asks very little of your morning.",
    items: [
      {
        name: "Korean Lash Lift & Tint",
        price: "$130",
        description:
          "Our signature lift, refined with the Korean method — a soft, upward curl and rich tint that lasts longer and treats your natural lashes more gently.",
        featured: true,
        ctaLabel: "book my lash lift",
        bookingUrl: "https://calendly.com/monicaemm7/kll?back=1",
      },
      {
        name: "Brow Wax, Lami, Tint",
        price: "$125",
        description:
          "Shaping wax, lamination, and a custom tint in one sitting — fuller, brushed-up brows mapped to the architecture of your face.",
        featured: true,
        ctaLabel: "book my brow refresh",
        bookingUrl: "https://calendly.com/monicaemm7/new-meeting?back=1",
      },
      {
        name: "Soft Girl Summer",
        price: "$255",
        description:
          "Our most-loved pairing: the signature brow transformation and a Korean lash lift in a single, unhurried appointment.",
        featured: true,
        ctaLabel: "book the full glow-up",
        bookingUrl: "https://calendly.com/monicaemm7/soft-girl-summer-255?back=1",
      },
    ],
  },
  {
    category: "Brows",
    items: [
      {
        name: "Brow Wax & Tint",
        price: "$55",
        bookingUrl: "https://calendly.com/monicaemm7/brow-wax-tint?back=1",
      },
      {
        name: "Brow Lami & Wax",
        price: "$95",
        bookingUrl: "https://calendly.com/monicaemm7/browlami?back=1",
      },
      {
        name: "Brow Wax",
        price: "$25",
        bookingUrl: "https://calendly.com/monicaemm7/brow-wax?back=1",
      },
      {
        name: "Brow Wax, Lami, Tint",
        price: "$125",
        bookingUrl: "https://calendly.com/monicaemm7/new-meeting?back=1",
      },
    ],
  },
  {
    category: "Lashes",
    items: [
      {
        name: "Korean Lash Lift & Tint",
        price: "$130",
        description:
          "Our signature lift, refined with the Korean method — a soft, upward curl and rich tint that lasts longer and treats your natural lashes more gently.",
        bookingUrl: "https://calendly.com/monicaemm7/kll?back=1",
      },
    ],
  },
  {
    category: "Packages",
    items: [
      {
        name: "Soft Girl Summer",
        price: "$255",
        description:
          "The signature brow transformation and a Korean lash lift, together in one unhurried appointment.",
        bookingUrl: "https://calendly.com/monicaemm7/soft-girl-summer-255?back=1",
      },
    ],
  },
  {
    category: "Waxing",
    items: [
      {
        name: "Full Arm Wax",
        price: "$65",
        bookingUrl: "https://calendly.com/monicaemm7/half-arm-wax-30-clone?back=1",
      },
      {
        name: "Half Arm Wax",
        price: "$30",
        bookingUrl: "https://calendly.com/monicaemm7/underarm-wax-30-clone?back=1",
      },
      {
        name: "Underarm Wax",
        price: "$30",
        bookingUrl: "https://calendly.com/monicaemm7/underarm-wax?back=1",
      },
      {
        name: "Lip Wax",
        price: "$10",
        bookingUrl: "https://calendly.com/monicaemm7/lip-wax?back=1",
      },
      {
        name: "Half Leg Wax",
        price: "$50",
        bookingUrl: "https://calendly.com/monicaemm7/half-leg-wax?back=1",
      },
      {
        name: "Full Leg Wax",
        price: "$65",
        bookingUrl: "https://calendly.com/monicaemm7/full-leg-wax?back=1",
      },
      {
        name: "Bikini Wax",
        price: "$50",
        bookingUrl: "https://calendly.com/monicaemm7/brazilian-wax-?back=1",
      },
      {
        name: "Brazilian Wax",
        price: "$65",
        bookingUrl: "https://calendly.com/monicaemm7/brazilian-wax?back=1",
      },
      {
        name: "First-Time Client: Brazilian Wax",
        price: "$50",
        bookingUrl: "https://calendly.com/monicaemm7/brazilian-wax-newclient?back=1",
      },
    ],
  },
];

// Client testimonials — real client words, kept verbatim. Do not edit or invent.
export const reviews: Review[] = [
  {
    quote:
      "Literally can’t praise Monica enough!!!!! I’ve never gotten a brow lamination & tint or an eyelash lift & tint before and she absolutely blew me away. I can’t stop staring at them!! I’m sooooo excited for my wedding in a few weeks and this made me feel so much more confident and prepared. She has me as a lifelong customer now!",
    reviewer: "Grace S.",
  },
  {
    quote:
      "I am in love with my kll. I don't like wearing mascara daily or falsies. This lift gives me the perfect natural glam I need as a busy momma. Highly recommend 💕",
    reviewer: "Lesley M.",
  },
  {
    quote:
      "Monica was so sweet and had amazing attention to detail. I have very straight eyelashes and she worked her magic to get them curled! I really appreciate her time and attention.",
    reviewer: "Angelica S.",
  },
  {
    quote: "The suite feels like a luxurious oasis!",
    reviewer: "Jessica C.",
  },
  {
    quote:
      "I cannot recommend Monica enough! Been going to her since I moved to VA in July and have only had positive experiences — super sweet and welcoming environment.",
    reviewer: "Jhasmelly V.",
  },
  {
    quote:
      "I’ve been coming to Monica for just about 6 months now for services like a brow wax and Korean lash lift and tint. The environment she works in is amazing and so relaxing.",
    reviewer: "Melanie C.",
  },
  {
    quote:
      "I have very fine & short lashes which makes it hard for extensions to be put on (& stay on) but Monica did that 😏 She’s also the sweetest & the funniest, you get pampered by a bestie fs!!",
    reviewer: "Nicole",
  },
  {
    quote:
      "Seriously THE BEST!! Monica is so talented and the funniest person ever. So welcoming and has such great attention to detail. It's obvious she cares so much about her clients and their wellbeing. Bonus points if you get a KLL!!",
    reviewer: "Makaira K.",
  },
  {
    quote: "Literally obsessed with the results, I will never get my lashes done by anyone else!!",
    reviewer: "Vannessa F.",
  },
  {
    quote:
      "Highly recommend!!!! Such a nice, welcoming environment. I got a lash lift done for the first time ever, it was so quick and comfortable, and looks amazing!! It's been a few days and my lashes still look perfect!",
    reviewer: "Emilee Q.",
  },
  {
    quote:
      "I have always had really straight, stubborn eyelashes until I met Monica!! I get a Korean lash lift & tint from her every 2 months or so and I am OBSESSED with the results every time.",
    reviewer: "Gabi C.",
  },
  {
    quote:
      "Monica is amazing! The facial was just what I needed, and I left feeling refreshed and new. I am referring her to all my family and friends.",
    reviewer: "Candy R.",
  },
  {
    quote: "I got a facial done by Monica and it was so relaxing! I’ll definitely be going back!",
    reviewer: "Vincent T.",
  },
];

export const products: Product[] = [
  {
    name: "Early Balm Pro — Eyelash Premium Fixer",
    price: "$45",
    image: "/images/earlybalmpro.jpg",
    imageAlt: "Tube of lash balm styled on a soft neutral surface",
    description:
      "Early Balm Pro Korean Lash Lift is a specially formulated adhesive designed to lift and secure natural lashes onto a shield or rod of your choice. Its lightweight, flexible formula holds lashes firmly in place without affecting the performance of the lifting or setting solutions, helping create a smooth, flawless lash lift every time.",
  },
  {
    name: "Early Lift 1 & 2",
    price: "$72",
    image: "/images/earlylift12.jpg",
    imageAlt: "Two professional lift solution bottles on a warm background",
    description:
      "Premium lash lift products crafted by a lash artist with 15 years of experience. Made in Korea with safe, high-quality ingredients and formulated for professional results artists will want to reach for again.",
    details: [
      "Reliable curling without damage",
      "Tube Type 10g packaging for clean, controlled dispensing",
    ],
    sections: [
      {
        title: "Step 1: Softening Lotion",
        price: "$36",
        description:
          "A neutral pH 7.5 perm solution with a pH similar to tears.",
        details: [
          "Safe and non-irritating",
          "Efficient softening with thioglycolate (TGA) and cysteamine",
          "Nourishing formula with keratin, collagen, and 11 natural extracts",
          "Non-sticky, firm, elastic texture",
        ],
        timing: ["1st softening: 6-9 minutes", "Additional: 3-8 minutes"],
      },
      {
        title: "Step 2: Setting Lotion",
        price: "$36",
        description:
          "Lash clinic care designed to support the hair after softening.",
        details: [
          "Contains hydrolyzed collagen and hydrolyzed keratin",
          "Helps restore damaged CMC (cell membrane complex)",
        ],
        timing: ["Leave on for 5 minutes after application"],
      },
    ],
  },
  {
    name: "Early Dumpling Softening Rods",
    price: "$32",
    image: "/images/siimmondulashshields.jpg",
    imageAlt: "Soft silicone lash lift rods arranged with beauty tools",
    description:
      "Thin, flexible, sticky 1mm flat shields used for Korean lash lift methods. Apply over the eyelids during Step 1, the softening step.",
    details: [
      "100% made in Korea with non-toxic silicone",
      "Soft material may arrive with slight wrinkles or an uneven cut surface",
      "Returns to its original state after use or when soaked in water",
      "Do not wash with hot water",
    ],
  },
  {
    name: "Lash & Brow Hydrating Serum",
    price: "$20",
    image: "/images/lash-brow-hydrating-serum.jpg",
    imageAlt: "Lash and brow hydrating serum tube on ivory satin",
    description:
      "Our Lash & Brow Hydrating Serum is a saturated aftercare serum designed to keep lashes and brows feeling conditioned, soft, and healthy-looking. It is ideal after a Korean lash lift, brow lamination, or even just to promote hair growth in areas of the face that can use it.",
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: "make-a-lash-lift-last",
    title: "How to Make a Lash Lift Last Longer",
    date: "2026-06-01",
    category: "Lash care",
    readTime: "4 min read",
    excerpt:
      "A simple, low-maintenance routine for protecting your lift, keeping lashes soft, and getting the best wear between appointments.",
    image: "/images/koreanlashliftfeatured.jpg",
    imageAlt: "Close-up of lifted lashes after a lash lift service",
    sections: [
      {
        heading: "Keep the first day simple",
        body:
          "The first 24 hours are when your lift is settling. Keep lashes dry, skip steam, and avoid rubbing the eye area so the shape has time to hold cleanly.",
      },
      {
        heading: "Condition once the lift has set",
        body:
          "After the first day, a light conditioning serum can help lashes feel soft and flexible. Think of aftercare as maintenance, not a heavy product routine.",
      },
      {
        heading: "Be gentle with makeup removal",
        body:
          "Use soft pressure around the lash line and avoid tugging. A careful cleanse protects both the lift and the natural lashes underneath.",
      },
    ],
  },
  {
    slug: "brow-lamination-aftercare",
    title: "Brow Lamination Aftercare: The First 24 Hours",
    date: "2026-06-01",
    category: "Brow care",
    readTime: "3 min read",
    excerpt:
      "What to avoid, when to brush, and how to keep laminated brows looking soft instead of overworked.",
    image: "/images/browlaminationaftercareblog33.jpg",
    imageAlt: "Monica showing a soft brow lamination result in the studio",
    imagePosition: "center 25%",
    sections: [
      {
        heading: "Let the shape settle",
        body:
          "Avoid getting brows wet, steaming, sweating heavily, or applying skincare directly through the brow area for the first 24 hours.",
      },
      {
        heading: "Brush with intention",
        body:
          "Once your brows are ready for daily styling, brush them into place gently instead of forcing the hairs upward. A softer shape usually wears better.",
      },
      {
        heading: "Keep brows conditioned",
        body:
          "Lamination works best when brow hairs stay flexible. A light conditioning product helps the finish look plush between appointments.",
      },
    ],
  },
];

// Trust indicators for the trust strip
export const trustIndicators = [
  "Licensed in VA",
  "Chesapeake, VA",
  "5.0-star rating",
  "Korean Lash Lifts",
  "Brows",
  "Waxing",
];

// FAQ-style service content
export const serviceContent = {
  lashLift: {
    headline: "Your own lashes, beautifully lifted.",
    description:
      "The Korean Lash Lift & Tint coaxes a soft, upward curl from your natural lashes and sets it with a deep, flattering tint. The Korean method is gentler on the hair and holds longer than a classic lift — an effortless, wide-awake look made especially for fine, straight, or stubborn lashes.",
    price: "$130",
    benefits: [
      "A soft, naturally lifted curl",
      "Holds longer than a classic lift",
      "Gentler on your natural lashes",
      "Wakes up the eyes — no mascara required",
      "Made for fine, straight, or stubborn lashes",
    ],
  },
  brows: {
    headline: "Brows, beautifully redefined.",
    description:
      "Shape, lift, and define in a single appointment. Monica combines precise waxing, lamination, and a custom tint for fuller, brushed-up brows — and a morning routine that all but disappears.",
    price: "$125",
    benefits: [
      "Fuller, brushed-up brows",
      "Shape that holds for weeks",
      "Arches mapped to your features",
      "A near-effortless daily routine",
      "Tint matched to your coloring",
    ],
  },
  softGirlSummer: {
    headline: "The complete glow-up, in one sitting.",
    description:
      "Lashes and brows, transformed together. Monica pairs the signature brow service with a Korean lash lift in one unhurried appointment — the easiest way to feel polished from the brows down.",
    price: "$255",
    benefits: [
      "A coordinated lash-and-brow look",
      "Both signature services, one appointment",
      "Less upkeep, more polish",
      "Your whole look, set in a single visit",
    ],
  },
};

// About Monica
export const about = {
  name: "Monica Talbot",
  title: "Licensed Esthetician",
  credential: "Virginia-Licensed Esthetician",
  bio: "Monica Talbot is a Virginia-licensed esthetician and the founder of The Skin Sanctuary Co in Chesapeake. She built the studio around a particular kind of beauty — soft, low-maintenance, and quietly intentional — with the Korean lash lift, considered brow work, and refined waxing at its heart.",
  personality:
    "Clients return as much for Monica as for the results. Warm, funny, and genuinely invested, she designs every appointment to feel calm, private, and unhurried — whether you're in for a lash lift, a brow transformation, or a waxing service.",
};

// Korean Lash Lift Training — sourced from the training flyer (source of truth).
// CTA destination is configurable: until a form/QR link is provided, "Express
// Interest" scrolls to the on-page inquiry section, which links to Instagram DM.
export const training = {
  eyebrow: "1:1 Training · Full Day",
  title: "Korean Lash Lift Training",
  subheadline:
    "Experience an elevated lash lift masterclass. Learn every detail of the process and take the guesswork out of how to perfect a lash lift.",
  format: "1:1 Training — full day",
  investment: "$1,100",
  location: "Greenbrier, Chesapeake",
  instructor: "Monica Talbot",
  // Primary CTA scrolls to the inquiry section; the inquiry section links out.
  inquiryAnchor: "#training-inquiry",
  inquiryUrl: "https://form.jotform.com/261064149493056",
  cta: {
    primary: "Express Interest",
    secondary: "View What You'll Learn",
    inquiry: "Express Interest",
  },
  overview:
    "This Korean Lash Lift Training is built for students who want a detailed, hands-on learning experience. Monica walks you through the process step by step so you understand the technique, the product system, lash mapping decisions, and the business side of offering lash lift services.",
  highlights: [
    {
      title: "Private 1:1 Training",
      description: "A full-day training experience with focused, one-on-one guidance from Monica.",
    },
    {
      title: "Hands-On Practice",
      description: "Includes live model(s) for guided, real-time lash lift application.",
    },
    {
      title: "Early Lift System",
      description: "Learn the product system and how each step supports a healthy lift.",
    },
    {
      title: "KLL Certificate",
      description: "Receive a Korean Lash Lift certificate after completing the training.",
    },
  ],
  curriculum: [
    {
      group: "Technique",
      items: [
        "Introduction to what a KLL is and how it differs from traditional lash lifts",
        "Theory: Cysteamine vs TGA",
        "How to choose the correct rod based on lash length and eye shape",
      ],
    },
    {
      group: "Practice",
      items: [
        "Product knowledge: the Early Lift System",
        "Live model(s) — hands-on practice",
      ],
    },
    {
      group: "Business",
      items: [
        "Social media & business marketing",
        "Receive a KLL Certificate",
      ],
    },
  ],
  whoFor: [
    "Beauty professionals who want to add Korean Lash Lifts to their service menu",
    "Lash artists who want to refine their lift technique",
    "Estheticians who want hands-on product and rod selection guidance",
    "Students who prefer private 1:1 training over a large group class",
  ],
  instructorBio:
    "Monica Talbot is a Virginia-licensed esthetician and the owner of The Skin Sanctuary Co in Chesapeake, VA. Known for her detailed lash work, calm teaching style, and client-focused approach, Monica created this training to help students understand not just the steps of a Korean Lash Lift, but the decision-making behind beautiful, consistent results.",
  productIntro:
    "Training includes product knowledge around the Early Lift System, so students understand how each product supports the softening, setting, and healthy-looking results of a Korean lash lift.",
  productHighlights: [
    "Early Lift Step 1 — Softening Lotion",
    "Early Lift Step 2 — Setting Lotion",
    "Early Balm Pro — Premium Fixer",
    "Lash & Brow Hydrating Serum",
  ],
  investmentNote:
    "Training dates and availability are limited. Submit your interest to receive current scheduling details.",
  faq: [
    {
      q: "How long is the training?",
      a: "The Korean Lash Lift Training is a full-day 1:1 training experience.",
    },
    {
      q: "How much is the training?",
      a: "The training investment is $1,100.",
    },
    {
      q: "Is this a group class?",
      a: "This is 1:1 Training, which means it is designed as a private training experience with Monica.",
    },
    {
      q: "Will I practice during training?",
      a: "Yes. The training includes live model(s) for hands-on practice.",
    },
    {
      q: "Do I receive a certificate?",
      a: "Yes. Students receive a KLL Certificate after completing the training.",
    },
    {
      q: "Where is the training located?",
      a: "Training is offered in Greenbrier, Chesapeake.",
    },
  ],
};

// Policies
export const policies = {
  cancellation:
    "Your appointment is reserved exclusively for you. We kindly ask for at least 24 hours' notice to cancel or reschedule; changes made within 24 hours may be subject to a fee of 50% of the scheduled service total.",
  noShow:
    "Guests who miss an appointment without notice may be charged up to 100% of the scheduled service total, and may be asked to prepay for future bookings.",
  late: "Please arrive on time so we can give you the full experience. If you arrive more than 10 minutes late, your service may need to be shortened or rescheduled out of respect for the next guest — in some cases, this is treated as a late cancellation.",
  booking:
    "Appointments are booked through Calendly. Depending on the service and current booking settings, a card on file or deposit may be required to secure your time.",
};
