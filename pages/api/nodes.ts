import { KeyedNode } from "../../types";

const node0: KeyedNode = {
  key: 0,
  value: {
    notice: { value: "You awake to find yourself...", nextNode: 1 },
    options: [],
  },
};

const node1: KeyedNode = {
  key: 1,
  value: {
    notice: { value: "... in a dark room!", nextNode: 3 },
    options: [],
  },
};

const node3: KeyedNode = {
  key: 3,
  value: {
    notice: { value: "What will you do?", nextNode: 3 },
    options: [
      {
        value: "Try turn on light",
        eliminated: false,
        eliminatesOnClick: false,
        nextNode: 4,
      },
      {
        value: "Go back to sleep",
        eliminated: false,
        eliminatesOnClick: true,
        nextNode: 5,
      },
      {
        value: "Scream loudly",
        eliminated: false,
        eliminatesOnClick: false,
        nextNode: 6,
      },
      {
        value: "Go North",
        eliminated: false,
        eliminatesOnClick: false,
        nextNode: 7,
      },
    ],
  },
};

const node4: KeyedNode = {
  key: 4,
  value: {
    notice: {
      value: "... it's a dark room?",
      nextNode: 4,
    },
    options: [
      {
        value: "Oh yeah...",
        eliminated: false,
        nextNode: 3,
        eliminatesOnClick: true,
      },
      {
        value: "Umm.. go back to sleep?",
        eliminated: false,
        nextNode: 5,
        eliminatesOnClick: true,
      },
      {
        value: "Extend your arms and walk forward",
        eliminated: false,
        nextNode: 4,
        eliminatesOnClick: false,
      },
      {
        value: "Lie down and try not to cry",
        eliminated: false,
        nextNode: 8,
        eliminatesOnClick: false,
      },
    ],
  },
};

const node5: KeyedNode = {
  key: 5,
  value: {
    notice: { value: "You sleep for a solid 8 hours.", nextNode: 0 },
    options: [],
  },
};

const node6: KeyedNode = {
  key: 6,
  value: {
    notice: { value: "Still a dark room...", nextNode: 6 },
    options: [
      {
        value: "Try scream some more.",
        eliminated: false,
        nextNode: 11,
        eliminatesOnClick: true,
      },
      {
        value: "Take out your flashlight",
        eliminated: false,
        nextNode: 12,
        eliminatesOnClick: true,
      },
      {
        value: "Crawl... north?",
        eliminated: false,
        nextNode: 7,
        eliminatesOnClick: false,
      },
      {
        value: "Cry.",
        eliminated: false,
        nextNode: 8,
        eliminatesOnClick: true,
      },
    ],
  },
};

const node7: KeyedNode = {
  key: 7,
  value: {
    notice: {
      value: "How do you know where north is?",
      nextNode: 7,
    },
    options: [
      {
        value: "I am an alien.",
        eliminated: false,
        nextNode: 13,
        eliminatesOnClick: true,
      },
      {
        value: "My smartphone has a compass",
        eliminated: false,
        nextNode: 14,
        eliminatesOnClick: true,
      },
      {
        value: "Intuition!",
        eliminated: false,
        nextNode: 15,
        eliminatesOnClick: true,
      },
      {
        value: "Because I am the captain now!",
        eliminated: false,
        nextNode: 16,
        eliminatesOnClick: true,
      },
    ],
  },
};

const node8: KeyedNode = {
  key: 8,
  value: {
    notice: {
      value: "You cry.",
      nextNode: 8,
    },
    options: [
      {
        value: "Cry.",
        eliminated: false,
        nextNode: 8,
        eliminatesOnClick: true,
      },
      {
        value: "Cry!",
        eliminated: false,
        nextNode: 8,
        eliminatesOnClick: true,
      },
      {
        value: "Cry?",
        eliminated: false,
        nextNode: 8,
        eliminatesOnClick: true,
      },
      {
        value: "Don't cry.",
        eliminated: false,
        nextNode: 10,
        eliminatesOnClick: true,
      },
    ],
  },
};

const node10: KeyedNode = {
  key: 10,
  value: {
    notice: {
      value: "Smile!",
      nextNode: 10,
    },
    options: [
      {
        value: "What?",
        eliminated: false,
        nextNode: 10,
        eliminatesOnClick: false,
      },
      {
        value: "Who are you?",
        eliminated: false,
        nextNode: 10,
        eliminatesOnClick: false,
      },
      {
        value: "Run!!",
        eliminated: false,
        nextNode: 10,
        eliminatesOnClick: false,
      },
      {
        value: "Flail your arms around!",
        eliminated: false,
        nextNode: 999,
        eliminatesOnClick: false,
      },
    ],
  },
};

const node11: KeyedNode = {
  key: 11,
  value: {
    notice: {
      value: "It's... still a dark room.",
      nextNode: 6,
    },
    options: [],
  },
};

const node12: KeyedNode = {
  key: 12,
  value: {
    notice: {
      value: "You don't have a flashlight.",
      nextNode: 6,
    },
    options: [],
  },
};

const node13: KeyedNode = {
  key: 13,
  value: {
    notice: {
      value: "No you're not.",
      nextNode: 7,
    },
    options: [],
  },
};

const node14: KeyedNode = {
  key: 14,
  value: {
    notice: {
      value: "No, you had a smartphone. I have it now.",
      nextNode: 10,
    },
    options: [],
  },
};

const node15: KeyedNode = {
  key: 15,
  value: {
    notice: {
      value: "Intuition aye?",
      nextNode: 999,
    },
    options: [],
  },
};

const node16: KeyedNode = {
  key: 16,
  value: {
    notice: {
      value: "Oh really? Well then where to Captain?",
      nextNode: 16,
    },
    options: [
      {
        value: "Mars?",
        eliminated: false,
        nextNode: 999,
        eliminatesOnClick: true,
      },
      {
        value: "To a dark room!",
        eliminated: false,
        nextNode: 0,
        eliminatesOnClick: true,
      },
      {
        value: "How about... north?",
        eliminated: false,
        nextNode: 7,
        eliminatesOnClick: false,
      },
    ],
  },
};

const deathNode: KeyedNode = {
  key: 999,
  value: {
    notice: {
      value: "You die! You DIE! YOU DIE!!!",
      nextNode: 9999,
    },
    options: [],
  },
};

const gameOver: KeyedNode = {
  key: 9999,
  value: {
    notice: {
      value: "Game Over! Refresh to try again.",
      nextNode: 9999,
    },
    options: [],
  },
};

const keyedNodes = [
  node0,
  node1,
  node3,
  node4,
  node5,
  node6,
  node7,
  node8,
  node10,
  node11,
  node12,
  node13,
  node14,
  node15,
  node16,
  deathNode,
  gameOver,
];

const doesAnyOptionCallMissingNode = (): boolean => {
  const uniqueNextNodes = new Set(
    keyedNodes.flatMap((keyedNode) =>
      keyedNode.value.options.map((option) => option.nextNode)
    )
  );

  const nodeKeys = keyedNodes.map((keyedNode) => keyedNode.key);

  return [...uniqueNextNodes].some((nextNode) => !nodeKeys.includes(nextNode));
};

const nodeKeysAreUnique = (): boolean => {
  const nodeKeys = keyedNodes.map((keyedNode) => keyedNode.key);
  const uniqueKeys = [...new Set(nodeKeys)];

  return JSON.stringify(uniqueKeys.sort()) == JSON.stringify(nodeKeys.sort());
};

const getNodes = (): KeyedNode[] => {
  if (doesAnyOptionCallMissingNode())
    throw new Error(
      "Some option 'nextNode' attempts to reference invalid node."
    );

  if (!nodeKeysAreUnique()) throw new Error("Node with duplicate key exists.");

  return keyedNodes;
};

export default getNodes;
