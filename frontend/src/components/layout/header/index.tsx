import Link from "next/link";
import Nav from "./nav";
import Tools from "./tools";

function Header() {
  return (
    <header className="border-b-1 py-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="text-xl">
          blogs.sonahangrai
        </Link>

        <Nav />

        <Tools />
      </div>
    </header>
  );
}

export default Header;
