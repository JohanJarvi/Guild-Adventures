import { GetServerSideProps, NextPage } from "next";
import { useState } from "react";
import styles from "../styles/Home.module.css";
import { KeyedNode, Node } from "../types";
import getNodes from "./api/nodes";

type HomeProps = {
  nodes: KeyedNode[];
};

const Home: NextPage<HomeProps> = (props) => {
  const [shownNode, setShownNode] = useState(0);

  const nodeMap: Map<number, Node> = new Map(
    props.nodes.map((node) => [node.key, node.value])
  );

  const handleNodeInteraction = (
    infoClicked: boolean,
    optionValue?: string
  ) => {
    const node: Node | undefined = nodeMap.get(shownNode);

    if (infoClicked) {
      node ? setShownNode(node.notice.nextNode) : setShownNode(0);
    } else {
      const matchingOption = node?.options.find(
        (option) => option.value === optionValue
      );

      if (matchingOption?.eliminatesOnClick) {
        node?.options.forEach((option) => {
          if (option == matchingOption) {
            option.eliminated = true;
          }
        });
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
          {nodeMap.get(shownNode)?.notice.value}
        </h1>
      </div>
      {nodeMap
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

export const getServerSideProps: GetServerSideProps = async () => {
  const nodes = getNodes();

  const _props: HomeProps = {
    nodes: nodes,
  };

  return {
    props: _props,
  };
};

export default Home;
