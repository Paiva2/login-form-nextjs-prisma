import FormContainerLayout from '@/src/components/FormContainerLayout'
import Head from 'next/head'
import Link from 'next/link'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button, FormWrapper, SocialMediaWrapper } from './styles'
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

const loginFormSchema = z.object({
  username: z
    .string()
    .min(3, { message: 'Username must be at least 3 characters!' })
    .regex(/^[a-zA-Z0-9]*$/),
  password: z
    .number()
    .min(3, { message: 'Password must be at least 3 characters!' }),
  confirmPassword: z
    .number()
    .min(3, { message: 'Password must be at least 3 characters!' }),
})

type LoginFormData = z.infer<typeof loginFormSchema>

function Register() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginFormSchema),
  })

  let isAnyInputFilled = false

  const handleSubmitLogin = (data: LoginFormData) => {}

  const { registerPage } = sideGreetings

  const usernameInput = watch('username')

  const passwordInput = watch('password')

  const confirmPasswordInput = watch('confirmPassword')

  const floatLabel = {
    top: -25,
    fontSize: '.9375rem',
    color: 'green',
  }

  if (usernameInput || passwordInput || confirmPasswordInput) {
    isAnyInputFilled = true
  } else {
    isAnyInputFilled = false
  }

  const checkFilledInputs = isAnyInputFilled ? { color: 'red' } : {}

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
            <label style={usernameInput ? floatLabel : checkFilledInputs}>
              Username
            </label>
          </FloatInputWrapper>

          <FloatInputWrapper>
            <input {...register('password')} type="password" />
            <label style={passwordInput ? floatLabel : checkFilledInputs}>
              Password
            </label>
          </FloatInputWrapper>

          <FloatInputWrapper>
            <input {...register('confirmPassword')} type="password" />
            <label
              style={confirmPasswordInput ? floatLabel : checkFilledInputs}
            >
              Confirm password
            </label>
          </FloatInputWrapper>

          <FormFooter>
            <Button buttonType="register" disabled={isSubmitting} type="submit">
              Register
            </Button>

            <p>
              Forgot your{' '}
              <Link href="/reset-password">
                <span>password?</span>
              </Link>
            </p>

            <div>Wanna register with your social medias?</div>
            <SocialMediaWrapper>
              <Button buttonType="socialMediaButton">
                <GoogleLogo className="googleIcon" weight="bold" size={40} />
              </Button>
              <Button buttonType="socialMediaButton">
                <FacebookLogo
                  className="facebookIcon"
                  weight="bold"
                  size={40}
                />
              </Button>
              <Button buttonType="socialMediaButton">
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
