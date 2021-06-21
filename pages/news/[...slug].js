import { useRouter } from 'next/router'

const Comment = () => {
  const router = useRouter()
  const { id, comment } = router.query
  console.log('Arun Jha query', id, comment);
  return (
    <>
      <h1>Commin Soon</h1>
    </>
  )
}

export default Comment