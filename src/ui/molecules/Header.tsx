import Link from "next/link";

export default function Header(): React.ReactNode {
  return (
    <header className="w-[100vw] p-4 bg-[var(--color-black)] text-[var(--color-gray)]">
      <Link href={"/"}>
        <h1 className="font-bold">PORTFOLIO</h1>
      </Link>
    </header>
  );
}
