import Link from "next/link";
import Image from "next/image";

export function Header() {
  return (
    <header className="border-b border-white/10 px-6 py-4 flex
    items-center justify-between bg-black">
      <Link
        href="/"
        className="flex items-center gap-3"
        >
            <Image
                src="/x-logo.svg"
                alt="X logo"
                width={40}
                height={40}
                priority
            />
        </Link>
        <nav className="flex gap-6 text-sm text-white/80">
          <Link href="/">Home</Link>
          <Link href="/explore">Explore</Link>
          <Link href="/profile">Profile</Link>
        </nav>
    </header>
  );
}