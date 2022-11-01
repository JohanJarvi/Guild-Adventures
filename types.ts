type Notice = {
  value: string;
  nextNode: number;
};

type Option = Notice & {
  eliminated: boolean;
  eliminatesOnClick: boolean;
};

export type Node = {
  notice: Notice;
  options: Option[];
};

export type KeyedNode = {
  key: number;
  value: Node;
};
