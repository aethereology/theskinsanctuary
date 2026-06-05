import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import BookingButton from "@/components/BookingButton";
import { blogPosts } from "@/lib/data";
import { site } from "@/lib/site";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    return {
      title: `Blog | ${site.brand}`,
    };
  }

  return {
    title: `${post.title} | ${site.brand}`,
    description: post.excerpt,
  };
}

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(`${date}T00:00:00`));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <article>
        <section className="pt-32 pb-12">
          <div className="container max-w-3xl text-center">
            <Link
              href="/blog"
              className="text-sm font-medium text-clay uppercase tracking-widest mb-5 inline-block"
            >
              Blog
            </Link>
            <h1 className="font-serif text-5xl text-cocoa mb-6">
              {post.title}
            </h1>
            <p className="text-sm text-text-secondary uppercase tracking-widest">
              {post.category} &middot; {formatDate(post.date)} &middot;{" "}
              {post.readTime}
            </p>
          </div>
        </section>

        {post.image ? (
          <section className="pb-16">
            <div className="container max-w-5xl">
              <div className="relative aspect-[16/9] rounded-lg overflow-hidden bg-ivory">
                <Image
                  src={post.image}
                  alt={post.imageAlt ?? post.title}
                  fill
                  priority
                  sizes="(min-width: 1024px) 960px, 100vw"
                  className={
                    post.imageFit === "contain" ? "object-contain" : "object-cover"
                  }
                  style={{ objectPosition: post.imagePosition ?? "center" }}
                />
              </div>
            </div>
          </section>
        ) : null}

        <section className="pb-20">
          <div className="container max-w-3xl">
            <p className="text-lg text-espresso mb-12">{post.excerpt}</p>
            <div className="space-y-10">
              {post.sections.map((section) => (
                <section key={section.heading}>
                  <h2 className="font-serif text-3xl text-cocoa mb-4">
                    {section.heading}
                  </h2>
                  <p className="text-espresso">{section.body}</p>
                </section>
              ))}
            </div>
          </div>
        </section>
      </article>

      <section className="py-20 bg-ivory">
        <div className="container max-w-3xl text-center">
          <h2 className="font-serif text-3xl text-cocoa mb-6">
            Build your aftercare shelf
          </h2>
          <p className="text-espresso mb-8">
            Shop curated lash, brow, and skin products in studio or ask Monica
            what belongs in your routine.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <BookingButton label="shop products" href="/shop" />
            <BookingButton
              label="book appointment"
              variant="secondary"
              trackingId="blog_post_book_cta"
            />
          </div>
        </div>
      </section>
    </>
  );
}
