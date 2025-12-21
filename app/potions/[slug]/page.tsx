import PotionInfo from "@/components/potions/potion-info";
import { fetchPotion } from "@/lib/github";
import { notFound } from "next/navigation";

type MetadataParams = {
  params: Promise<{ slug: string }>;
};

export const generateMetadata = async ({ params }: MetadataParams) => {
  const { slug } = await params;

  const [owner, repo] = slug.split("_");

  const potion = await fetchPotion(owner, repo);

  if (!potion) {
    notFound();
  }

  return {
    title: `${potion?.name}`,
    description: potion?.description,
    alternates: {
      canonical: `/potions/${owner}_${repo}`,
    },
  };
};

export async function generateStaticParams() {
  const popularRepos = [
    "facebook/react",
    "tailwindlabs/tailwindcss",
    "nodejs/node",
    "vercel/next.js",
    "typescript/typescript",
  ];

  return popularRepos.map((repo) => ({
    slug: repo.replace("/", "_"),
  }));
}

export default async function PotionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const [owner, repo] = slug.split("_");

  if (!owner || !repo) {
    notFound();
  }

  const potion = await fetchPotion(owner, repo);

  if (!potion) {
    notFound();
  }

  return <PotionInfo potion={potion} />;
}
