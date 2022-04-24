import Link from 'next/link'
import { useRouter } from 'next/router'
import items from '../../db/alphabetical_list_of_countries_2020.json'

export default function Country({}) {
  const router = useRouter()
  const { name } = router.query

  const currentItem = items.find((item) => item.country === name)

  return (
    <div>
      <div className="font-bold text-4xl my-6 flex items-center">
        <Link href="/countries">
          <a className="p-2 text-xl">&larr;</a>
        </Link>
        {currentItem.country}
      </div>
      <div className="mb-2">
        Population (2020):{' '}
        {new Intl.NumberFormat().format(currentItem.population)}
      </div>
      <div className="mb-2">
        Land Area (Km²): {new Intl.NumberFormat().format(currentItem.land_area)}
      </div>
      <div className="mb-2">
        Density (P/Km²): {new Intl.NumberFormat().format(currentItem.density)}
      </div>
    </div>
  )
}
