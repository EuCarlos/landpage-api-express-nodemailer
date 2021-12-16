const router = require('express').Router()
import nodemail from 'src/mail/nodemail'
import { Request, Response } from 'express'

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
        .then((response: any) => res.json(response))
        .catch((err: any) => res.json({ message: "Ops, we have a problem! this is a error: " + err }))
})

router.get('/messages', (req: Request, res: Response) => {
    const example = [
        { id: 1, message: "example 1" },
        { id: 2, message: "example 2" },
        { id: 3, message: "example 3" },
        { id: 4, message: "example 4" }
    ]

    return res.json(example)
})

router.post('/send_message', (req: Request, res: Response) => {
    const
        id = req.body.id,
        text = req.body.text,
        name = req.body.user.name,
        avatar_url = req.body.user.avatar_url 

    res.json({ id, text, user: {name, avatar_url} })
})

export = router