import { IconBadge } from "@/components/icon-badge";
import { LucideIcon } from "lucide-react";
import { Icon } from "next/dist/lib/metadata/types/metadata-types";
import React from "react";

interface InfoCardProps {
  icon: LucideIcon;
  variant: "default" | "secondary";
  label: string;
  numberOfItems: number;
}

const InfoCard = ({
  variant,
  icon: Icon,
  label,
  numberOfItems,
}: InfoCardProps) => {
  return (
    <div className="border rounded-md flex items-center gap-x-2 p-3">
      <IconBadge variant={variant} icon={Icon} />
      <div>
        <p className="font-medium">{label}</p>
        <p>
          {numberOfItems} {numberOfItems === 1 ? "Course" : "Courses"}
        </p>
      </div>
    </div>
  );
};

export default InfoCard;
