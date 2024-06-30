import { AnalyzerTypeSelector } from "@/components/ui/analyzer-type-selector";
import { Button } from "@/components/ui/button";
import { FileInput } from "@/components/ui/file-input";
import { LogoHeading } from "@/components/ui/logo-heading";
import { WandSparklesIcon } from "lucide-react";

const HomePage = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <LogoHeading />
      <AnalyzerTypeSelector />
      <FileInput />
      <Button Icon={WandSparklesIcon} color="green">
        Проанализировать
      </Button>
    </div>
  );
};

export default HomePage;
