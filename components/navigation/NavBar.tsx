import Image from "next/image";
import Link from "next/link";


import MobileNavBar from "@/components/navigation/MobileNavBar";
import { ModeToggle } from "@/components/navigation/ModeToggle";


const NavBar = () => {
  return (
    <nav className="flex-between background-light900_dark200 fixed top-0 z-50 w-full gap-5 p-6 shadow-light-300 dark:shadow-none sm:px-12">
      <Link href="/" className="flex-center gap-1">
        <Image src="/icons/logo.svg" width={26} height={16} alt="logo" />
        <p className="text-dark100_light900 h2-bold font-space-grotesk max-sm:hidden">
          Stack<span className="text-primary-100">Buddy</span>
        </p>
      </Link>
      <p>Global Search</p>
      <div className="flex-between gap-5">
        <ModeToggle />
        <p>Auth icon</p>
        <MobileNavBar />
      </div>
    </nav>
  );
};

export default NavBar;
