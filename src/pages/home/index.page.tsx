import { signOut, useSession } from 'next-auth/react'
import React, { useEffect } from 'react'

const Home = () => {
  const session = useSession()
  useEffect(() => {
    if (session.status !== 'authenticated') {
      signOut({ callbackUrl: '/' })
    }
  }, [])

  return (
    <div>
      <h1>Sucess!</h1>
      <button onClick={() => signOut({ callbackUrl: '/' })}>Logout</button>
    </div>
  )
}

export default Home
