import Image from "next/image";
import Link from "next/link";

export default function ShopCard({ id, title, price, pack, imagesrc, key }) {
  return (
    <Link href={`/detail/${id}`} key={key}>
      <div className="flex items-center justify-between w-full border-gray-600 border-2 rounded-lg px-4 py-3 hover:scale-95">
        <div className="flex space-x-4">
          <div>
            <Image
              src={imagesrc}
              width={56}
              height={62}
              alt="Kedai Abang Thai Tea"
              className="rounded-md"
            />
          </div>
          <div>
            <div>{title}</div>
            <div className="font-bold text-xl">{price}</div>
            <div className="text-xs text-gray-700/60">Kemasan : {pack}</div>
          </div>
        </div>
      </div>
    </Link>
  );
}
