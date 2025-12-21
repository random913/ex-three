import { PotionFilters } from "@/components/potions/potion-filters";
import { PotionGrid } from "@/components/potions/potion-grid";
import { fetchPotions } from "@/lib/github";
import { PotionType } from "@/types/github";

type PageType = {
  searchParams: Promise<{
    type: string;
  }>;
};

export default async function Home({ searchParams }: PageType) {
  const potions = await fetchPotions();
  const { type } = await searchParams;

  const filteredPotion = type
    ? potions.filter((potion: PotionType) => potion.magicalType === type)
    : potions;

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold md:text-5xl mb-4 text-transparent bg-clip-text bg-linear-to-r from-magic-light-purple via-magic-purple to-magic-pink">
          Open Source Spirit Shop
        </h1>
        <p className="text-lg text-magic-light-purple">
          Discover magical potions brewed from open source ingredients
        </p>
      </div>
      <div className="flex justify-center">
        <PotionFilters />
      </div>
      <div className="mt-8">
        <PotionGrid potions={filteredPotion} />
      </div>
    </main>
  );
}
