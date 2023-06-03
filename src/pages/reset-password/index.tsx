import FormContainerLayout from '@/src/components/FormContainerLayout'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
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

function ResetPassword() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginFormSchema),
  })

  const handleSubmitLogin = (data: LoginFormData) => {}

  const { forgotPasswordPage } = sideGreetings

  const usernameInput = watch('username')

  const passwordInput = watch('password')

  const confirmPasswordInput = watch('confirmPassword')

  const floatLabel = {
    top: -25,
    fontSize: '.9375rem',
  }

  return (
    <>
      <Head>
        <title>Reset your Password</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <FormContainerLayout
        dynamicIntro={forgotPasswordPage.text}
        dynamicGreeting={forgotPasswordPage.title}
        dynamicPageName="Reset Password"
      >
        <FormWrapper onSubmit={handleSubmit(handleSubmitLogin)}>
          <FloatInputWrapper>
            <input {...register('username')} type="text" />
            <label style={usernameInput ? floatLabel : {}}>Username</label>
          </FloatInputWrapper>

          <FloatInputWrapper>
            <input {...register('password')} type="password" />
            <label style={passwordInput ? floatLabel : {}}>Password</label>
          </FloatInputWrapper>

          <FloatInputWrapper>
            <input {...register('confirmPassword')} type="password" />
            <label style={confirmPasswordInput ? floatLabel : {}}>
              Confirm password
            </label>
          </FloatInputWrapper>

          <FormFooter>
            <Button
              buttonType="confirmResetPassword"
              disabled={isSubmitting}
              type="submit"
            >
              Confirm
            </Button>
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

export default ResetPassword
