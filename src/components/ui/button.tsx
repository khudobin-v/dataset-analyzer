import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";

type ButtonProps = {
  Icon?: LucideIcon;
  color?: "green" | "red" | "blue";
  children: ReactNode;
};

export const Button = ({ Icon, color, children }: ButtonProps) => {
  return (
    <button
      className={cn(
        "flex items-center gap-3 rounded-md bg-black/80 p-2 font-medium text-white",
        { "bg-red-500": color === "red" },
        { "bg-green-600": color === "green" },
        { "bg-blue-500": color === "blue" },
      )}
    >
      <span className={cn({ "visible block": Icon })}>
        {Icon && <Icon size={18} />}
      </span>
      {children}
    </button>
  );
};
