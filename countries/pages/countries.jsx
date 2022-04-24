import Link from 'next/link'
import items from '../db/alphabetical_list_of_countries_2020.json'

export default function Countries({}) {
  return (
    <div>
      <h1 className="text-4xl my-6 font-bold">Countries</h1>
      <div className="grid grid-cols-4 gap-4">
        {items.map((item) => {
          return (
            <Link
              href={`/countries/${item.country}`}
              passHref
              key={item.country}
            >
              <a
                key={item.country}
                className="p-8 border border-solid border-gray-300 rounded"
              >
                {item.country}
              </a>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
