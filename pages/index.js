import Dashboard from "@/components/Dashboard";
import CollectionCard from "@/components/CollectionCard";

const Home = () => {
  return (
    <div>
      <Dashboard collection={CollectionCard}/>
    </div>
  );
};

export default Home;
