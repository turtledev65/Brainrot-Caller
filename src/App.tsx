import { useContext } from "react";
import Navbar from "./components/navbar";
import Providers from "./providers";
import { GroupsContext } from "./providers/groups-providers";
import { Item, ItemAdd } from "./components/item";

function App() {
  return (
    <Providers>
      <Navbar />
      <GroupGrid />
    </Providers>
  );
}

const GroupGrid = () => {
  const { groups, selectedGroup, selectGroup, addGroup } =
    useContext(GroupsContext);

  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      {selectedGroup !== null ? (
        selectedGroup.callers.map((caller) => (
          <Item name={caller.name} key={caller.name} />
        ))
      ) : (
        <>
          {groups.map((group) => (
            <Item
              onClick={() => selectGroup(group)}
              name={group.name}
              key={group.name}
            />
          ))}
          <ItemAdd onClick={() => addGroup("Name")} />
        </>
      )}
    </div>
  );
};

export default App;
