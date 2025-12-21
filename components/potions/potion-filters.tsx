import { cn } from "@/lib/utils";
import { getFilterPillColor } from "@/utils";
import { MAGICAL_TYPES } from "@/utils/constants";
import Link from "next/link";

export function PotionFilters() {
  return (
    <div className="flex flex-wrap gap-6">
      {MAGICAL_TYPES.map(({ id, icon, label }) => (
        <Link
          href={id === "all" ? "/" : `?type=${id}`}
          key={id}
          className={cn(
            `flex items-center gap-2 bg-linear-to-br to-transparent rounded-full p-2`,
            getFilterPillColor(id)
          )}
        >
          {icon}
          {label}
        </Link>
      ))}
    </div>
  );
}
