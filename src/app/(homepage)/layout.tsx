import { Footer } from "@/components/NavbarAndFooter/Footer";
import Navbar from "@/components/NavbarAndFooter/Navbar";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <div className="pt-12 bg-[#EBF0F4]">{children}</div>
      <Footer />
    </>
  );
}
