import ReviseDashboard from "@/components/ReviseDashboard";
import { useRouter } from "next/router";

const Revise = () => {
    const router = useRouter();
    const { id } = router.query;
  
    // Render the ReviseDashboard component only when the `id` is available
    if (!id) {
      return <div>Loading...</div>; // You can replace this with a loading spinner or any other loading indicator
    }
  
    return <ReviseDashboard id={id} />;
  };
  
  export default Revise;