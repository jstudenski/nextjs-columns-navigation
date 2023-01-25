import { useRouter } from 'next/router'

export default function EmploymentCategory() {
  const router = useRouter();
  const { employmentCategory } = router.query
  return (
    <>
      <h1>Employment Category: {employmentCategory}</h1>
    </>
  )
}
