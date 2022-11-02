import { KeyedNode } from "../../types";

const keyedNodes: KeyedNode[] = [
  {
    key: 0,
    value: {
      notice: { value: "You awake to find yourself...", nextNode: 1 },
      options: [],
    },
  },
  {
    key: 1,
    value: {
      notice: { value: "... in a dark room!", nextNode: 2 },
      options: [],
    },
  },
  {
    key: 2,
    value: {
      notice: { value: "Escape. If you can!", nextNode: 3 },
      options: [],
    },
  },
  {
    key: 3,
    value: {
      notice: { value: "What will you do?", nextNode: 3 },
      options: [
        {
          value: "Turn on the light",
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
  },
  {
    key: 5,
    value: {
      notice: { value: "You sleep for a solid 8 hours.", nextNode: 0 },
      options: [],
    },
  },
  {
    key: 4,
    value: {
      notice: {
        value: "How; it's a dark room?",
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
          nextNode: 9,
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
  },
];

const getNodes = (): KeyedNode[] => keyedNodes;

export default getNodes;
