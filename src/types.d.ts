export type Caller = {
  name: string;
  icon?: string;
  background?: string;
  audio?: string;
};

export type Group = {
  name: string;
  callers: Caller[];
};
