import SanityImageComp from "@/components/common/sanity-image";
import { client } from "@/sanity/client";
import { SanityDocument } from "next-sanity";
import { format } from "date-fns";
import Link from "next/link";

const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, slug, mainImage, excerpt, publishedAt}`;

const options = { next: { revalidate: 30 } };

export default async function Home() {
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);
  console.log(posts);

  return (
    <main className="container mx-auto py-6 min-h-[calc(100dvh-93px)] flex flex-col justify-center">
      <div className="grid gap-4 grid-cols-3">
        {posts.map((post) => (
          <article className="" key={post._id}>
            <Link href={`/blog/${post.slug.current}`}>
              <SanityImageComp
                asset={post.mainImage}
                width={100}
                height={100}
                alt={post.title}
                className="w-full h-[240px] object-cover"
              />
            </Link>
            <h2 className="font-bold my-2">{post.title}</h2>
            <span className="text-xs">
              {format(post.publishedAt, "MMM d, y")}
            </span>
            <p className="font-sans text-sm text-gray-500 my-2">
              {post.excerpt}
            </p>
          </article>
        ))}
      </div>
    </main>
  );
}
