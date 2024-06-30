import { AnalyzerTypeSelector } from "@/components/ui/analyzer-type-selector";
import { Button } from "@/components/ui/button";
import { FileInput } from "@/components/ui/file-input";
import { LogoHeading } from "@/components/ui/logo-heading";
import { WandSparklesIcon } from "lucide-react";

const HomePage = () => {
  return (
    <div className="mt-10 flex flex-col items-center justify-center">
      <div className="flex w-1/2 flex-col items-center gap-5">
        <LogoHeading />
        <div className="flex w-full flex-col items-start gap-3">
          <AnalyzerTypeSelector />
          <div className="flex w-full flex-col items-end gap-3">
            <FileInput />
            <Button Icon={WandSparklesIcon} color="green">
              Проанализировать
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
