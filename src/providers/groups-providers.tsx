import { createContext, PropsWithChildren, useCallback, useState } from "react";
import { Group } from "../types";
import defaultGroups from "../data/default-groups";

type GroupsContextType = {
  groups: Group[];
  selectedGroup: Group | null;
  selectGroup: (group: Group | null) => void;
  addGroup: (name: string) => void;
};
export const GroupsContext = createContext<GroupsContextType>(
  {} as GroupsContextType,
);

const GroupsProvider = ({ children }: PropsWithChildren) => {
  const [groups, setGroups] = useState<Group[]>(defaultGroups);
  const [selectedGroup, setSelectedGroup] = useState<Group | null>(null);

  const selectGroup = useCallback((group: Group | null) => {
    setSelectedGroup(group);
  }, []);

  const addGroup = useCallback((name: string) => {
    setGroups((prevGroups) => [...prevGroups, { name, callers: [] }]);
  }, []);

  return (
    <GroupsContext.Provider
      value={{ groups, selectedGroup, selectGroup, addGroup }}
    >
      {children}
    </GroupsContext.Provider>
  );
};

export default GroupsProvider;
