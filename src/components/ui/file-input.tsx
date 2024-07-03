"use client";

import { FolderIcon, XIcon } from "lucide-react";
import { useRef, useState } from "react";

export const FileInput = () => {
  const [fileName, setFileName] = useState<string>("");
  const handleFileChange = (e: any) => {
    if (e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    } else {
      setFileName("");
    }
  };
  const fileInputRef = useRef(null);
  const handleClearFile = () => {
    setFileName("");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };
  return (
    <div className="flex w-full items-center space-x-2">
      <label
        htmlFor="file-input"
        className="flex w-full cursor-pointer items-center gap-2.5 rounded-md border-[1.5px] border-gray-300 px-2.5 py-3 outline-none transition-colors hover:border-black/10 hover:bg-black/5"
      >
        <FolderIcon size={18} className="opacity-60" />
        <span className="flex w-full select-none justify-between text-sm font-medium text-black/60">
          {fileName ? fileName : "Выберите путь до папки с датасетом"}
          <span>
            {fileName && <XIcon size={20} onClick={handleClearFile} />}
          </span>
        </span>
      </label>
      <input
        id="file-input"
        type="file"
        className="hidden"
        onChange={handleFileChange}
        ref={fileInputRef}
      />
    </div>
  );
};
