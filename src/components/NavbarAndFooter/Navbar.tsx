"use client";

import { Button } from "@/components/ui/button";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { config } from "@/config";
import { Images } from "@/lib/store/images";
import { cn } from "@/lib/utils";
import { ContactItem } from "@/types/generalType/generalType";
import Cookies from "js-cookie";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { CiMail } from "react-icons/ci";
import { ImLocation2 } from "react-icons/im";
import { IoIosCall } from "react-icons/io";
import { LuMenu } from "react-icons/lu";
import MainContainer from "../container/MainContainer";
import { DialogTitle } from "../ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

type NavItem = {
  id: number;
  pathName: string;
  label: string;
};

export const navItems: NavItem[] = [
  { id: 1, pathName: "/home", label: "Home" },
  { id: 2, pathName: "/blog", label: "Blog" },
  { id: 3, pathName: "/about", label: "About" },
  { id: 4, pathName: "/event", label: "Event" },
  // { id: 5, pathName: "/contact", label: "Contact" },
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

const Navbar = ({
  contactItemSiteSetting,
}: {
  contactItemSiteSetting: ContactItem[];
}) => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const router = useRouter();
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

  const handleSmoothScroll = (section: string) => {
    const el = document.getElementById(section);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleNavigateWithScroll = (section: string) => {
    if (pathname !== "/") {
      sessionStorage.setItem("scrollTo", section);
      router.push("/");
    } else {
      handleSmoothScroll(section);
    }
  };

  useEffect(() => {
    if (pathname === "/") {
      const section = sessionStorage.getItem("scrollTo");
      if (section) {
        setTimeout(() => handleSmoothScroll(section), 300);
        sessionStorage.removeItem("scrollTo");
      }
    }
  }, [pathname]);

  return (
    <header className={cn("fixed top-0 z-50 w-full transition-all ")}>
      <div className="bg-main">
        <MainContainer className="flex md:flex-row flex-col justify-between md:items-center items-start text-white py-2 text-[12px]">
          <div className="flex items-center gap-2">
            {(() => {
              const phoneItem = contactItemSiteSetting.find(
                (item) => item.name === "Phone"
              )?.value;
              const emailItem = contactItemSiteSetting.find(
                (item) => item.name === "Email"
              )?.value;
              return (
                <>
                  {phoneItem && (
                    <a href={`tel:${phoneItem}`}>
                      <IoIosCall />
                    </a>
                  )}
                  {emailItem && (
                    <a
                      href={`mailto:${emailItem}`}
                      className="flex items-center gap-1"
                    >
                      <CiMail />
                      <span>{emailItem}</span>
                    </a>
                  )}
                </>
              );
            })()}
          </div>

          <p className="flex items-center gap-2">
            <ImLocation2 />
            {
              contactItemSiteSetting.find((item) => item.name === "Address")
                ?.value
            }
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
                  <DialogTitle>
                    <VisuallyHidden>Mobile Navigation Menu</VisuallyHidden>
                  </DialogTitle>
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
                      {navItems.map((item) =>
                        item.label === "Contact" ? (
                          <Link
                            key={item.id}
                            href="/contact"
                            className="text-[14px] px-3 py-2 rounded-md"
                            onClick={() => setIsSheetOpen(false)}
                          >
                            {item.label}
                          </Link>
                        ) : (
                          <p
                            key={item.id}
                            className="text-[14px] px-3 py-2 rounded-md cursor-pointer"
                            onClick={() => {
                              handleNavigateWithScroll(
                                item.label.toLowerCase()
                              );
                              setIsSheetOpen(false);
                            }}
                          >
                            {item.label}
                          </p>
                        )
                      )}
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

              <div className="flex items-center gap-2 md:hidden justify-end">
                <Link href="/contact">
                  <Button className="text-white bg-main/80 border border-[#ffffff6c] px-4 py-1 h-fit rounded hover:bg-main hover:text-white cursor-pointer">
                    Contact-Us
                  </Button>
                </Link>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-3">
              <div className="flex items-center gap-3">
                {navItems.map((item: NavItem) => (
                  <div key={item.id} className="group relative">
                    {item.label === "Contact" ? (
                      /* ---------- NORMAL CONTACT ROUTE ---------- */
                      <Link href="/contact" passHref>
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
                    ) : (
                      /* ---------- SMOOTH SCROLL ITEMS ---------- */
                      <div
                        onClick={() =>
                          handleNavigateWithScroll(item.label.toLowerCase())
                        }
                        onMouseEnter={() => setHovervalue(item.label)}
                        onMouseLeave={() => setHovervalue("")}
                        className={cn(
                          navigationMenuTriggerStyle(),
                          "relative px-4 py-2 text-black transition-colors duration-200 hover:text-blue-600 bg-transparent border-0 font-medium text-[18px] cursor-pointer !hover:bg-none"
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
                    )}
                  </div>
                ))}
              </div>

              <div className="hidden md:flex items-center gap-5">
                <div className="flex items-center gap-2">
                  <Link href="/contact">
                    <Button className="bg-main/90 text-white hover:text-white border border-[#ffffff6c] px-4 py-2 h-fit rounded-lg hover:bg-main cursor-pointer">
                      Contact-Us
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
