import { deleteCookie, hasCookie } from 'cookies-next'
import { signOut, useSession } from 'next-auth/react'
import React, { useEffect } from 'react'

const Home = () => {
  const session = useSession()

  const isLoginCookieAvailable = hasCookie('loginFormID')

  useEffect(() => {
    if (session.status !== 'authenticated' && !isLoginCookieAvailable) {
      signOut({ callbackUrl: '/' })
    }
  }, [session.status, isLoginCookieAvailable])

  const handleLogout = () => {
    signOut({ callbackUrl: '/' })

    deleteCookie('loginFormID')
  }

  return (
    <div>
      <h1>Sucess!</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Home
