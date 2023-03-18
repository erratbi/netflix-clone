import Link from "next/link";
import Image from "next/image";
import { LanguageSwitch } from "@/components/index";
import { Button } from "@/components/ui";

export default function Header() {
  return (
    <header className="container flex items-center justify-between py-7 lg:py-6">
      <Link href="/">
        <Image src="/images/logo.png" alt="Logo" width={1280} height={346} className="h-6 w-auto lg:h-10" />
      </Link>
      <div className="flex items-center justify-end gap-6">
        <LanguageSwitch onChange={(lang) => console.log(lang)} />
        <Button variant="primary">Sign In</Button>
      </div>
    </header>
  );
}
