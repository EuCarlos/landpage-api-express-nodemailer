const router = require('express').Router()
const nodemail = require('../mail/nodemail')
import bodyParser from 'body-parser'
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
    nodemail(req.body.name, req.body.email)
        .then((response: any) => res.json(response))
        .catch((err: any) => res.json({ message: "Ops, we have a problem!"}))
})

export = router