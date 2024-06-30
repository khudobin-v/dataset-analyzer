import { FolderIcon } from "lucide-react";

export const FileInput = () => {
  return (
    <div className="flex w-full items-center space-x-2">
      <label
        htmlFor="file-input"
        className="flex w-full cursor-pointer items-center gap-2.5 rounded-md border-[1.5px] border-gray-300 px-2.5 py-3 outline-none transition-colors hover:border-black/10 hover:bg-black/5"
      >
        <FolderIcon size={18} className="opacity-60" />
        <span className="text-sm font-medium text-black/60">
          Выберите путь до папки с датасетом
        </span>
      </label>
      <input id="file-input" type="file" className="hidden" />
    </div>
  );
};
