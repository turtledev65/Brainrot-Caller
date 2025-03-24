import { useContext } from "react";
import Navbar from "./components/navbar";
import Providers from "./providers";
import { GroupsContext } from "./providers/groups-providers";
import { Item, ItemAdd } from "./components/item";
import Call from "./components/call";

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
  const { groups, selectedGroup, selectGroup, addGroup, selectCall } =
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
          <ItemAdd
            onAdd={text => {
              addGroup(text);
            }}
          />
        </>
      )}
    </div>
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
