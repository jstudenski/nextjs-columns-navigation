import { useRouter } from 'next/router'
import Link from 'next/link'

export default function Navbar() {
  const router = useRouter()
  // const { employmentCategory } = router.query

  const employmentCategories = [
    {
      name: 'Full-time',
      id: 'full-time',
    },
    {
      name: 'Part-time and seasonal medical eligible',
      id: 'part-time-medical',
    },
    {
      name: 'Part-time and seasonal non-medical eligible',
      id: 'part-time-non-medical',
    },
  ]

  return (
    <>
      <ul>
        {employmentCategories.map((category) => {
          return (
            <li key={category.id}>
              <Link
                href={{
                  pathname: '/[id]',
                  query: { id: category.id },
                }}
              >
                {category.name}
              </Link>
            </li>
          )
        })}
        <li>
        <Link
          href={{ pathname: '/' }}
        >
          Home
        </Link>
        </li>
      </ul>
    </>
  )
}
