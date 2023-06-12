import FormContainerLayout from '@/src/components/FormContainerLayout'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button, FormErrorsWrapper, FormWrapper } from './styles'
import { ArrowBendUpLeft } from '@phosphor-icons/react'
import {
  FloatInputWrapper,
  FormFooter,
} from '@/src/components/FormContainerLayout/styles'
import { sideGreetings } from '@/src/utils/sideGreetings'
import { useInputColors } from '@/src/hooks/useInputColor'
import { apiMethod } from '@/src/lib/axios'
import { toastMessage } from '@/src/lib/alertMessage'
import { AxiosError } from 'axios'

const loginFormSchema = z
  .object({
    username: z.string(),
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

function ResetPassword() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginFormSchema),
  })

  const handleSubmitLogin = async (data: LoginFormData) => {
    try {
      const response = await apiMethod.patch('/password-reset', data)
      reset()
      toastMessage('success', response.data)
      return response
    } catch (error) {
      if (error instanceof AxiosError) {
        toastMessage('warning', error.response?.data)
      }
    }
  }

  const { forgotPasswordPage } = sideGreetings

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
            <label style={usernameInput ? floatLabel : isAnyInputFilled}>
              Username
            </label>
          </FloatInputWrapper>

          <FloatInputWrapper>
            <input {...register('password')} type="password" />
            <label style={passwordInput ? floatLabel : isAnyInputFilled}>
              Old password
            </label>
          </FloatInputWrapper>
          {/* 
          <FloatInputWrapper>
            <input {...register('newPassword')} type="password" />
            <label style={confirmPasswordInput ? floatLabel : isAnyInputFilled}>
              New password
            </label>
          </FloatInputWrapper> */}

          <FloatInputWrapper>
            <input {...register('confirmPassword')} type="password" />
            <label style={confirmPasswordInput ? floatLabel : isAnyInputFilled}>
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
            <FormErrorsWrapper>
              {<h3>{errors.username?.message}</h3>}
              {<h3>{errors.password?.message}</h3>}
              {<h3>{errors.confirmPassword?.message}</h3>}
            </FormErrorsWrapper>
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
