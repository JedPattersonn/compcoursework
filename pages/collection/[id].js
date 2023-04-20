import { useRouter } from "next/router";
import CollectionDashboard from "@/components/CollectionDashboard";

const Collection = ({ id }) => {
  return <CollectionDashboard id={id} />;
};

Collection.getInitialProps = async (ctx) => {
  const { id } = ctx.query;
  return { id };
};

export default Collection;
