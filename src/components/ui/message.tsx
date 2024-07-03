import { CircleAlertIcon } from "lucide-react";

type MessageProps = {
  textMessage?: string;
};

export const Message = ({
  textMessage = "Произошла ошибка, попробуйте повторить ещё раз",
}: MessageProps) => {
  return (
    <div className="flex w-full justify-between rounded-lg bg-red-500/50 px-4 py-3">
      <div className="flex items-center gap-3 text-white">
        <CircleAlertIcon size={22} />
        <span className="font-medium">{textMessage}</span>
      </div>
      <button className="flex items-center justify-center rounded-lg bg-white px-3 py-0.5 font-medium transition-colors hover:bg-gray-50">
        Повторить
      </button>
    </div>
  );
};
