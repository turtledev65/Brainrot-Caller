import { useCallback, useContext } from "react";
import { GroupsContext } from "../providers/groups-providers";
import { IoArrowBackOutline as BackIcon } from "react-icons/io5";

const Navbar = () => {
  const { selectedGroup } = useContext(GroupsContext);

  return (
    <nav className="bg-white flex gap-2 px-2">
      <BackButton />
      <h1 className="text-4xl font-bold text-center py-4">
        {selectedGroup ? selectedGroup.name : "Fake Caller"}
      </h1>
    </nav>
  );
};

const BackButton = () => {
  const { selectedGroup, selectGroup } = useContext(GroupsContext);
  const handleBack = useCallback(() => selectGroup(null), []);

  if (selectedGroup == null) return null;
  return (
    <button
      onClick={handleBack}
      className="cursor-pointer text-red-600 text-3xl"
    >
      <BackIcon />
    </button>
  );
};

export default Navbar;
