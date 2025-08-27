import Link from "next/link";

function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="p-2 text-center text-xs">
      &copy; <span className="text-xs">{year}</span> -{" "}
      <Link
        href="https://sonahangrai.com.np"
        target="_blank"
        className="text-xs"
      >
        sonahang rai
      </Link>
    </footer>
  );
}

export default Footer;
