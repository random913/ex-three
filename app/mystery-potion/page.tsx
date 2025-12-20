import PotionInfo from "@/components/potions/potion-info";
import { notFound } from "next/navigation";
import { fetchRandomTrendingPotion } from "@/lib/github";

export default async function MysteryPotion() {
  const potion = await fetchRandomTrendingPotion();

  if (!potion) {
    notFound();
  }

  return <PotionInfo potion={potion} />;
}
