import { IoMdAdd as AddIcon } from "react-icons/io";

type ItemProps = {
  name: string;
  onClick?: () => void;
};
export const Item = ({ name, onClick }: ItemProps) => {
  return (
    <div
      onClick={onClick}
      className="bg-gray-300 h-40 cursor-pointer hover:bg-gray-400 transition-colors text-gray-800 rounded-sm p-4 flex justify-center items-center"
    >
      <p className="text-lg">{name}</p>
    </div>
  );
};

type ItemAddProps = {
  onClick?: () => void;
};
export const ItemAdd = ({ onClick }: ItemAddProps) => {
  return (
    <div
      onClick={onClick}
      className="bg-transparent border-4 text-gray-300 border-gray-300 h-40 cursor-pointer hover:text-gray-800 hover:bg-gray-300 hover:border-gray-300 transition-colors rounded-sm p-4 flex justify-center items-center"
    >
      <AddIcon className="text-4xl" />
    </div>
  );
};
