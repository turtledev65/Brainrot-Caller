import { createContext, PropsWithChildren, useCallback, useState } from "react";
import { Caller, Group } from "../types";
import defaultGroups from "../data/default-groups";

type GroupsContextType = {
  groups: Group[];
  selectedGroup: Group | null;
  selectGroup: (group: Group | null) => void;
  addGroup: (name: string) => void;
  selectedCall: Caller | null;
  selectCall: (call: Caller | null) => void;
};
export const GroupsContext = createContext<GroupsContextType>(
  {} as GroupsContextType,
);

const GroupsProvider = ({ children }: PropsWithChildren) => {
  const [groups, setGroups] = useState<Group[]>(defaultGroups);
  const [selectedCall, setSelectedCall] = useState<Caller | null>(null);
  const [selectedGroup, setSelectedGroup] = useState<Group | null>(null);

  const selectCall = useCallback((call: Caller | null) => {
    setSelectedCall(call);
  }, []);

  const selectGroup = useCallback((group: Group | null) => {
    setSelectedGroup(group);
  }, []);

  const addGroup = useCallback((name: string) => {
    setGroups(prevGroups => {
      for (const group of prevGroups) {
        if (group.name === name) {
          return prevGroups;
        }
      }

      return [...prevGroups, { name, callers: [] }];
    });
  }, []);

  return (
    <GroupsContext.Provider
      value={{
        groups,
        selectedGroup,
        selectGroup,
        addGroup,
        selectedCall,
        selectCall,
      }}
    >
      {children}
    </GroupsContext.Provider>
  );
};

export default GroupsProvider;
