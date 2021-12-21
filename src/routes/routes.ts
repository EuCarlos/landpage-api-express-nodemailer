const router = require('express').Router()
import nodemail from 'src/mail/nodemail'
import { Request, Response } from 'express'
import prismaClient from 'src/prisma'

router.get('/', (req: Request, res: Response) => {
    return res.json({ 
        message: "Welcome to my API",
        author: "Carlos Alves",
        repo_link:  "https://github.com/EuCarlos/landpage-api-express-nodemailer",
        website: "https://carlosalves.now.sh"
    })
})

router.post('/subscribe', (req: Request, res: Response) => {
    const 
        name = req.body.name,
        email = req.body.email,
        company = req.body.company,
        website = req.body.website,
        marketing = req.body.marketing,
        police = req.body.police

    nodemail(name, email)

    prismaClient.subscriber.create({
        data: { name, email, company, website, marketing, police }
    })
        .then(response =>  res.json(response))
        .catch(err => res.json(err))
})

router.get('/admin', async (req: Request, res: Response) => {
    const subscribers = await prismaClient.subscriber.findMany({
        select: {
            id: true,
            name: true,
            email: true,
            company: true,
            website: true,
            marketing: true,
            police: true,
            created_at: true
        }
    })

    res.json(subscribers)
})

router.get('/messages', async (req: Request, res: Response) => {
    const messages = await prismaClient.message.findMany({
        take: 3,
        select: {
            id: true,
            text: true,
            name: true,
            avatar_url: true,
            created_at: true
        }
    })

    res.json(messages)
})

router.post('/send_message', (req: Request, res: Response) => {
    const
        text = req.body.text,
        name = req.body.user.name,
        avatar_url = req.body.user.avatar_url

    prismaClient.message.create({
        data: {
            name,
            text,
            avatar_url
        }
    })
        .then(response => res.json(response))
        .catch(err => res.json(err))
})

export = router