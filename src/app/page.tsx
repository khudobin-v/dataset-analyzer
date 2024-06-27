import { AnalyzerTypeSelector } from "@/components/ui/analyzer-type-selector";
import { LogoHeading } from "@/components/ui/logo-heading";

const HomePage = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <LogoHeading />
      <AnalyzerTypeSelector />
    </div>
  );
};

export default HomePage;
