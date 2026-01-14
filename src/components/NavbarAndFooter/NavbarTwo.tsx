"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Images } from "@/lib/store/images";
import { cn } from "@/lib/utils";
import Cookies from "js-cookie";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { LuMenu } from "react-icons/lu";
import MainContainer from "../container/MainContainer";
import { config } from "@/config";

type NavItem = {
  id: number;
  pathName: string;
  label: string;
};

export const navItems: NavItem[] = [
  { id: 3, pathName: "/", label: "Home" },
  { id: 2, pathName: "/about", label: "About" },
  { id: 2, pathName: "/resort", label: "Resort" },
  { id: 2, pathName: "/package", label: "Package" },
];

function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [matches, query]);

  return matches;
}

const NavbarTwo = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  useEffect(() => {
    if (isDesktop) {
      setIsSheetOpen(false);
    }
  }, [isDesktop]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => {
    if (path === "/") return pathname === path;
    return pathname.startsWith(path);
  };

  return (
    <header
      className={cn(
        "fixed z-50 w-full transition-all duration-500",
        isScrolled ? "top-0 backdrop-blur-md shadow-md" : "top-5 shadow-none"
      )}
    >
      <MainContainer>
        <div className="mx-auto flex items-center justify-between px-3  bg-white rounded-lg py-5">
          {/* Mobile Menu */}
          <div className="block md:hidden">
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="cursor-pointer">
                  <LuMenu className="size-8 text-gray-800 rounded cursor-pointer" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col gap-6 py-6">
                  <Link href="/" className="flex items-center">
                    <Image
                      className="w-[120px]"
                      src={Images.logo}
                      alt="Logo"
                      width={300}
                      height={300}
                    />
                  </Link>
                  <nav className="flex flex-col space-y-1">
                    {navItems.map((item: NavItem) => (
                      <Link
                        key={item.id}
                        href={item.pathName}
                        className={cn(
                          "text-[14px] text-[#3d3d3d] hover:text-blue-500 list-none hover:bg-[var(--custom-orange)] px-3 py-2 rounded-md transition-colors",
                          isActive(item.pathName) &&
                            "bg-[var(--custom-orange)] text-white"
                        )}
                        onClick={() => setIsSheetOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* Desktop Logo */}
          <div className="flex items-center">
            <Link href="/" className="md:flex items-center hidden">
              <Image
                className="w-[120px]"
                src={Images.logo}
                alt="Logo"
                width={300}
                height={300}
              />
            </Link>

            <div className="flex items-center gap-2 md:hidden">
              <Link href="/sign-up">
                <Button className="text-white bg-main border border-[#ffffff6c] hover:text-primary px-4 py-1 h-fit rounded hover:bg-main cursor-pointer">
                  Sign Up
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </MainContainer>
    </header>
  );
};

export default NavbarTwo;
