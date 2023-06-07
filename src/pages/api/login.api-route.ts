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

  const isUserAlreadyRegistered = await prisma.user.findUnique({
    where: {
      username: req.body.username,
    },
  })

  if (!isUserAlreadyRegistered) {
    return res.status(404).end('User is not registered!')
  } else if (isUserAlreadyRegistered) {
    if (isUserAlreadyRegistered.password !== req.body.password) {
      return res.status(404).end('Incorrect password!')
    }
  }

  return res.status(202).end()
}
