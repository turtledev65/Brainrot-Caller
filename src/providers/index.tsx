import { PropsWithChildren } from "react";
import GroupsProvider from "./groups-providers";

const Providers = ({ children }: PropsWithChildren) => {
  return <GroupsProvider>{children}</GroupsProvider>;
};
export default Providers;
