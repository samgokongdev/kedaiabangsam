import Navbar from "@/components/Navbar";

const getProductsDetail = async () => {
  const res = await fetch(process.env.BASE_URL + "/api/products/" + params.id, {
    next: { revalidate: 0 },
  });
  const json = await res.json();
  return json;
};

export default function page({ params }) {
  return (
    <main>
      <Navbar />
      {params.id}
    </main>
  );
}
