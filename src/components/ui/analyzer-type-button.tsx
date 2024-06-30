import { cn } from "@/lib/utils";
import { type LucideIcon } from "lucide-react";

type AnalyzerTypeButtonProps = {
  name: string;
  Icon: LucideIcon;
  selected: boolean;
  onClick: () => void;
};

export const AnalyzerTypeButton = ({
  name,
  Icon,
  selected,
  onClick,
}: AnalyzerTypeButtonProps) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        "flex cursor-pointer items-center justify-center gap-2 rounded-md border-[1.5px] px-2.5 py-3 transition-colors hover:border-black/10 hover:bg-black/5 hover:shadow-sm",
        { "border-green-600 bg-black/5 hover:border-green-500": selected },
      )}
    >
      <Icon size={18} />
      <span className="select-none text-sm font-medium">{name}</span>
    </div>
  );
};
