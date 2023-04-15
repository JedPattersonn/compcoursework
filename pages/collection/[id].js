import { useRouter } from "next/router";
import CollectionDashboard from "@/components/CollectionDashboard";

const Collection = () => {
  const router = useRouter();
  const { id } = router.query;
  return <CollectionDashboard name={id} />;
};

export default Collection;
