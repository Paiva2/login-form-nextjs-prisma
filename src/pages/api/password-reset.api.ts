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

  const bcrypt = require('bcrypt')
  const saltRounds = 10
  const passwordToHash = req.body.password

  const isUserAlreadyRegistered = await prisma.user.findUnique({
    where: {
      username: req.body.username,
    },
  })

  if (!isUserAlreadyRegistered) {
    return res.status(401).end('Username is not registered!')
  }

  if (isUserAlreadyRegistered) {
    const hashedPassword = bcrypt.hashSync(passwordToHash, saltRounds)

    await prisma.user.update({
      where: {
        username: req.body.username,
      },
      data: {
        password: hashedPassword,
      },
    })

    return res.status(200).end('Password updated with success!')
  }
}
