import { KeyedNode } from "../../types";

// TODO - replace with call to a database that grabs each node

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
        nextNode: 17,
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
        eliminatesOnClick: false,
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
        nextNode: 23,
        eliminatesOnClick: false,
      },
      {
        value: "Someone there?",
        eliminated: false,
        nextNode: 20,
        eliminatesOnClick: false,
      },
      {
        value: "Run forwards!",
        eliminated: false,
        nextNode: 17,
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
      value: "You don't have a smartphone. I have it now.",
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

const node17: KeyedNode = {
  key: 17,
  value: {
    notice: {
      value: "Eventually you reach a wall",
      nextNode: 16,
    },
    options: [
      {
        value: "Caress the wall",
        eliminated: false,
        nextNode: 19,
        eliminatesOnClick: true,
      },
      {
        value: "Step back and leap into wall",
        eliminated: false,
        nextNode: 999,
        eliminatesOnClick: true,
      },
      {
        value: "Follow wall North!",
        eliminated: false,
        nextNode: 7,
        eliminatesOnClick: false,
      },
      {
        value: "Lick it?",
        eliminated: false,
        nextNode: 18,
        eliminatesOnClick: false,
      },
    ],
  },
};

const node18: KeyedNode = {
  key: 18,
  value: {
    notice: {
      value: "You sick f***s! Gross!",
      nextNode: 17,
    },
    options: [],
  },
};

const node19: KeyedNode = {
  key: 19,
  value: {
    notice: {
      value: "The wall feels soft; almost furry?",
      nextNode: 19,
    },
    options: [
      {
        value: "Lick it?",
        eliminated: false,
        nextNode: 18,
        eliminatesOnClick: true,
      },
      {
        value: "Stroke the furry wall!",
        eliminated: false,
        nextNode: 18,
        eliminatesOnClick: true,
      },
      {
        value: "Lean against wall",
        eliminated: false,
        nextNode: 10,
        eliminatesOnClick: false,
      },
    ],
  },
};

const node20: KeyedNode = {
  key: 20,
  value: {
    notice: {
      value: "...",
      nextNode: 20,
    },
    options: [
      {
        value: "Go full Chuck Norris!",
        eliminated: false,
        nextNode: 21,
        eliminatesOnClick: true,
      },
      {
        value: "Stare blankly into the abyss",
        eliminated: false,
        nextNode: 999,
        eliminatesOnClick: true,
      },
    ],
  },
};

const node21: KeyedNode = {
  key: 21,
  value: {
    notice: {
      value: "You put on a red bandana and then...",
      nextNode: 21,
    },
    options: [
      {
        value: "Backflip",
        eliminated: false,
        nextNode: 999,
        eliminatesOnClick: true,
      },
      {
        value: "Flail your arms around!",
        eliminated: false,
        nextNode: 999,
        eliminatesOnClick: true,
      },
      {
        value: "Wax on, Wax off",
        eliminated: false,
        nextNode: 999,
        eliminatesOnClick: true,
      },
      {
        value: "Pose like Bruce Lee",
        eliminated: false,
        nextNode: 22,
        eliminatesOnClick: true,
      },
    ],
  },
};

const node22: KeyedNode = {
  key: 22,
  value: {
    notice: {
      value: "You look ridiculous for a moment and then...",
      nextNode: 999,
    },
    options: [],
  },
};

const node23: KeyedNode = {
  key: 23,
  value: {
    notice: {
      value: "Smile?",
      nextNode: 23,
    },
    options: [
      {
        value: "No.",
        eliminated: false,
        nextNode: 23,
        eliminatesOnClick: true,
      },
      {
        value: "Crack a small smile",
        eliminated: false,
        nextNode: 999,
        eliminatesOnClick: false,
      },
      {
        value: "No thank you.",
        eliminated: false,
        nextNode: 23,
        eliminatesOnClick: true,
      },
      {
        value: "Punch the air in front of you.",
        eliminated: false,
        nextNode: 24,
        eliminatesOnClick: false,
      },
    ],
  },
};

const node24: KeyedNode = {
  key: 24,
  value: {
    notice: {
      value: "You just punched the air... why'd you do that?",
      nextNode: 24,
    },
    options: [
      {
        value: "Deeply rooted anger issues!",
        eliminated: false,
        nextNode: 23,
        eliminatesOnClick: true,
      },
      {
        value: "Because; I. Am. SPARTA!",
        eliminated: false,
        nextNode: 25,
        eliminatesOnClick: true,
      },
    ],
  },
};

const node25: KeyedNode = {
  key: 25,
  value: {
    notice: {
      value: "Hahaha! Pathetic. Guess what?",
      nextNode: 999,
    },
    options: [],
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
      value: "Game Over! Try again?",
      nextNode: 0,
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
  node17,
  node18,
  node19,
  node20,
  node21,
  node22,
  node23,
  node24,
  node25,
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
