import { globalStyles } from '@/config/styles-config'
import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'

globalStyles()

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider refetchOnWindowFocus={false} session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}
