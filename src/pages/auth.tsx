import type { NextPage } from "next";
import Image from "next/image";

const Auth: NextPage = () => {
  return (
    <main className="relative h-full">
      <div className="relative z-10 h-full bg-black/50">
        <Image src="/images/logo.png" alt="Logo" width={200} height={200} />
      </div>
      <Image
        src="/images/hero.jpg"
        alt="Hero image"
        fill
        priority
        className="pointer-events-none absolute inset-0 select-none object-cover object-center"
      />
    </main>
  );
};

export default Auth;
