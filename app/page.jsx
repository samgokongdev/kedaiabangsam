import AllMenu from "@/components/AllMenu";
import HeaderSection from "@/components/HeaderSection";
import Navbar from "@/components/Navbar";
import RecomendationMenu from "@/components/RecomendationMenu";

export default function page() {
  return (
    <main>
      <Navbar />
      <HeaderSection title="Rekomendasi" />
      <RecomendationMenu />
      <HeaderSection title="Semua Menu" />
      <AllMenu />
    </main>
  );
}
