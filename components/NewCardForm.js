import { useState } from "react";

export default function NewCardForm({ id }) {
  const [term, setTerm] = useState("");
  const [definition, setDefinition] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    let res = await fetch(`/api/newcard`, {
      method: "POST",
      body: JSON.stringify({
        id: Math.floor(Math.random() * 1000000000000000000),
        key: id,
        term: term,
        definition: definition,
        correctCount: 0,
        incorrectCount: 0
      }),
    });
    if (res.ok) {
        // Redirect the user to a different page
        window.location.href = `/collection/${id}`;
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
            New Card
          </h1>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="col-span-full">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Term
                </label>
                <div className="mt-2">
                  <input
                    name="email"
                    id="email"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Biology Paper 1"
                    aria-describedby="email-description"
                    value={term}
                    onChange={(e) => setTerm(e.target.value)}
                  />
                </div>
              </div>
              <br />
              <div className="mt-2">
                <label
                  htmlFor="about"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Definition
                </label>
                <textarea
                  id="about"
                  name="about"
                  rows={3}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={""}
                  value={definition}
                  onChange={(e) => setDefinition(e.target.value)}
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
          Save
        </button>
      </div>
    </form>
  );
}
