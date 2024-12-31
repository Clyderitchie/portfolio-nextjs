import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 bg-card shadow-md">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-5 px-5 py-3">
        <Link href="/" className="text-2xl font-bold text-primary">
          Clyde Ritchie
        </Link>
      </div>
    </header>
  );
}
