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

  await prisma.user.create({
    data: {
      username: req.body.username,
      password: req.body.password,
    },
  })

  return res.status(201).end()
}
