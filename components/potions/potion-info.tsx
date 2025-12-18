import { PotionType } from "@/types/github";
import {
  PotionHeader,
  PotionInfoCard,
  PotionStats,
} from "@/components/potions/potion-components";
import { Badge, Calendar, CodeIcon, Github } from "lucide-react";
import Image from "next/image";

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

              <PotionInfoCard title="Github Stats">
                <PotionStats stars={stargazers_count} forks={forks_count} />
              </PotionInfoCard>

              <PotionInfoCard title="Language">
                <div className="flex items-center">
                  <CodeIcon className="h-4 w-4 text-green-400" />
                  {language}
                </div>
              </PotionInfoCard>

              <PotionInfoCard title="Last Update">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 text-purple-400" />
                  <span>
                    {new Date(updated_at).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </div>
              </PotionInfoCard>
            </div>
          </div>
        </div>

        {/* {Right column} */}
        <div className="md:col-span-2">
          <div
            className={` p-6 rounded 2xl border border-magic-purple/20  h-full`}
          >
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-linear-to-r from-magic-light-purple via-magic-purple to-magic-pink">
                Repository Details
              </h2>
              <a
                href={`https://github.com/${owner.login}/${name}`}
                className="inline-flex items-center gap-2 px-2 py-4 bg-magic-pink hover:bg-magic-pink/80 transition-colors duration-300 rounded-md"
              >
                <Github className="w-4 h-4" />
                View on Github
              </a>
            </div>
            <p className="text-foreground/80 mb-6">{description}</p>

            <div className="grid cols-1 md:grid-cols-2 gap-6 mb-6">
              <PotionInfoCard title="Organization">
                <div className="flex items-center gap-2">
                  <div className="relative overflow-hidden h-8 w-8 rounded-full ring-2 ring-purple-500/20">
                    <Image
                      src={owner.avatar_url}
                      alt={owner.login}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <span>{owner.login}</span>
                </div>
              </PotionInfoCard>

              <PotionInfoCard title="Repository Name">
                <span>{name}</span>
              </PotionInfoCard>
              <div className="mb-6">
                <PotionInfoCard title="Topics">
                  <div className="flex flex-wrap gap-2">
                    {topics.map((topic, index) => (
                      <p
                        key={index}
                        className="text-xs px-2 py-1 rounded-full bg-magic-purple/15 text-white/80 hover:bg-magic-purple/25"
                      >
                        {topic}
                      </p>
                    ))}
                  </div>
                </PotionInfoCard>
              </div>
            </div>
            <div
              className={` p-6 rounded 2xl border border-magic-purple/20  h-full`}
            >
              <h3 className="text-xl font-semibold mb-4 text-transparent bg-clip-text bg-linear-to-r from-magic-light-purple via-magic-purple to-magic-pink">
                Magicla Properties
              </h3>

              <div className="grid cols-1 md:grid-cols-2 gap-6 mb-6">
                <PotionInfoCard title="Brewing Difficulty">
                  <div className="flex items-center gap-2"></div>
                </PotionInfoCard>

                <PotionInfoCard title="Potency"></PotionInfoCard>
                <div className="mb-6">
                  <PotionInfoCard title="Notes from the Alchemist"></PotionInfoCard>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
