import {
  MdOutlineCall as CallAnswerIcon,
  MdOutlineCallEnd as CallEndIcon,
} from "react-icons/md";
import { Caller } from "../types";

type Props = Caller & {
  onRejectCall?: () => void;
  onAnswerCall?: () => void;
};

const Call = ({ onRejectCall, onAnswerCall, name, icon }: Props) => {
  return (
    <div className="absolute bg-black inset-0 flex flex-col text-white">
      <div className="flex-1 flex flex-col gap-4 justify-center items-center">
        {icon && (
          <img
            src={icon}
            className="w-sm object-cover bg-white rounded-full p-2"
          />
        )}
        <p className="text-3xl">{name}</p>
      </div>
      <div className="flex justify-around py-12">
        <button
          onClick={onRejectCall}
          className="bg-red-700 cursor-pointer hover:bg-red-800 p-6 text-3xl rounded-full"
        >
          <CallEndIcon />
        </button>
        <button
          onClick={onAnswerCall}
          className="bg-green-700 cursor-pointer hover:bg-green-800 p-6 text-3xl rounded-full"
        >
          <CallAnswerIcon />
        </button>
      </div>
    </div>
  );
};

export default Call;
