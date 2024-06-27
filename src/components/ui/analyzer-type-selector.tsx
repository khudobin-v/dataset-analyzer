"use client";

import { CopyIcon, TagIcon } from "lucide-react";
import { useState } from "react";
import { AnalyzerTypeButton } from "./analyzer-type-button";

export const AnalyzerTypeSelector = () => {
  const [selectedType, setSelectedType] = useState<string | null>(null);
  return (
    <div className="flex items-center gap-2">
      <AnalyzerTypeButton
        Icon={CopyIcon}
        name="Детекция"
        selected={selectedType === "Детекция"}
        onClick={() => setSelectedType("Детекция")}
      />
      <AnalyzerTypeButton
        Icon={TagIcon}
        name="Классификация"
        selected={selectedType === "Классификация"}
        onClick={() => setSelectedType("Классификация")}
      />
    </div>
  );
};
