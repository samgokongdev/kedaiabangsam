import { Suspense } from "react";
import ShopCard from "./ShopCard";
import Loading from "@/app/loading";

const getProducts = async () => {
  const res = await fetch(process.env.BASE_URL + "/api/products", {
    next: { revalidate: 0 },
  });
  const json = await res.json();
  return json;
};

export default async function AllMenu() {
  const products = await getProducts();

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-3">
      <Suspense fallback={<Loading />}>
        {products.products.map((product, id) => (
          <ShopCard
            key={id}
            title={product.title}
            price={product.price / 1000 + "K"}
            pack={product.pack}
            imagesrc={product.imgurl}
          />
        ))}
      </Suspense>
    </section>
  );
}
