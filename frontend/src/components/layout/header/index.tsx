import Link from "next/link";
import Tools from "./tools";

function Header() {
  return (
    <header className="border-b-1 py-4 sticky top-0 bg-white dark:bg-gray-900">
      <div className="container max-w-[1200px] mx-auto flex items-center justify-between">
        <Link href="/" className="text-xl font-hubot dark:text-white">
          blogs.sonahangrai
        </Link>

        {/* <Nav /> */}

        <Tools />
      </div>
    </header>
  );
}

export default Header;
