import ShopCard from "./ShopCard";

const getProducts = async () => {
  const res = await fetch(process.env.BASE_URL + "/api/products/rec", {
    next: { revalidate: 0 },
  });
  const json = await res.json();
  return json;
};

export default async function RecomendationMenu() {
  const products = await getProducts();

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-3">
      {products.products.map((product, id) => (
        <ShopCard
          id={product.id}
          key={id}
          title={product.title}
          price={product.price / 1000 + "K"}
          pack={product.pack}
          imagesrc={product.imgurl}
        />
      ))}
    </section>
  );
}
