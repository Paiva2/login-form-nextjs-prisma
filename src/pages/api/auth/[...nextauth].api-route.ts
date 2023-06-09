import { NextApiRequest, NextApiResponse, NextPageContext } from 'next'
import NextAuth, { NextAuthOptions } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import FacebookProvider from 'next-auth/providers/facebook'
import TwitterProvider from 'next-auth/providers/twitter'

export const authOptions = (
  req: NextApiRequest | NextPageContext['req'],
  res: NextApiResponse | NextPageContext['res'],
): NextAuthOptions => {
  return {
    providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID ?? '',
        clientSecret: process.env.GOOGLE_CLIENT_SECRET_KEY ?? '',
        authorization: {
          params: {
            scope:
              'https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile',
          },
        },
      }),
      {
        id: 'google',
        name: 'Google',
        type: 'oauth',
        wellKnown:
          'https://accounts.google.com/.well-known/openid-configuration',
        idToken: true,
        checks: ['pkce', 'state'],
        profile(profile) {
          return {
            id: profile.sub,
            name: profile.name,
            email: profile.email,
          }
        },
      },
      FacebookProvider({
        clientId: process.env.FACEBOOK_CLIENT_ID ?? '',
        clientSecret: process.env.FACEBOOK_CLIENT_SECRET_KEY ?? '',
        authorization: {
          params: {
            scope: 'email',
          },
        },
      }),
      {
        id: 'facebook',
        name: 'Facebook',
        type: 'oauth',
        version: '2.0',
        authorization:
          'https://www.facebook.com/v7.0/dialog/oauth?response_type=code',
        profile(profile) {
          return {
            id: profile.id,
            name: profile.name,
            email: profile.email,
          }
        },
      },
      TwitterProvider({
        clientId: process.env.TWITTER_CLIENT_ID ?? '',
        clientSecret: process.env.TWITTER_CLIENT_SECRET_KEY ?? '',
        authorization: {
          params: {
            scope: 'email',
          },
        },
      }),
      {
        id: 'twitter',
        name: 'Twitter (Legacy)',
        type: 'oauth',
        version: '1.0A',
        accessTokenUrl: 'https://api.twitter.com/oauth/access_token',
        requestTokenUrl: 'https://api.twitter.com/oauth/request_token',
        authorization: 'https://api.twitter.com/oauth/authenticate',
        profile(profile) {
          return {
            id: profile.id_str,
            name: profile.name,
            email: profile.email,
          }
        },
      },
    ],

    callbacks: {
      async signIn({ account }) {
        if (account?.provider === 'google') {
          if (
            !account?.scope?.includes(
              'https://www.googleapis.com/auth/userinfo.email',
            )
          ) {
            return '/register/?error=permission-denied'
          }
        }

        return true
      },
    },
  }
}
export default async function authHandler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  return await NextAuth(req, res, authOptions(req, res))
}
