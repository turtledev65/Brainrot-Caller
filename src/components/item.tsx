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
      className="bg-gray-300 h-40 cursor-pointer hover:bg-gray-400 transition-colors text-gray-800 rounded-sm p-4 flex justify-center items-center"
    >
      <p className="text-lg">{name}</p>
    </div>
  );
};

type ItemAddProps = {
  onAdd?: (val: string) => void;
};
export const ItemAdd = ({ onAdd }: ItemAddProps) => {
  const [isModalActive, setModalActive] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const handleSubmitForm = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!inputRef.current) return;
    const text = inputRef.current?.value.trim();
    if (!text || text.length == 0) return;

    inputRef.current.value = "";
    onAdd && onAdd(text);
    setModalActive(false);
  }, []);

  return (
    <>
      <Modal
        isActive={isModalActive}
        onRequestClose={() => setModalActive(false)}
      >
        <div className="flex h-full justify-center items-center">
          <form
            onSubmit={handleSubmitForm}
            className="bg-white rounded-sm p-4 flex flex-col items-center gap-2"
          >
            <h2 className="text-2xl py-4">Create</h2>
            <input
              type="text"
              className="text-lg border-2 border-gray-400 rounded-md outline-none p-1 active:border-gray-500"
              placeholder="Title"
              ref={inputRef}
            />
            <div className="flex justify-evenly text-gray-50 text-lg gap-4 py-2">
              <button
                type="button"
                className="rounded-sm cursor-pointer bg-red-500 hover:bg-red-600 transition-all px-4 py-2"
                onClick={() => setModalActive(false)}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="rounded-sm cursor-pointer bg-green-500 hover:bg-green-600 transition-all px-4 py-2"
              >
                Create
              </button>
            </div>
          </form>
        </div>
      </Modal>
      <div
        onClick={() => {
          setModalActive(true);
        }}
        className="bg-transparent border-4 text-gray-300 border-gray-300 h-40 cursor-pointer hover:text-gray-800 hover:bg-gray-300 hover:border-gray-300 transition-colors rounded-sm p-4 flex justify-center items-center"
      >
        <AddIcon className="text-4xl" />
      </div>
    </>
  );
};
