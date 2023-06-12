import { prisma } from '@/src/lib/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  if (req.method !== 'POST') {
    return res.status(405).end()
  }

  const bcrypt = require('bcrypt')

  if (req.body?.email) {
    const isEmailRegistered = await prisma.user.findUnique({
      where: {
        email: req.body.email,
      },
    })

    if (!isEmailRegistered) {
      return res.status(401).end('This e-mai is not registered!')
    }

    return res.status(202).end(
      JSON.stringify({
        pathname: '/home',
        query: { user: req.body.name },
      }),
    )
  }

  const isUserAlreadyRegistered = await prisma.user.findUnique({
    where: {
      username: req.body.username,
    },
  })

  if (!isUserAlreadyRegistered) {
    return res.status(401).end('User is not registered!')
  }

  if (isUserAlreadyRegistered) {
    const checkIfHashPasswordMatch = await bcrypt.compareSync(
      req.body.password,
      isUserAlreadyRegistered?.password,
    )

    if (!checkIfHashPasswordMatch) {
      return res.status(401).end('Incorrect password!')
    }
  }

  return res.status(202).end(
    JSON.stringify({
      pathname: '/home',
      query: { user: req.body.username },
    }),
  )
}
