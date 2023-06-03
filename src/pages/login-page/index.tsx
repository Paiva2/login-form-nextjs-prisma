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
  ArrowRight,
  TwitterLogo,
} from '@phosphor-icons/react'
import {
  FloatInputWrapper,
  FormFooter,
} from '@/src/components/FormContainerLayout/styles'
import { sideGreetings } from '@/src/utils/sideGreetings'

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
    clearErrors,
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginFormSchema),
  })

  const handleSubmitLogin = (data: LoginFormData) => {
    reset()
  }

  const { loginPage } = sideGreetings

  const usernameInput = watch('username')

  const passwordInput = watch('password')

  useEffect(() => {
    !usernameInput && !passwordInput && clearErrors()
  }, [usernameInput, passwordInput, clearErrors])

  const floatLabel = {
    top: -25,
    fontSize: '.9375rem',
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
              <Button type="button" buttonType="socialMediaButton">
                <GoogleLogo className="googleIcon" weight="bold" size={40} />
              </Button>
              <Button type="button" buttonType="socialMediaButton">
                <FacebookLogo
                  className="facebookIcon"
                  weight="bold"
                  size={40}
                />
              </Button>
              <Button type="button" buttonType="socialMediaButton">
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
