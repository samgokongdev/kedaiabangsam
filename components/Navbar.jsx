"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

export default function Navbar() {
  const path = usePathname();

  return (
    <nav className="flex justify-between items-center mb-10">
      {path === "/" ? (
        <Link href="/">
          <div className="hover:scale-95">
            <Image
              src="/logo.svg"
              width={122.5}
              height={36}
              alt="kedai abang sam"
            />
          </div>
        </Link>
      ) : (
        <Link href="/">
          <div className="hover:scale-95">
            <Image src="/back.svg" width={34} height={34} alt="back" />
          </div>
        </Link>
      )}
      <div className="flex">
        {path === "/cart" ? (
          ""
        ) : (
          <Link href="/cart">
            <div className="relative flex hover:scale-90">
              <Image src="/cart.svg" width={34} height={34} alt="cart logo" />
              <span className="absolute right-0 top-0 rounded-full bg-red-600 w-4 h-4 top right p-0 m-0 text-white text-xs font-bold  leading-tight text-center">
                5
              </span>
            </div>
          </Link>
        )}
        <Link href="/cart">
          <div className="hover:scale-90">
            <Image
              src="/profile.svg"
              width={34}
              height={34}
              alt="profil logo"
            />
          </div>
        </Link>
      </div>
    </nav>
  );
}
