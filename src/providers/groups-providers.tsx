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
  addCall: (groupName: string, call: Caller) => void;
};
export const GroupsContext = createContext<GroupsContextType>(
  {} as GroupsContextType,
);

const GroupsProvider = ({ children }: PropsWithChildren) => {
  const [groups, setGroups] = useState<Group[]>(defaultGroups);
  const [selectedCall, setSelectedCall] = useState<Caller | null>(null);
  const [selectedGroup, setSelectedGroup] = useState<Group | null>(null);

  const selectCall = useCallback(
    (call: Caller | null) => {
      setSelectedCall(call);
    },
    [setSelectedCall],
  );

  const addCall = useCallback(
    (groupName: string, call: Caller) => {
      setGroups(prevGroups => {
        const out = [...prevGroups];

        outer: for (let i = 0; i < out.length; i++) {
          if (out[i].name === groupName) {
            for (const c of out[i].callers) {
              if (call.name === c.name) break outer;
            }

            out[i].callers.push(call);
            break;
          }
        }

        return out;
      });
    },
    [setGroups],
  );

  const selectGroup = useCallback(
    (group: Group | null) => {
      setSelectedGroup(group);
    },
    [setSelectedCall],
  );

  const addGroup = useCallback(
    (name: string) => {
      setGroups(prevGroups => {
        for (const group of prevGroups) {
          if (group.name === name) {
            return prevGroups;
          }
        }

        return [...prevGroups, { name, callers: [] }];
      });
    },
    [setGroups],
  );

  return (
    <GroupsContext.Provider
      value={{
        groups,
        selectedGroup,
        selectGroup,
        addGroup,
        selectedCall,
        selectCall,
        addCall,
      }}
    >
      {children}
    </GroupsContext.Provider>
  );
};

export default GroupsProvider;
