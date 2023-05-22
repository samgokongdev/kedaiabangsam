import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center mb-10">
      <div>
        <Image
          src="/logo.svg"
          width={122.5}
          height={36}
          alt="kedai abang sam"
        />
      </div>
      <div className="flex">
        <Link href="/cart">
          <div className="relative flex">
            <Image src="/cart.svg" width={34} height={34} alt="cart logo" />
            <span className="absolute right-0 top-0 rounded-full bg-red-600 w-4 h-4 top right p-0 m-0 text-white text-xs font-bold  leading-tight text-center">
              5
            </span>
          </div>
        </Link>
        <div>
          <Image src="/profile.svg" width={34} height={34} alt="profil logo" />
        </div>
      </div>
    </nav>
  );
}
