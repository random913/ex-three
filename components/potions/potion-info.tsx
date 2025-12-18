import { PotionType } from "@/types/github";
import {
  PotionHeader,
  PotionInfoCard,
  PotionStats,
} from "@/components/potions/potion-components";

interface PotionInfoType {
  potion: PotionType;
}

export default function PotionInfo({ potion }: PotionInfoType) {
  const title = "Potion Details";
  const subTitle = "Discover the magical properties";
  const {
    name,
    owner,
    description,
    stargazers_count,
    forks_count,
    potionEffect,
    topics,
    language,
    updated_at,
    magicalType,
  } = potion;
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="mb-2 text-4xl font-bold text-purple-200">{title}</h1>
        <p className="text-purple-300/70">{subTitle}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* {Left column} */}
        <div className="md:col-span-1">
          <div
            className={` p-6 rounded 2xl border border-magic-purple/20  h-full potion-${magicalType}`}
          >
            <PotionHeader name={name} owner={owner} />

            <div className="space-y-4">
              <PotionInfoCard title="Effect">
                <p>{potionEffect}</p>
              </PotionInfoCard>
            </div>

            <PotionInfoCard title="Github Stats">
              <PotionStats stars={stargazers_count} forks={forks_count} />
            </PotionInfoCard>
          </div>
        </div>

        {/* {Right column} */}
      </div>
    </main>
  );
}
