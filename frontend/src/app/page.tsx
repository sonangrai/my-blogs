import SanityImageComp from "@/components/common/sanity-image";
import { client } from "@/sanity/client";
import { SanityDocument } from "next-sanity";
import { format } from "date-fns";

const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, slug, mainImage, excerpt, publishedAt}`;

const options = { next: { revalidate: 30 } };

export default async function Home() {
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);
  console.log(posts);

  return (
    <main className="container mx-auto py-6">
      <div className="grid gap-2 grid-cols-3">
        {posts.map((post) => (
          <article className="" key={post._id}>
            <SanityImageComp
              asset={post.mainImage}
              width={100}
              height={100}
              alt={post.title}
              className="w-full"
            />
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
