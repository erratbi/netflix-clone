import Link from "next/link";
import Image from "next/image";
import { LanguageSwitch } from "@/components/index";
import { Button } from "@/components/ui";
import type { FC, HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const Header: FC<HTMLAttributes<HTMLElement>> = ({ className }) => {
  return (
    <header className={cn("container flex items-center justify-between py-7 lg:py-6", className)}>
      <Link href="/">
        <Image src="/images/logo.png" alt="Logo" width={1280} height={346} className="h-6 w-auto lg:h-10" />
      </Link>
      <div className="flex items-center justify-end gap-2 lg:gap-6">
        <LanguageSwitch onChange={(lang) => console.log(lang)} />
        <Button variant="primary">Sign In</Button>
      </div>
    </header>
  );
};

export default Header;
