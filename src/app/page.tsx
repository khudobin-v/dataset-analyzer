import { AnalyzerTypeSelector } from "@/components/ui/analyzer-type-selector";
import { FileInput } from '@/components/ui/file-input'
import { LogoHeading } from "@/components/ui/logo-heading";


const HomePage = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <LogoHeading />
      <AnalyzerTypeSelector />
      <FileInput />
    </div>
  );
};

export default HomePage;
