import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function CardGridHeader(props) {
  const router = useRouter();
  const [collectionID, setCollectionID] = useState(null);

  useEffect(() => {
    if (router.query.collectionID) {
      setCollectionID(router.query.collectionID);
    }
  }, [router.query.collectionID]);

  const handleDelete = async () => {
    try {
      const response = await fetch(`/api/deleteCollection`, {
        method: "POST",
        body: JSON.stringify({ id: collectionID }),
      });
      if (response.status === 200) {
        router.push("/");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-white px-4 py-5 sm:px-6">
      <div className="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap">
        <div className="ml-4 mt-2">
          <h1 className="text-2xl font-bold tracking-tight">{props.title}</h1>
        </div>
        <div className="ml-4 mt-2 flex-shrink-0">
          <button
            type="button"
            className="relative inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={handleDelete}
          >
            Delete Collection
          </button>

          <a href={`/newcard/${props.id}`}>
            <button
              type="button"
              className="relative inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Create card
            </button>
          </a>
          <a href={`/revise/${props.id}`}>
            <button
              type="button"
              className="relative inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Start Revising
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
