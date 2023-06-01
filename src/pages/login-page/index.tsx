import FormContainerLayout from '@/src/components/FormContainerLayout'
import Head from 'next/head'
import React from 'react'

function LoginPage() {
  return (
    <>
      <Head>
        <title>Login</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <FormContainerLayout dynamicTitle="Login">
        <form>
          <label>
            Username
            <input type="text" placeholder=""></input>
          </label>

          <label>
            Password
            <input type="text" placeholder=""></input>
          </label>

          <button type="submit">Sign In</button>
        </form>
      </FormContainerLayout>
    </>
  )
}

export default LoginPage
