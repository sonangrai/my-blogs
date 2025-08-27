import { client } from "@/sanity/client";
import { SanityDocument } from "next-sanity";
import Link from "next/link";

const CATEGORY_QUERY = `*[
  _type == "category"
]|{_id, title}`;

const options = { next: { revalidate: 30 } };
async function Nav() {
  const category = await client.fetch<SanityDocument[]>(
    CATEGORY_QUERY,
    {},
    options
  );

  return (
    <nav>
      <ul className="flex gap-4">
        {category.map((cat) => (
          <li key={cat.title}>
            <Link href="" className="lowercase">
              {cat.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
