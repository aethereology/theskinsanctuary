import { Metadata } from "next";
import { site } from "@/lib/site";
import { browTraining } from "@/lib/data";
import TrainingCourse from "@/components/TrainingCourse";
import heroImage from "@/assets/brow21.jpg";
import instructorImage from "@/assets/monica3.jpg";

export const metadata: Metadata = {
  title: "Brow Lamination Training | The Skin Sanctuary Co",
  description:
    "Learn brow lamination, shaping, and tint with Monica Talbot at The Skin Sanctuary Co in Greenbrier, Chesapeake. Full-day 1:1 brow training with hands-on practice, business guidance, and a certificate. $950.",
  keywords: [
    "brow lamination training Chesapeake VA",
    "brow lamination course Virginia",
    "brow shaping and tint training Chesapeake",
    "1:1 brow training Virginia",
    "brow lamination certification Chesapeake",
  ],
  alternates: { canonical: `${site.baseUrl}/training/brows` },
  openGraph: {
    title: "Brow Lamination, Shaping & Tint Training | The Skin Sanctuary Co",
    description:
      "A full-day 1:1 brow masterclass with Monica Talbot in Greenbrier, Chesapeake. Lamination, shaping, and tint with hands-on practice, business guidance, and a certificate.",
    url: `${site.baseUrl}/training/brows`,
    siteName: site.brand,
    type: "website",
  },
};

export default function BrowTrainingPage() {
  return (
    <TrainingCourse
      course={browTraining}
      images={{ hero: heroImage, instructor: instructorImage }}
    />
  );
}
