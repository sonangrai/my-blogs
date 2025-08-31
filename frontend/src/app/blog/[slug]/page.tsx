import { BlockComponents } from "@/components/common/blocks-editor";
import SanityImageComp from "@/components/common/sanity-image";
import { client } from "@/sanity/client";
import { PortableText, SanityDocument } from "next-sanity";
import Link from "next/link";

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]`;

const options = { next: { revalidate: 30 } };

async function page({ params }: { params: Promise<{ slug: string }> }) {
  const post = await client.fetch<SanityDocument>(
    POST_QUERY,
    await params,
    options
  );

  return (
    <main className="dark:bg-gray-800">
      <div className="container max-w-[1200px] mx-auto py-6 min-h-[calc(100dvh-93px)]">
        <article>
          <SanityImageComp
            asset={post.mainImage}
            alt={post.title}
            width="100"
            height="100"
            className="w-full h-[300px] object-contain"
          />
          <h1 className="my-3 text-4xl font-bold dark:text-white">
            {post.title}
          </h1>
          <PortableText value={post.body} components={BlockComponents} />
        </article>
      </div>
    </main>
  );
}

export default page;
