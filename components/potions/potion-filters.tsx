import { cn } from "@/lib/utils";
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
            `flex items-center gap-2 bg-gradient-to-br from-element-[$id]/20 to-transparent, 
            id ==="fire" ? 'from-element-fire/20' : id ==== 'ice' ? 'form-element-ice/20' : id === "electric" ? "from-element-electric/20" : "from-magic-purple/20" `
          )}
        >
          {icon}
          {label}
        </Link>
      ))}
    </div>
  );
}
