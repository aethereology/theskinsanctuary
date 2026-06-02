import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { blogPosts } from "@/lib/data";

export const metadata: Metadata = {
  title: "Blog | The Skin Sanctuary Co",
  description:
    "Read lash, brow, waxing, and aftercare notes from Monica Talbot at The Skin Sanctuary Co in Chesapeake, VA.",
};

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(`${date}T00:00:00`));
}

export default function BlogPage() {
  const [featuredPost, ...morePosts] = blogPosts;

  return (
    <>
      <section className="pt-32 pb-12">
        <div className="container max-w-3xl text-center">
          <p className="text-sm font-medium text-clay uppercase tracking-widest mb-4">
            Blog
          </p>
          <h1 className="font-serif text-5xl text-cocoa mb-6">
            Studio notes for better aftercare
          </h1>
          <p className="text-lg text-espresso">
            Practical lash, brow, and skin guidance for the days between your
            appointments.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <article className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-16">
            <Link
              href={`/blog/${featuredPost.slug}`}
              className="relative aspect-[4/3] rounded-lg overflow-hidden block"
            >
              <Image
                src={featuredPost.image}
                alt={featuredPost.imageAlt}
                fill
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </Link>
            <div>
              <p className="text-xs font-medium text-clay uppercase tracking-widest mb-4">
                {featuredPost.category} &middot; {formatDate(featuredPost.date)}{" "}
                &middot;{" "}
                {featuredPost.readTime}
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl text-cocoa mb-5">
                <Link href={`/blog/${featuredPost.slug}`}>
                  {featuredPost.title}
                </Link>
              </h2>
              <p className="text-espresso mb-8">{featuredPost.excerpt}</p>
              <Link
                href={`/blog/${featuredPost.slug}`}
                className="text-clay hover:text-primary-dark font-medium transition-colors"
              >
                Read article &rarr;
              </Link>
            </div>
          </article>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {morePosts.map((post) => (
              <article
                key={post.slug}
                className="bg-white rounded-lg border border-hairline/40 overflow-hidden shadow-sm"
              >
                <Link
                  href={`/blog/${post.slug}`}
                  className="relative aspect-[4/3] block"
                >
                  <Image
                    src={post.image}
                    alt={post.imageAlt}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                </Link>
                <div className="p-6">
                  <p className="text-xs font-medium text-clay uppercase tracking-widest mb-3">
                    {post.category} &middot; {formatDate(post.date)} &middot;{" "}
                    {post.readTime}
                  </p>
                  <h2 className="font-serif text-2xl text-cocoa mb-3">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>
                  <p className="text-text-secondary text-sm mb-6">
                    {post.excerpt}
                  </p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-clay hover:text-primary-dark font-medium transition-colors"
                  >
                    Read article &rarr;
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
