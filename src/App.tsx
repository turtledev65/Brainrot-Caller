import {
  FormEvent,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import Navbar from "./components/navbar";
import Providers from "./providers";
import { GroupsContext } from "./providers/groups-providers";
import { AddItem, Item } from "./components/item";
import Call from "./components/call";
import Modal from "./components/modal";

function App() {
  return (
    <Providers>
      <Navbar />
      <GroupGrid />
      <CallScreen />
    </Providers>
  );
}

const GroupGrid = () => {
  const { groups, selectedGroup, selectGroup, selectCall } =
    useContext(GroupsContext);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4">
      {selectedGroup !== null ? (
        <>
          {selectedGroup.callers.map(caller => (
            <Item
              onClick={() => selectCall(caller)}
              name={caller.name}
              key={caller.name}
            />
          ))}
          <AddCallItem />
        </>
      ) : (
        <>
          {groups.map(group => (
            <Item
              onClick={() => selectGroup(group)}
              name={group.name}
              key={group.name}
            />
          ))}
          <AddGroupItem />
        </>
      )}
    </div>
  );
};

const AddCallItem = () => {
  const { selectedGroup, addCall } = useContext(GroupsContext);
  const [isModalActive, setModalActive] = useState(false);
  const nameInputRef = useRef<HTMLInputElement>(null);

  const handleSubmitForm = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (!selectedGroup) return;
      if (!nameInputRef.current) return;

      const name = nameInputRef.current.value.trim();
      if (!name || name.length === 0) return;

      addCall(selectedGroup.name, { name });
      setModalActive(false);
      nameInputRef.current.value = "";
    },
    [selectedGroup, addCall, setModalActive],
  );

  return (
    <>
      <Modal isActive={isModalActive}>
        <div className="flex h-full justify-center items-center">
          <form
            onSubmit={handleSubmitForm}
            className="bg-white dark:bg-slate-900 rounded-sm p-4 gap-2"
          >
            <h2 className="text-2xl py-4 mb-4">Create Call</h2>
            <input
              type="text"
              className="text-lg border-2 border-gray-400  rounded-md outline-none p-1 active:border-gray-500"
              placeholder="Name"
              required
              ref={nameInputRef}
            />
            <div className="flex justify-evenly mt-4 text-gray-50 text-lg gap-4 py-2">
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
      <AddItem onClick={() => setModalActive(true)} />
    </>
  );
};

const AddGroupItem = () => {
  const { addGroup } = useContext(GroupsContext);
  const [isModalActive, setModalActive] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmitForm = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (!inputRef.current) return;

      const text = inputRef.current?.value.trim();
      if (!text || text.length == 0) return;

      addGroup(text);
      setModalActive(false);
      inputRef.current.value = "";
    },
    [addGroup, setModalActive],
  );

  useEffect(() => {
    if (isModalActive) inputRef.current?.focus();
  }, [isModalActive]);

  return (
    <>
      <Modal
        isActive={isModalActive}
        onRequestClose={() => setModalActive(false)}
      >
        <div className="flex h-full justify-center items-center">
          <form
            onSubmit={handleSubmitForm}
            className="bg-white dark:bg-slate-900 rounded-sm p-4 flex flex-col items-center gap-2"
          >
            <h2 className="text-2xl py-4">Create Group</h2>
            <input
              type="text"
              className="text-lg border-2 border-gray-400  rounded-md outline-none p-1 active:border-gray-500"
              placeholder="Title"
              required
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
      <AddItem onClick={() => setModalActive(true)} />
    </>
  );
};

const CallScreen = () => {
  const { selectedCall, selectCall } = useContext(GroupsContext);

  if (selectedCall === null) return;
  return (
    <Call
      onRejectCall={() => selectCall(null)}
      name={selectedCall.name}
      icon={selectedCall.icon}
      background={selectedCall.background}
    />
  );
};

export default App;
