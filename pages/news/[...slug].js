import { useRouter } from 'next/router'
// import Header from '../../../components/header'

const Comment = () => {
  const router = useRouter()
  const { id, comment } = router.query

  return (
    <>
      <h1>Commin Soon</h1>
    </>
  )
}

export default Comment