import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[100dvh] flex items-center justify-center">
      <div className="flex flex-col gap-3 items-center">
        <h4 className="font-medium md:text-[72px] text-[44px] md:leading-12 leading-8">
          404
        </h4>
        <h4 className="text-slate-500">Oops this page not found!</h4>
        <p>This page may have been removed</p>
        <Link href="/">
          <Button className="cursor-pointer">Go Home</Button>
        </Link>
      </div>
    </div>
  );
}
