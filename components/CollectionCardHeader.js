import Link from "next/link";

export default function CollectionCardHeader() {
  return (
    <div className="bg-white px-4 py-5 sm:px-6">
      <div className="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap">
        <div className="ml-4 mt-2">
          <h1 className="text-2xl font-bold tracking-tight">My Collections</h1>
        </div>
        <div className="ml-4 mt-2 flex-shrink-0">
          <Link href="/newcollection">
            <button
              type="button"
              className="relative inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Create new collection
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
