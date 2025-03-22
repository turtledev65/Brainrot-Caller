import { useState, useMemo } from "react";
import defaultGroups from "./data/default-groups";
import { Group } from "./types";

function App() {
  const groups = useMemo(() => defaultGroups, []);
  const [selectedGroup, setSelectedGroup] = useState<Group | null>(null);

  return (
    <>
      <h1 className="text-4xl font-bold text-center py-4">Fake Caller</h1>
      <div className="grid grid-cols-2 gap-4 p-4">
        {selectedGroup !== null
          ? selectedGroup.callers.map((caller) => <Item name={caller.name} />)
          : groups.map((group) => (
              <Item onClick={() => setSelectedGroup(group)} name={group.name} />
            ))}
      </div>
    </>
  );
}

type ItemProps = {
  name: string;
  onClick?: () => void;
};
const Item = ({ name, onClick }: ItemProps) => {
  return (
    <div
      onClick={onClick}
      className="bg-gray-300 h-40 cursor-pointer hover:bg-gray-400 transition-colors rounded-sm p-4 flex justify-center items-center"
    >
      <p className="text-lg">{name}</p>
    </div>
  );
};

export default App;
