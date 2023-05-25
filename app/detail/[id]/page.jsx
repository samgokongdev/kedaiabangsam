import Counter from "@/components/Counter";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import path from "path";
// import { useState } from "react";

const getProducts = async (id) => {
  const res = await fetch(`${process.env.BASE_URL}/api/products/${id}`, {
    next: { revalidate: 0 },
  });
  const json = await res.json();
  return json;
};

export default async function page({ params: { id } }) {
  const products = await getProducts(id);

  return (
    <main>
      <Navbar />
      <section className="mt-10">
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-6">
          <div className="flex flex-col space-y-5">
            <div className="w-full h-[360px] sm:h-[480px] relative">
              <Image
                alt="thaitea"
                src="/thaitea.jpg"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-lg"
              />
            </div>
          </div>
          <div className="mt-5 sm:mt-0">
            <div className="space-y-2">
              <div className="text-2xl font-bold text-gray-800">
                {products.products.title}
              </div>
              <div>
                <p className="text-xs text-gray-600 text-justify">
                  {products.products.content}
                </p>
              </div>
            </div>
            <div>
              <Counter price={products.products.price} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
