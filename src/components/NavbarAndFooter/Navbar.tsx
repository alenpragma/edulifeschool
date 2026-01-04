"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { config } from "@/config";
import { Images } from "@/lib/store/images";
import { cn } from "@/lib/utils";
import Cookies from "js-cookie";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { CiMail } from "react-icons/ci";
import { IoIosCall } from "react-icons/io";
import { LuMenu } from "react-icons/lu";
import MainContainer from "../container/MainContainer";
import { ImLocation2 } from "react-icons/im";

type NavItem = {
  id: number;
  pathName: string;
  label: string;
};

export const navItems: NavItem[] = [
  { id: 1, pathName: "/", label: "Home" },
  { id: 2, pathName: "/about", label: "About" },
  { id: 3, pathName: "/blog", label: "Blog" },
  { id: 4, pathName: "/event", label: "Event" },
  { id: 5, pathName: "/contact", label: "Contact" },
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

const Navbar = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const token = Cookies.get(config.tokenName!);
  // const getInitials = (name: string) => {
  //   return name
  //     .split(" ")
  //     .map((n) => n[0])
  //     .join("")
  //     .toUpperCase();
  // };

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

  const [hoverValue, setHovervalue] = useState("");
  const handleLogout = () => {
    window.location.reload();
    Cookies.remove(config.tokenName!);
  };
  return (
    <header className={cn("fixed top-0 z-50 w-full transition-all ")}>
      <div className="bg-main">
        <MainContainer className="flex md:flex-row flex-col justify-between md:items-center items-start text-white py-2 text-[12px]">
          <div className="flex items-center gap-2">
            <IoIosCall /> <CiMail />
            <span>edulifeitschool@gmail.com</span>
          </div>
          <p className="flex items-center gap-2">
            <ImLocation2 />
            Arambag, Shantinagar, Khagrachari Sadar
          </p>
        </MainContainer>
      </div>
      <div
        className={cn(
          "duration-500",
          isScrolled
            ? "bg-white/30 backdrop-blur py-3 shadow-lg"
            : "bg-[#FFFFFF] py-2 shadow-lg"
        )}
      >
        <MainContainer>
          <div className="mx-auto flex items-center justify-between w-full">
            <div className="block md:hidden">
              <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                <div className="flex items-center gap-2">
                  <SheetTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="cursor-pointer"
                    >
                      <LuMenu className="size-8  text-gray-800 rounded cursor-pointer" />
                    </Button>
                  </SheetTrigger>
                  <Link href="/" className="flex items-center">
                    <Image
                      className="w-[120px]"
                      src={Images.logo}
                      alt="img"
                      width={300}
                      height={300}
                    />
                  </Link>
                </div>
                <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                  <div className="flex flex-col gap-3 py-6">
                    <Link href="/" className="flex items-center">
                      <Image
                        className="w-[120px]"
                        src={Images.logo}
                        alt="img"
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
                              "bg-[var(--custom-orange)]"
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

            <div className="flex items-center justify-between">
              <Link href="/" className="md:flex items-center hidden">
                <Image
                  className="w-[120px]"
                  src={Images.logo}
                  alt="img"
                  width={300}
                  height={300}
                />
              </Link>

              {!token && (
                <div className="flex items-center gap-2 md:hidden justify-end">
                  <Link href="/admission">
                    <Button className="text-white bg-main border border-[#ffffff6c] hover:text-primary px-4 py-1 h-fit rounded hover:bg-main cursor-pointer">
                      Admission
                    </Button>
                  </Link>
                </div>
              )}
            </div>
            <div className="hidden md:flex items-center gap-3">
              <div className="flex items-center gap-3">
                {navItems.map((item: NavItem) => (
                  <div key={item.id} className="group relative">
                    <Link href={item.pathName} passHref>
                      <div
                        onMouseEnter={() => setHovervalue(item.label)}
                        onMouseLeave={() => setHovervalue("")}
                        className={cn(
                          navigationMenuTriggerStyle(),
                          "relative px-4 py-2 text-black transition-colors duration-200 hover:text-blue-600 bg-transparent border-0 font-medium text-[18px] !hover:bg-none"
                        )}
                      >
                        <span className="relative z-10 ">{item.label}</span>
                        <span
                          className={cn(
                            "absolute bottom-0 left-0 h-0.5 bg-[var(--custom-orange)] origin-left transition-all duration-300 ease-in-out",
                            hoverValue === item.label ? "w-full" : "w-0"
                          )}
                        />
                        {isActive(item.pathName) && (
                          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[var(--custom-orange)]" />
                        )}
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
              <div className="hidden md:flex items-center gap-5">
                <div className="flex items-center gap-2">
                  <Link href="/admission">
                    <Button className="bg-main/90 text-white hover:text-white border border-[#ffffff6c] px-4 py-2 h-fit rounded-lg hover:bg-main cursor-pointer">
                      Admission
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </MainContainer>
      </div>
    </header>
  );
};

export default Navbar;
