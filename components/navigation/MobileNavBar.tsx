import Image from "next/image";
import Link from "next/link";

import NavLinks from "@/components/navigation/NavLinks";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import ROUTES from "@/constants/routes";

const MobileNavBar = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Image
          src="/icons/hamburger.svg"
          width={36}
          height={36}
          alt="menu"
          className="invert-colors sm:hidden"
        />
      </SheetTrigger>
      <SheetContent
        side="left"
        className="background-light900_dark200 border-none"
      >
        <SheetTitle className="hidden">Navigation</SheetTitle>

        <SheetClose asChild>
          <Link href="/" className="flex items-center gap-1">
            <Image src="/icons/logo.svg" width={23} height={23} alt="logo" />
            <p className="text-dark100_light900 h2-bold font-space-grotesk dark:text-light-900">
              Stack<span className="text-primary-100">Buddy</span>
            </p>
          </Link>
        </SheetClose>

        <div className="no-scrollbar flex h-[calc(100vh-80px)] flex-col justify-between overflow-y-auto">
          <section className="flex h-full flex-col gap-6 pt-10">
            <NavLinks isMobileNav />
          </section>

          <div className="flex flex-col gap-3">
            <SheetClose asChild>
              <Link href={ROUTES.SIGN_IN}>
                <Button className="small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
                  <span className="primary-text-gradient">Sign In</span>
                </Button>
              </Link>
            </SheetClose>

            <SheetClose asChild>
              <Link href={ROUTES.SIGN_UP}>
                <Button className="small-medium btn-tertiary light-border-2 text-dark400_light900 min-h-[41px] w-full rounded-lg border px-4 py-3 shadow-none">
                  Sign Up
                </Button>
              </Link>
            </SheetClose>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavBar;
