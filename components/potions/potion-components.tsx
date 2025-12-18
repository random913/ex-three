import { cn } from "@/lib/utils";
import { formatNumber } from "@/utils/constants";
import { Package2Icon, StarIcon } from "lucide-react";
import Image from "next/image";

interface PotionHeaderType {
  name: string;
  owner: { login: string; avatar_url: string };
}

export const PotionHeader = ({
  name,
  owner: { login, avatar_url },
}: PotionHeaderType) => {
  return (
    <div className="flex items-center mb-2">
      <div className="w-10 h-10 rounded-full bg-secondary/50 mr-3 flex items-center justify-center">
        <div className="relative h-10 w-10 overflow-hidden rounded-full ring-2 ring-purple-500/20">
          <Image src={avatar_url} fill className="object-cover" alt={login} />
        </div>
      </div>

      <div>
        <h3 className="font-bold text-lg">{name}</h3>
        <p className="text-xs text-muted-foreground">{login}</p>
      </div>
    </div>
  );
};

interface PotionInfoCardType {
  title: string;
  children?: React.ReactNode;
}

export const PotionInfoCard = ({ title, children }: PotionInfoCardType) => {
  return (
    <div className="p-4 rounded-lg bg-background/40 border border-magic-purple/10">
      <h4>{title}</h4>
      {children}
    </div>
  );
};

interface PotionStatsTypes {
  stars: number;
  forks: number;
  classNames?: string;
}

export const PotionStats = ({ stars, forks, classNames }: PotionStatsTypes) => {
  return (
    <div className={cn("flex justify-between", classNames)}>
      <div className="flex items-center gap-1">
        <StarIcon className="w-3.5 h-3.5 text-yellow-400" />
        <span>{formatNumber(stars)}</span>
      </div>
      <div className="flex items-center gap-1">
        <Package2Icon className="w-3.5 h-3.5 text-gray-400" />
        <span>{formatNumber(forks)}</span>
      </div>
    </div>
  );
};
