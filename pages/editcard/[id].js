import EditCardDashboard from "@/components/EditCard/Dashboard";
import { useRouter } from "next/router";

const EditCard = () => {
  const router = useRouter();
  const { term, definition } = router.query;
  return <EditCardDashboard term={term} definition={definition} />;
};

export default EditCard;
