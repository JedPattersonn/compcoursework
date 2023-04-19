import { Fragment, useState, useEffect } from "react";
import { Menu, Transition } from "@headlessui/react";
import { EllipsisHorizontalIcon } from "@heroicons/react/20/solid";

const statuses = {
  Paid: "text-green-600 bg-green-50 ring-green-600/20",
  Withdraw: "text-gray-500 bg-gray-50 ring-gray-200",
  Overdue: "text-red-600 bg-red-50 ring-red-600/10",
};
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function CollcetionCard() {
  const [cards, setCards] = useState([]);

  const getCards = async () => {
    let res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`, {
      method: "GET",
    });
    res = await res.json();
    return res;
  };
  useEffect(() => {
    async function fetchData() {
      const response = await getCards();
      setCards(response.data);
    }

    fetchData();
  }, []);

  return (
    <ul
      role="list"
      className="grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-3 xl:gap-x-8"
    >
      {cards.map((client) => (
        <a href={`/collection/${client.key}`} key={client.key}>
          <li
            key={client.id}
            className="overflow-hidden rounded-xl border border-gray-200"
          >
            <div className="flex items-center gap-x-4 border-b border-gray-900/5 bg-gray-50 p-6">
              <div className="text-lg font-medium leading-6 text-gray-900">
                {client.name}
              </div>
            </div>
            <dl className="-my-3 divide-y divide-gray-100 px-6 py-4 text-sm leading-6">
              <div className="flex justify-between gap-x-4 py-3">
                <dt className="text-gray-500">Last opened</dt>
                <dd className="text-gray-700">
                  <time dateTime={client.dateTime}>{client.lastUsed}</time>
                </dd>
              </div>
              <div className="flex justify-between gap-x-4 py-3">
                <dt className="text-gray-500">Amount</dt>
                <dd className="flex items-start gap-x-2">
                  <div className="font-medium text-gray-900">
                    {client.amount}
                  </div>
                </dd>
              </div>
            </dl>
          </li>
        </a>
      ))}
    </ul>
  );
}
