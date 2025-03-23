import Footer from "@/ui/molecules/Footer";
import Header from "@/ui/molecules/Header";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="w-[100vw] p-4 bg-[var(--color-black)] text-[var(--color-gray)]">
        {children}
      </main>
      <Footer />
    </>
  );
}
