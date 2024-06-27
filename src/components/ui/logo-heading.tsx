import { cn } from "@/lib/utils";
import { Roboto } from "next/font/google";

const robotoFont = Roboto({
  subsets: ["cyrillic"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-sans",
});
export const LogoHeading = () => {
  return (
    <div className="flex select-none flex-col items-end">
      <h6
        className={cn(
          "font-sans text-base font-medium leading-none opacity-25",
          robotoFont.variable,
        )}
      >
        v1.0
      </h6>
      <h1 className="leading-2 flex items-center font-sans text-3xl">
        <span className="font-medium first-letter:font-semibold">Dataset</span>
        &nbsp;
        <span className="first-letter:font-semibold">Analyzer</span>
      </h1>
    </div>
  );
};
