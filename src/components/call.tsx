type Props = {
  isCalling: boolean;
  onRejectCall?: () => void;
  onAnswerCall?: () => void;
  callerName: string;
  callerIcon?: string;
  background?: string;
};

const Call = ({
  isCalling,
  onRejectCall,
  onAnswerCall,
  callerName,
  callerIcon,
}: Props) => {
  return !isCalling ? null : (
    <div className="absolute bg-black inset-0 flex flex-col text-white">
      <div className="flex-1 flex flex-col gap-4 justify-center items-center">
        {callerIcon && (
          <img
            src={callerIcon}
            className="w-sm object-cover bg-white rounded-full p-2"
          />
        )}
        <p className="text-3xl">{callerName}</p>
      </div>
      <div className="flex justify-around py-4">
        <button onClick={onRejectCall} className="bg-red-700 px-4 py-2">
          Reject
        </button>
        <button onClick={onAnswerCall} className="bg-green-700 px-4 py-2">
          Answer
        </button>
      </div>
    </div>
  );
};

export default Call;
