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

  if (req.body?.email) {
    const isEmailAlreadyRegistered = await prisma.user.findUnique({
      where: {
        email: req.body.email,
      },
    })

    if (isEmailAlreadyRegistered) {
      return res.status(409).end('This e-mail is already registered!')
    }

    await prisma.user.create({
      data: {
        usernameWithEmail: req.body.name,
        email: req.body.email,
        password: '',
      },
    })

    return res.status(201).end('Register successful!')
  }

  const bcrypt = require('bcrypt')
  const saltRounds = 10
  const passwordToHash = req.body.password

  const isUserAlreadyRegistered = await prisma.user.findUnique({
    where: {
      username: req.body.username,
    },
  })

  if (isUserAlreadyRegistered) {
    return res.status(409).end('User is already registered!')
  }

  const hashedPassword = bcrypt.hashSync(passwordToHash, saltRounds)

  await prisma.user.create({
    data: {
      username: req.body.username,
      password: hashedPassword,
    },
  })

  return res.status(201).end('Register successful!')
}
