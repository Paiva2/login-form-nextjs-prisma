import FormContainerLayout from '@/src/components/FormContainerLayout'
import Head from 'next/head'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  Button,
  FormErrorsWrapper,
  FormWrapper,
  SocialMediaWrapper,
} from './styles'
import {
  GoogleLogo,
  FacebookLogo,
  ArrowRight,
  TwitterLogo,
} from '@phosphor-icons/react'
import {
  FloatInputWrapper,
  FormFooter,
} from '@/src/components/FormContainerLayout/styles'
import { sideGreetings } from '@/src/utils/sideGreetings'
import { apiMethod } from '@/src/lib/axios'
import { toastMessage } from '@/src/lib/alertMessage'
import { AxiosError } from 'axios'
import { useRouter } from 'next/router'
import { signIn, signOut, useSession } from 'next-auth/react'
import { alertValidation } from '@/src/utils/alertMessage'
import { Session } from 'next-auth'
import { hasCookie, setCookie } from 'cookies-next'
import LoadingMessage from '@/src/components/LoadingMessage'

const loginFormSchema = z.object({
  username: z
    .string()
    .min(3, { message: 'Username must be at least 3 characters!' }),
  password: z
    .string()
    .min(3, { message: 'Password must be at least 3 characters!' }),
})

type LoginFormData = z.infer<typeof loginFormSchema>

function LoginPage() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginFormSchema),
  })

  const floatLabel = {
    top: -25,
    fontSize: '.9375rem',
  }

  const route = useRouter()

  const session = useSession()

  const usernameInput = watch('username')

  const passwordInput = watch('password')

  const { loginPage } = sideGreetings

  const isLoginCookieAvailable = hasCookie('loginFormID')

  const [isLoadingValidations, setIsLoadingValidations] = useState(false)

  // Used with react-hook-form
  const handleSubmitLogin = async (data: LoginFormData) => {
    try {
      const response = await apiMethod.post('/login', data)

      if (response.status === 202) {
        reset()
        setCookie('loginFormID', data.username, { maxAge: 25200 })
        route.push(response.data, '/home')
      }

      return response
    } catch (error) {
      if (error instanceof AxiosError) {
        toastMessage('warning', error.response?.data)
      }
    }
  }

  const handleGoogleLogin = async () => {
    signIn('google')
  }

  const handleFacebookLogin = async () => {
    signIn('facebook')
  }

  const handleLoginTwitter = async () => {
    signIn('twitter')
  }

  // Used to login with providers
  async function handleLoginWithEmailOnActiveSession(session: Session) {
    try {
      const response = await apiMethod.post('/login', session.user)

      setCookie('loginFormID', session.user?.name, { maxAge: 25200 }) // 7hrs

      if (response.status === 202) {
        route.push(response.data, '/home')
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        alertValidation('warning', error?.response?.data)
      }

      return signOut({ redirect: false })
    }
  }

  const validateCookieAndSession = () => {
    if (isLoginCookieAvailable) {
      route.push('/home', '/home')
      return
    }

    if (session.data) {
      handleLoginWithEmailOnActiveSession(session.data)
    }
  }

  useEffect(() => {
    validateCookieAndSession()

    setIsLoadingValidations(false)
  }, [session.data, isLoginCookieAvailable]) // eslint-disable-line 


  if (isLoadingValidations) {
    return <LoadingMessage />
  }

  return (
    <>
      <Head>
        <title>Login</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <FormContainerLayout
        dynamicIntro={loginPage.text}
        dynamicGreeting={loginPage.title}
        dynamicPageName="Login"
      >
        <FormWrapper onSubmit={handleSubmit(handleSubmitLogin)}>
          <FloatInputWrapper>
            <input {...register('username', { required: true })} type="text" />
            <label style={usernameInput ? floatLabel : {}}>Username</label>
          </FloatInputWrapper>

          <FloatInputWrapper>
            <input
              {...register('password', { required: true })}
              type="password"
            />
            <label style={passwordInput ? floatLabel : {}}>Password</label>
          </FloatInputWrapper>

          <FormFooter>
            <Button buttonType="signIn" disabled={isSubmitting} type="submit">
              Sign In <ArrowRight weight="bold" size={20} />
            </Button>
            <FormErrorsWrapper>
              {errors.username && <h3>{errors.username.message}</h3>}
              {errors.password && <h3>{errors.password.message}</h3>}
            </FormErrorsWrapper>

            <p>
              Don&apos;t have an account?{' '}
              <Link href="/register">
                <span>Register</span>
              </Link>
            </p>

            <p>
              Forgot your{' '}
              <Link href="/reset-password">
                <span>password?</span>
              </Link>
            </p>

            <SocialMediaWrapper>
              <Button
                onClick={handleGoogleLogin}
                type="button"
                buttonType="socialMediaButton"
              >
                <GoogleLogo className="googleIcon" weight="bold" size={40} />
              </Button>
              <Button
                onClick={handleFacebookLogin}
                type="button"
                buttonType="socialMediaButton"
              >
                <FacebookLogo
                  className="facebookIcon"
                  weight="bold"
                  size={40}
                />
              </Button>
              <Button
                onClick={handleLoginTwitter}
                type="button"
                buttonType="socialMediaButton"
              >
                <TwitterLogo className="twitterIcon" size={40} weight="bold" />
              </Button>
            </SocialMediaWrapper>
          </FormFooter>
        </FormWrapper>
      </FormContainerLayout>
    </>
  )
}

export default LoginPage
