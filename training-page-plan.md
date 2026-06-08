# The Skin Sanctuary Co - Training Page Build Plan

## Objective

Add a new **Training** page to The Skin Sanctuary Co website for Monica Talbot's Korean Lash Lift Training offer. This page should convert interested beauty professionals and aspiring lash artists into inquiry submissions or direct messages by presenting the training as a premium, hands-on masterclass.

The page should match the current website direction:

- Soft luxury esthetics brand
- Warm beige, cream, taupe, espresso-brown palette
- Elegant editorial typography
- Clean mobile-first layout
- No full street address displayed
- Location shown only as **Greenbrier, Chesapeake** or **Chesapeake, VA**
- Phone number can remain visible sitewide if already part of global layout

## New Route

Create a new route/page:

```txt
/training
```

Recommended page title:

```txt
Korean Lash Lift Training | The Skin Sanctuary Co
```

Recommended meta description:

```txt
Learn Korean Lash Lift technique with Monica Talbot at The Skin Sanctuary Co in Greenbrier, Chesapeake. Full-day 1:1 lash lift training with hands-on practice, product knowledge, business guidance, and KLL certificate.
```

## Navigation Update

Add **Training** to the main navigation.

Recommended nav order:

```txt
Services
Training
Reviews
About
Book Now
```

If the site has a mobile menu, include Training there as well.

## Training Offer Source Information

Use the flyer content as the source of truth for the Training page.

### Program Name

```txt
Korean Lash Lift Training
```

### Brand Header

```txt
The Skin Sanctuary Esthetics Bar
```

For the website, use the existing site brand name if already standardized as:

```txt
The Skin Sanctuary Co
```

Do not introduce inconsistent branding unless desired. The page can mention “The Skin Sanctuary Esthetics Bar” only if that is being used as a training/flyer sub-brand.

### Training Format

```txt
1:1 Training - full day
```

### Investment

```txt
Investment $1100
```

### Location Display

```txt
Greenbrier, Chesapeake
```

Do not display the full street address.

### Instagram

```txt
@theskinsanctuary_co
```

### Website

```txt
www.theskinsanctuary.co
```

## Page Conversion Goal

Primary conversion should be **training inquiry**, not immediate appointment booking.

Recommended CTA language:

```txt
Express Interest
Get Training Info
Apply for 1:1 Training
Ask About Training Dates
```

The flyer says:

```txt
To express interest or get more info SCAN HERE
```

Since the QR destination is not provided in text, implement the CTA as a configurable link in site data.

Use placeholder until user provides destination:

```ts
trainingInquiryUrl: "#training-inquiry"
```

or if using Instagram DM as fallback:

```ts
trainingInquiryUrl: "https://www.instagram.com/theskinsanctuary_co"
```

Recommended fallback CTA:

```txt
DM Monica on Instagram
```

## Page Structure

### 1. Hero Section

Purpose: Introduce the offer immediately and position it as elevated, premium, and hands-on.

Recommended copy:

```txt
Korean Lash Lift Training
```

Subheadline:

```txt
Experience an elevated lash lift masterclass. Learn every detail of the process and take the guess work out of how to perfect a lash lift.
```

Supporting details:

```txt
1:1 Training - full day
Investment $1100
Greenbrier, Chesapeake
```

Primary CTA:

```txt
Express Interest
```

Secondary CTA:

```txt
View What You’ll Learn
```

Image guidance:

- User will provide images.
- Use one image of Monica or the studio in the hero if available.
- Keep hero image crop safe for mobile.
- Avoid flyer screenshot as the main image unless used as a downloadable resource.

Suggested layout:

Desktop:

- Left: headline, subheadline, details, CTA
- Right: image of Monica or lash lift result

Mobile:

- Image first or after headline
- CTA visible above fold

### 2. Training Overview Section

Title:

```txt
A full-day 1:1 lash lift training designed to build confidence.
```

Body copy:

```txt
This Korean Lash Lift Training is built for students who want a detailed, hands-on learning experience. Monica walks you through the process step by step so you understand the technique, product system, lash mapping decisions, and business side of offering lash lift services.
```

Feature cards:

1. **1:1 Training**
   - Full-day private learning experience

2. **Hands-On Practice**
   - Includes live model(s) for guided application

3. **Product Knowledge**
   - Learn the Early Lift System and how products support the service

4. **Certificate Included**
   - Receive a KLL Certificate after training

### 3. What You’ll Learn Section

Use this exact source content from the flyer, organized into a clean list.

Title:

```txt
What You’ll Learn
```

Bullets:

```txt
- Introduction to what a KLL is and how it differs from traditional lash lifts.
- Theory: Cysteamine vs TGA
- How to choose correct rod based on lash length and eye shape
- Product Knowledge: Early Lift System
- Live Model(s) - hands on practice
- Social Media / Business Marketing
- Receive a KLL Certificate
```

Optional card grouping:

#### Technique

- Introduction to what a KLL is and how it differs from traditional lash lifts.
- Theory: Cysteamine vs TGA
- How to choose correct rod based on lash length and eye shape

#### Practice

- Product Knowledge: Early Lift System
- Live Model(s) - hands on practice

#### Business

- Social Media / Business Marketing
- Receive a KLL Certificate

### 4. Investment Section

Title:

```txt
Training Investment
```

Highlight:

```txt
$1100
```

Supporting line:

```txt
1:1 Training - full day
```

CTA:

```txt
Express Interest
```

Recommended disclaimer placeholder:

```txt
Training dates and availability are limited. Submit your interest to receive current scheduling details.
```

Do not add deposit/refund/payment-plan details unless Monica confirms them.

### 5. Who This Is For Section

This content is inferred for conversion and clarity. Keep it concise.

Title:

```txt
Who This Training Is For
```

Suggested bullets:

```txt
- Beauty professionals who want to add Korean Lash Lifts to their service menu
- Lash artists who want to refine their lift technique
- Estheticians who want hands-on product and rod selection guidance
- Students who prefer private 1:1 training instead of a large group class
```

Avoid making licensing claims unless Monica confirms requirements for student eligibility.

### 6. About Monica / Instructor Section

Title:

```txt
Train with Monica Talbot
```

Suggested copy:

```txt
Monica Talbot is a Virginia-licensed esthetician and the owner of The Skin Sanctuary Co in Chesapeake, VA. Known for her detailed lash work, calm teaching style, and client-focused approach, Monica created this training to help students understand not just the steps of a Korean Lash Lift, but the decision-making behind beautiful, consistent results.
```

Add image of Monica if available.

Use existing headshot if already generated/approved.

### 7. Product Knowledge Section

Title:

```txt
Product Knowledge: Early Lift System
```

Suggested copy:

```txt
Training includes product knowledge around the Early Lift System so students understand how the products support softening, setting, and healthy-looking lash lift results.
```

Optional product cards if product page/content exists:

- Early Lift Step 1 - Softening Lotion
- Early Lift Step 2 - Setting Lotion
- Early Balm Pro
- Lash & Brow Hydrating Serum

Do not overclaim product results. Keep claims aligned with provided product descriptions.

### 8. Inquiry CTA Section

Title:

```txt
Interested in Korean Lash Lift Training?
```

Body:

```txt
Express interest or request more information about upcoming 1:1 training availability with Monica.
```

CTA options:

Primary:

```txt
Express Interest
```

Secondary:

```txt
DM @theskinsanctuary_co
```

If a QR image is provided later, add it here with alt text:

```txt
QR code to express interest in Korean Lash Lift Training with The Skin Sanctuary Co
```

### 9. FAQ Section

Add FAQ section to improve conversion and SEO.

Use only safe, non-overclaiming answers.

Recommended FAQs:

#### How long is the training?

```txt
The Korean Lash Lift Training is a full-day 1:1 training experience.
```

#### How much is the training?

```txt
The training investment is $1100.
```

#### Is this a group class?

```txt
The flyer lists this as 1:1 Training, which means it is designed as a private training experience.
```

#### Will I practice during training?

```txt
Yes. The training includes live model(s) for hands-on practice.
```

#### Do I receive a certificate?

```txt
Yes. Students receive a KLL Certificate after training.
```

#### Where is the training located?

```txt
Training is offered in Greenbrier, Chesapeake.
```

Do not publish the full street address on the page.

## Content Data Object

If the site uses a central data file such as `lib/site.ts`, add a training object similar to this:

```ts
export const training = {
  title: "Korean Lash Lift Training",
  eyebrow: "1:1 Training - full day",
  investment: "$1100",
  location: "Greenbrier, Chesapeake",
  instructor: "Monica Talbot",
  intro:
    "Experience an elevated lash lift masterclass. Learn every detail of the process and take the guess work out of how to perfect a lash lift.",
  cta: {
    label: "Express Interest",
    href: "#training-inquiry", // replace with QR destination or form link when provided
  },
  instagram: "@theskinsanctuary_co",
  website: "www.theskinsanctuary.co",
  curriculum: [
    "Introduction to what a KLL is and how it differs from traditional lash lifts.",
    "Theory: Cysteamine vs TGA",
    "How to choose correct rod based on lash length and eye shape",
    "Product Knowledge: Early Lift System",
    "Live Model(s) - hands on practice",
    "Social Media / Business Marketing",
    "Receive a KLL Certificate",
  ],
  highlights: [
    {
      title: "Private 1:1 Training",
      description: "A full-day training experience with focused guidance from Monica.",
    },
    {
      title: "Hands-On Practice",
      description: "Includes live model(s) for guided lash lift practice.",
    },
    {
      title: "Early Lift System",
      description: "Learn product knowledge and how the Early Lift System supports the service.",
    },
    {
      title: "KLL Certificate",
      description: "Receive a KLL Certificate after completing the training.",
    },
  ],
};
```

## Component Plan

Create or reuse these components:

```txt
TrainingHero
TrainingOverview
TrainingCurriculum
TrainingInvestment
InstructorSection
TrainingProductKnowledge
TrainingInquiryCTA
TrainingFAQ
```

If the site uses generic components, reuse:

```txt
Section
Container
Button
ImageCard
FeatureCard
FAQAccordion
```

## Suggested Page Layout

```tsx
<main>
  <TrainingHero />
  <TrainingOverview />
  <TrainingCurriculum />
  <TrainingInvestment />
  <InstructorSection />
  <TrainingProductKnowledge />
  <TrainingFAQ />
  <TrainingInquiryCTA />
</main>
```

## Design Direction

### Visual Tone

- Premium education page, not a generic class page
- Elevated beauty masterclass
- Editorial, calm, warm, professional
- Keep generous spacing
- Use soft cards and thin borders
- Use brand colors from existing site

### Recommended Colors

Use existing theme tokens if available. If new values are needed:

```css
--training-bg: #f4eee8;
--training-card: #fffaf5;
--training-ink: #3f3028;
--training-muted: #7b6a60;
--training-accent: #b89483;
--training-border: rgba(63, 48, 40, 0.18);
```

### Typography

- Large editorial serif for hero headline
- Clean sans-serif for details and bullets
- Small uppercase eyebrow labels for section tags

Hero headline should be large on desktop and readable on mobile.

Example:

```css
font-size: clamp(3rem, 8vw, 6.75rem);
line-height: 0.95;
letter-spacing: -0.04em;
```

## Mobile Requirements

- Training page must be mobile-first
- Hero CTA should appear within first screen on mobile
- Curriculum bullets should stack vertically
- Investment card should be sticky-looking but not fixed
- Avoid tiny flyer-style text
- Do not rely on QR-only CTA on mobile
- Use tap-friendly buttons

## CTA Behavior

Primary CTA:

```txt
Express Interest
```

Current placeholder behavior:

```txt
Scroll to inquiry section
```

Future options:

- Link to training inquiry form
- Link to Calendly training event
- Link to Instagram DM
- Link to QR destination URL

Do not use the normal sticky CTA text “book my lash lift” on this page if possible. Instead, page-specific sticky/mobile CTA can say:

```txt
Express Interest
```

or

```txt
Get Training Info
```

If the global sticky CTA cannot be overridden, keep it sitewide but add strong training CTAs inside the page.

## SEO Plan

Primary keyword:

```txt
Korean Lash Lift Training Chesapeake VA
```

Secondary keywords:

```txt
lash lift training Chesapeake VA
Korean lash lift class Chesapeake
1:1 lash lift training Virginia
lash lift certification Chesapeake
KLL training Virginia
```

On-page SEO requirements:

- H1: Korean Lash Lift Training
- Include “Greenbrier, Chesapeake” once or twice
- Include “Monica Talbot” and “Virginia-licensed esthetician” in instructor section
- Include FAQ schema if the site supports structured data
- Do not display full street address

## Structured Data Recommendation

If adding JSON-LD, use Course schema carefully.

Do not add exact dates unless available.

Suggested schema type:

```txt
Course
```

Course name:

```txt
Korean Lash Lift Training
```

Provider:

```txt
The Skin Sanctuary Co
```

Location text:

```txt
Greenbrier, Chesapeake, VA
```

Do not include full street address.

## Image Requirements

User will handle images.

Recommended image slots:

1. Hero image - Monica or studio/training image
2. Lash result image - close-up lash lift
3. Product image - Early Lift System
4. Optional student/training image or model practice image

Alt text examples:

```txt
Monica Talbot at The Skin Sanctuary Co in Chesapeake
Korean Lash Lift result from The Skin Sanctuary Co
Early Lift System products used in Korean Lash Lift Training
Hands-on Korean Lash Lift training in Greenbrier Chesapeake
```

## Do Not Include

Do not include:

- Full street address
- The old $35 Welcome Facial
- Square booking links
- Unconfirmed training dates
- Unconfirmed deposit/refund policy
- Claims that guarantee income or certification licensing outcomes
- Overly medical claims
- QR code as the only way to inquire

## Copy Bank

### Hero Copy

```txt
Korean Lash Lift Training

Experience an elevated lash lift masterclass. Learn every detail of the process and take the guess work out of how to perfect a lash lift.

1:1 Training - full day
Investment $1100
```

### CTA Copy

```txt
Express Interest
Get More Info
Ask About Training Dates
DM Monica
```

### Short Promo Copy

```txt
A full-day 1:1 Korean Lash Lift Training experience in Greenbrier, Chesapeake, designed to help students understand the technique, product system, lash selection decisions, and business side of offering lash lift services.
```

### Instructor Copy

```txt
Train with Monica Talbot, a Virginia-licensed esthetician and the owner of The Skin Sanctuary Co. Monica brings a detail-focused, client-centered approach to lash education, helping students understand both the process and the artistry behind Korean Lash Lift results.
```

## Acceptance Criteria

The Training page is complete when:

- `/training` route exists
- Navigation includes Training
- H1 says “Korean Lash Lift Training”
- Page clearly shows “1:1 Training - full day”
- Page clearly shows “Investment $1100”
- Curriculum includes all flyer bullets
- CTA exists for Express Interest / Get More Info
- Full street address is not displayed
- Page matches existing Skin Sanctuary visual style
- Page is responsive on mobile and desktop
- Page has SEO title and meta description
- No old Square or Welcome Facial references appear

