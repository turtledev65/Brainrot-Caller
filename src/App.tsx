import { useContext } from "react";
import Navbar from "./components/navbar";
import Providers from "./providers";
import { GroupsContext } from "./providers/groups-providers";

function App() {
  return (
    <Providers>
      <Navbar />
      <GroupGrid />
    </Providers>
  );
}

const GroupGrid = () => {
  const { groups, selectedGroup, selectGroup } = useContext(GroupsContext);

  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      {selectedGroup !== null
        ? selectedGroup.callers.map((caller) => (
            <Item name={caller.name} key={caller.name} />
          ))
        : groups.map((group) => (
            <Item
              onClick={() => selectGroup(group)}
              name={group.name}
              key={group.name}
            />
          ))}
    </div>
  );
};

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
