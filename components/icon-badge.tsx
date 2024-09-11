import { LucideIcon } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const backgroundVariants = cva(
  "rounded-full flex items-center justify-center",
  {
    variants: {
      variant: {
        default: "bg-sky-100",
        secondary: "bg-emrald-100",
      },
    //   iconVariant: {
    //     default: "text-sky-700",
    //     secondary: "text-emerald-700",
    //   },
      size: {
        default: "p-1.5",
        sm: "p-1",
      },
      defaultVariats: {
        variant: "default",
        size: "default",
      },
    },
  }
);

const iconVariants = cva("", {
  variants: {
    variant: {
      default: "text-sky-700",
      secondary: "text-emerald-700",
    },
    size: {
      default: "w-6 h-6",
      sm: "w-4 h-4",
    },
    defaultVariats: {
      variant: "default",
      size: "default",
    },
  },
});

type BackgroundVariatsProps = VariantProps<typeof backgroundVariants>;
type IconVariantsProps = VariantProps<typeof iconVariants>;

interface IconBadgeProps extends BackgroundVariatsProps, IconVariantsProps {
  icon: LucideIcon;
}

export const IconBadge = ({ icon: Icon, variant, size }: IconBadgeProps) => {
  return (
    <div className={cn(backgroundVariants({ variant, size }))}>
      <Icon className={cn(iconVariants({ variant, size }))} />
    </div>
  );
};
