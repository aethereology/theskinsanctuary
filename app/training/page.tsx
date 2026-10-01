import { Metadata } from "next";
import { site } from "@/lib/site";
import { training } from "@/lib/data";
import TrainingCourse from "@/components/TrainingCourse";
import heroImage from "@/assets/traininghero1.jpg";
import instructorImage from "@/assets/monica2.jpeg";
import productImage from "@/assets/earlylift12.jpg";

export const metadata: Metadata = {
  title: "Korean Lash Lift Training | The Skin Sanctuary Co",
  description:
    "Learn Korean Lash Lift technique with Monica Talbot at The Skin Sanctuary Co in Greenbrier, Chesapeake. Full-day 1:1 lash lift training with hands-on practice, product knowledge, business guidance, and a KLL certificate.",
  keywords: [
    "Korean Lash Lift Training Chesapeake VA",
    "lash lift training Chesapeake VA",
    "Korean lash lift class Chesapeake",
    "1:1 lash lift training Virginia",
    "lash lift certification Chesapeake",
    "KLL training Virginia",
  ],
  openGraph: {
    title: "Korean Lash Lift Training | The Skin Sanctuary Co",
    description:
      "A full-day 1:1 Korean Lash Lift masterclass with Monica Talbot in Greenbrier, Chesapeake. Hands-on practice, the Early Lift System, business guidance, and a KLL certificate.",
    url: `${site.baseUrl}/training`,
    siteName: site.brand,
    type: "website",
  },
};

export default function TrainingPage() {
  return (
    <TrainingCourse
      course={training}
      images={{ hero: heroImage, instructor: instructorImage, product: productImage }}
    />
  );
}
