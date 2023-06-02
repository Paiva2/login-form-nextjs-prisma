import FormContainerLayout from '@/src/components/FormContainerLayout'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button, FormWrapper, SocialMediaWrapper } from './styles'
import { GoogleLogo, FacebookLogo, ArrowRight } from '@phosphor-icons/react'
import {
  FloatInputWrapper,
  FormFooter,
} from '@/src/components/FormContainerLayout/styles'

const loginFormSchema = z.object({
  username: z
    .string()
    .min(3, { message: 'Username must be at least 3 characters!' }),
  password: z
    .number()
    .min(3, { message: 'Password must be at least 3 characters!' }),
})

type LoginFormData = z.infer<typeof loginFormSchema>

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginFormSchema),
  })

  const handleSubmitLogin = (data: LoginFormData) => {}

  return (
    <>
      <Head>
        <title>Login</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <FormContainerLayout dynamicTitle="Login">
        <FormWrapper onSubmit={handleSubmit(handleSubmitLogin)}>
          <FloatInputWrapper>
            <input {...register('username')} type="text" />
            <label>Username</label>
          </FloatInputWrapper>

          <FloatInputWrapper>
            <input {...register('password')} type="password" />
            <label>Password</label>
          </FloatInputWrapper>

          <FormFooter>
            <Button buttonType="signIn" disabled={isSubmitting} type="submit">
              Sign In <ArrowRight size={20} />
            </Button>
            <p>
              Don&apos;t have an account?{' '}
              <Link href="#">
                <span>Register</span>
              </Link>
            </p>

            <p>
              Forgot your{' '}
              <Link href="#">
                <span>password?</span>
              </Link>
            </p>

            <SocialMediaWrapper>
              <Button buttonType="socialMediaButton">
                <GoogleLogo weight="bold" color="#DB4437" size={40} />
              </Button>
              <Button buttonType="socialMediaButton">
                <FacebookLogo weight="bold" color="#4267B2" size={40} />
              </Button>
            </SocialMediaWrapper>
          </FormFooter>
        </FormWrapper>
      </FormContainerLayout>
    </>
  )
}

export default LoginPage
