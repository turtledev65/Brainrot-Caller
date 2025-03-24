import { IoMdAdd as AddIcon } from "react-icons/io";
import Modal from "./modal";
import { FormEvent, useCallback, useState, useRef } from "react";

type ItemProps = {
  name: string;
  onClick?: () => void;
};
export const Item = ({ name, onClick }: ItemProps) => {
  return (
    <div
      onClick={onClick}
      className="bg-gray-300 dark:bg-slate-900 dark:hover:bg-slate-950 dark:text-gray-50 h-40 cursor-pointer hover:bg-gray-400 transition-colors text-gray-800 rounded-sm p-4 flex justify-center items-center"
    >
      <p className="text-lg">{name}</p>
    </div>
  );
};

type AddItemProps = {
  onClick?: () => void;
};
export const AddItem = ({ onClick }: AddItemProps) => {
  return (
    <div
      onClick={onClick}
      className="bg-transparent border-4 text-gray-300 dark:text-slate-900  border-gray-300  dark:border-slate-900  h-40 cursor-pointer hover:text-gray-800 hover:bg-gray-300 dark:hover:bg-slate-900 transition-colors rounded-sm p-4 flex justify-center items-center"
    >
      <AddIcon className="text-4xl" />
    </div>
  );
};
