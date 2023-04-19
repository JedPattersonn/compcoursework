import { PencilSquareIcon, TrashIcon } from '@heroicons/react/20/solid'

const people = [
  {
    term: 'Mitocondria',
    definition: 'Powerhouse of the cell',
    id: '535345352',
    },
  // More people...
]

export default function CardGrid({data}) {
  return (
    <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {data.map((person) => (
        <li
          key={person.id}
          className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow"
        >
          <div className="flex flex-1 flex-col p-8">
            <h3 className=" text-l font-medium text-gray-900">{person.term}</h3>
            <dl className="mt-1 flex flex-grow flex-col justify-between">
              <dd className="text-m text-gray-500">{person.definition}</dd>
            </dl>
          </div>
          <div>
            <div className="-mt-px flex divide-x divide-gray-200">
              <div className="flex w-0 flex-1">
                <a
                  href={`${person.id}`}
                  className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                >
                  <PencilSquareIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  Edit
                </a>
              </div>
              <div className="-ml-px flex w-0 flex-1">
                <a
                  href={`${person.telephone}`}
                  className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                >
                  <TrashIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  Delete
                </a>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
}
