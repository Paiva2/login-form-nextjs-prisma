'use client'

import { deleteCookie, getCookie } from 'cookies-next'
import { signOut, useSession } from 'next-auth/react'
import React, { useLayoutEffect, useState } from 'react'
import {
  GreetingsContainer,
  HomeContainer,
  LogoutButton,
  SucessIcon,
} from './styles'
import { ArrowLeft, CheckFat } from '@phosphor-icons/react'
import { useRouter } from 'next/router'
import LoadingMessage from '@/src/components/LoadingMessage'

const Home = () => {
  const [mounted, setMounted] = useState(false)

  const session = useSession()

  const isLoginCookieAvailable = getCookie('loginFormID')

  const usernameValueCookie = isLoginCookieAvailable ?? ''

  const route = useRouter()

  useLayoutEffect(() => {
    if (session.status !== 'authenticated' && !isLoginCookieAvailable) {
      signOut({ callbackUrl: '/' })
    } else {
      setMounted(true)
    }
  }, [session.status, isLoginCookieAvailable, route])

  const handleLogout = () => {
    signOut({ callbackUrl: '/' })

    deleteCookie('loginFormID')
  }

  if (!mounted) return <LoadingMessage />

  return (
    mounted && (
      <HomeContainer>
        <SucessIcon>
          <CheckFat fill="#fff" size={45} />
        </SucessIcon>
        <GreetingsContainer>
          <h1>Welcome {route?.query.user ?? usernameValueCookie ?? ''}!</h1>
          <h2>You&apos;re in!</h2>
        </GreetingsContainer>
        <LogoutButton onClick={handleLogout}>
          Logout <ArrowLeft weight="bold" size={20} />
        </LogoutButton>
      </HomeContainer>
    )
  )
}

export default Home
