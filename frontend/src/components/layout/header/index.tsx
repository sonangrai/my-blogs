import Link from "next/link";
import React from "react";

function Header() {
  return (
    <header className="border-b-1 py-4">
      <div className="container mx-auto">
        <Link href="/">blogs.sonahangrai</Link>
      </div>
    </header>
  );
}

export default Header;
