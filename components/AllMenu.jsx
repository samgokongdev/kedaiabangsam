import ShopCard from "./ShopCard";

export default function AllMenu() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-3">
      <ShopCard
        title="Special Thai Milk Tea"
        price="Rp 16.000"
        pack="Botol, Cup"
        imagesrc="/thaitea.jpg"
      />
      <ShopCard
        title="Special Thai Milk Tea"
        price="Rp 16.000"
        pack="Botol, Cup"
        imagesrc="/thaitea.jpg"
      />
    </section>
  );
}
