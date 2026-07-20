import getNodes from "../data/nodes";
import AdventureGame from "./AdventureGame";

const Home = () => {
  const nodes = getNodes();

  return <AdventureGame nodes={nodes} />;
};

export default Home;
