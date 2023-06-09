import { prisma } from '@/src/lib/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  if (req.method !== 'PATCH') {
    return res.status(405).end()
  }

  const isUserAlreadyRegistered = await prisma.user.findUnique({
    where: {
      username: req.body.username,
    },
  })

  if (!isUserAlreadyRegistered) {
    return res.status(404).end('Username is not registered!')
  }

  await prisma.user.update({
    where: {
      username: req.body.username,
    },
    data: {
      password: req.body.password,
    },
  })

  return res.status(200).end('Password updated with success!')
}
