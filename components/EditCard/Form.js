import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function EditCardForm({}) {
  const router = useRouter();
  const { id, term, definition } = router.query;

  const [currentTerm, setCurrentTerm] = useState("");
  const [currentDefinition, setCurrentDefinition] = useState("");

  useEffect(() => {
    if (term) {
      setCurrentTerm(term);
    }
    if (definition) {
      setCurrentDefinition(definition);
    }
  }, [term, definition]);

  const submitHandler = async (e) => {
    e.preventDefault();
    let res = await fetch(`/api/updateCard`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
        term: currentTerm,
        definition: currentDefinition,
      }),
    });
    if (res.ok) {
      // Redirect the user to a different page
      window.location.href = `/`;
    } else {
      // Handle the error
      console.error("An error occurred while submitting the form.");
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h1 className="text-base font-semibold leading-7 text-gray-900">
            Edit Card
          </h1>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="col-span-full">
              <div>
                <label
                  htmlFor="term"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Term
                </label>
                <div className="mt-2">
                  <input
                    name="term"
                    id="term"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={currentTerm}
                    aria-describedby="email-description"
                    onChange={(e) => setCurrentTerm(e.target.value)}
                    required
                  />
                </div>
              </div>
              <br />
              <div className="mt-2">
                <label
                  htmlFor="definition"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Definition
                </label>
                <textarea
                  id="definition"
                  name="definition"
                  rows={3}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={""}
                  value={currentDefinition}
                  onChange={(e) => setCurrentDefinition(e.target.value)}
                  required
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="button"
          className="text-sm font-semibold leading-6 text-gray-900"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Update
        </button>
      </div>
    </form>
  );
}
