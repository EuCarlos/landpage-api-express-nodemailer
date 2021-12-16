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

export = router