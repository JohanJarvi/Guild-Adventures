"use client";

import { useState } from "react";
import styles from "../styles/Home.module.css";
import { KeyedNode, Node } from "../types";

type AdventureGameProps = {
  nodes: KeyedNode[];
};

const AdventureGame = (props: AdventureGameProps) => {
  const [shownNode, setShownNode] = useState(0);

  const [nodes, setNodes] = useState<Map<number, Node | undefined>>(
    () => new Map(props.nodes.map((node) => [node.key, node.value]))
  );

  const handleNodeInteraction = (
    infoClicked: boolean,
    optionValue?: string
  ) => {
    const node: Node | undefined = nodes.get(shownNode);

    if (infoClicked) {
      node ? setShownNode(node.notice.nextNode) : setShownNode(0);
    } else {
      const matchingOption = node?.options.find(
        (option) => option.value === optionValue
      );

      if (matchingOption?.eliminatesOnClick && node) {
        const updatedOptions = node.options.map((option) =>
          option === matchingOption ? { ...option, eliminated: true } : option
        );
        const updatedNode: Node = { ...node, options: updatedOptions };

        setNodes((prev) => new Map(prev).set(shownNode, updatedNode));
      }

      matchingOption ? setShownNode(matchingOption.nextNode) : setShownNode(0);
    }
  };

  const getClass = (index: number) => {
    switch (index) {
      case 0:
        return styles.item1;
      case 1:
        return styles.item2;
      case 2:
        return styles.item3;
      case 3:
        return styles.item4;
    }
  };

  return (
    <div>
      <div className={styles.centralised}>
        <h1
          style={{ cursor: "pointer" }}
          onClick={() => handleNodeInteraction(true)}
        >
          {nodes.get(shownNode)?.notice.value}
        </h1>
      </div>
      {nodes
        .get(shownNode)
        ?.options.filter((option) => !option.eliminated)
        .map((option, index) => {
          return (
            <div
              style={{ cursor: "pointer" }}
              key={"option-" + index}
              className={`${styles.item} ${getClass(index)}`}
              onClick={() => handleNodeInteraction(false, option.value)}
            >
              {option.value}
            </div>
          );
        })}
    </div>
  );
};

export default AdventureGame;
