import FormContainerLayout from '@/src/components/FormContainerLayout'
import Head from 'next/head'
import Link from 'next/link'
import React, { useEffect } from 'react'
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
  TwitterLogo,
  ArrowBendUpLeft,
} from '@phosphor-icons/react'
import {
  FloatInputWrapper,
  FormFooter,
} from '@/src/components/FormContainerLayout/styles'
import { sideGreetings } from '@/src/utils/sideGreetings'
import { useInputColors } from '@/src/hooks/useInputColor'
import { apiMethod } from '@/src/lib/axios'
import { AxiosError } from 'axios'
import { toastMessage } from '@/src/lib/alertMessage'
import { signIn, useSession, signOut } from 'next-auth/react'
import { alertValidation } from '@/src/utils/alertMessage'
import { Session } from 'next-auth'

const loginFormSchema = z
  .object({
    username: z
      .string()
      .min(3, { message: 'Username must be at least 3 characters!' })
      .regex(/^[a-zA-Z0-9]*$/, {
        message: 'Username must have only letters and numbers!',
      }),
    password: z
      .string()
      .min(3, { message: 'Password must be at least 3 characters!' }),
    confirmPassword: z.string(),
  })
  .refine((field) => field.password === field.confirmPassword, {
    message: "Passwords don't match!",
    path: ['confirmPassword'],
  })

type LoginFormData = z.infer<typeof loginFormSchema>

function Register() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginFormSchema),
  })

  const handleSubmitLogin = async (data: LoginFormData) => {
    try {
      const response = await apiMethod.post('/register', data)
      reset()
      toastMessage('success', response.data)
      return response
    } catch (error) {
      if (error instanceof AxiosError) {
        toastMessage('warning', error.response?.data)
      }
    }
  }

  const { registerPage } = sideGreetings

  const usernameInput = watch('username')

  const passwordInput = watch('password')

  const confirmPasswordInput = watch('confirmPassword')

  const floatLabel = {
    top: -25,
    fontSize: '.9375rem',
    color: 'green',
  }

  const { isAnyInputFilled } = useInputColors(
    usernameInput,
    passwordInput,
    confirmPasswordInput,
  )

  const session = useSession()

  const handleGoogleRegister = () => {
    signIn('google')
  }

  const handleFacebookRegister = () => {
    signIn('facebook')
  }

  const handleTwitterRegister = () => {
    signIn('twitter')
  }

  async function handleRegisterWithEmailOnActiveSession(session: Session) {
    try {
      const response = await apiMethod.post('/register', session.user)
      alertValidation('success', response.data)

      return signOut({ redirect: false })
    } catch (error) {
      if (error instanceof AxiosError) {
        alertValidation('warning', error?.response?.data)
      }

      return signOut({ redirect: false })
    }
  }

  useEffect(() => {
    if (session.data) {
      handleRegisterWithEmailOnActiveSession(session.data)
    }
  }, [session.data]) // eslint-disable-line

  return (
    <>
      <Head>
        <title>Register</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <FormContainerLayout
        dynamicIntro={registerPage.text}
        dynamicGreeting={registerPage.title}
        dynamicPageName="Register"
      >
        <FormWrapper onSubmit={handleSubmit(handleSubmitLogin)}>
          <FloatInputWrapper>
            <input {...register('username')} type="text" />
            <label style={usernameInput ? floatLabel : isAnyInputFilled}>
              Username
            </label>
          </FloatInputWrapper>

          <FloatInputWrapper>
            <input {...register('password')} type="password" />
            <label style={passwordInput ? floatLabel : isAnyInputFilled}>
              Password
            </label>
          </FloatInputWrapper>

          <FloatInputWrapper>
            <input {...register('confirmPassword')} type="password" />
            <label style={confirmPasswordInput ? floatLabel : isAnyInputFilled}>
              Confirm password
            </label>
          </FloatInputWrapper>

          <FormFooter>
            <Button buttonType="register" disabled={isSubmitting} type="submit">
              Register
            </Button>

            <FormErrorsWrapper>
              {<h3>{errors.username?.message}</h3>}
              {<h3>{errors.password?.message}</h3>}
              {<h3>{errors.confirmPassword?.message}</h3>}
            </FormErrorsWrapper>

            <p>
              Change your{' '}
              <Link href="/reset-password">
                <span>password!</span>
              </Link>
            </p>

            <div>Wanna register with your social medias?</div>
            <SocialMediaWrapper>
              <Button
                onClick={handleGoogleRegister}
                buttonType="socialMediaButton"
                type="button"
              >
                <GoogleLogo className="googleIcon" weight="bold" size={40} />
              </Button>
              <Button
                onClick={handleFacebookRegister}
                buttonType="socialMediaButton"
                type="button"
              >
                <FacebookLogo
                  className="facebookIcon"
                  weight="bold"
                  size={40}
                />
              </Button>
              <Button
                onClick={handleTwitterRegister}
                buttonType="socialMediaButton"
                type="button"
              >
                <TwitterLogo className="twitterIcon" size={40} weight="bold" />
              </Button>
            </SocialMediaWrapper>
          </FormFooter>
          <Link href="/">
            <Button
              buttonType="backPageIcon"
              disabled={isSubmitting}
              type="submit"
            >
              <ArrowBendUpLeft size={20} />
            </Button>
          </Link>
        </FormWrapper>
      </FormContainerLayout>
    </>
  )
}

export default Register
