import { PotionGrid } from "@/components/potions/potion-grid";
import { fetchPotions } from "@/lib/github";

export default async function Home() {
  const potions = await fetchPotions();
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold md:text-5xl mb-4 text-transparent bg-clip-text bg-linear-to-r from-magic-light-purple via-magic-purple to-magic-pink">
          Open Source Spirit Shop
        </h1>
        <p className="text-lg text-foreground/80 text-magic-light-purple">
          Discover magical potions brewed from open source ingredients
        </p>
      </div>
      <div className="mt-8">
        <PotionGrid potions={potions} />
      </div>
    </main>
  );
}
