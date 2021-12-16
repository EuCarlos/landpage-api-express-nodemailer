import express, { response } from 'express'
require('dotenv').config()

const app = express()

app.get('/', (req, res) => {
    return res.json({ 
        message: "Welcome to my API",
        author: "Carlos Alves",
        repo_link:  "https://github.com/EuCarlos/landpage-api-express-nodemailer",
        website: "https://carlosalves.now.sh"
    })
})


const port = process.env.PORT || 3333

app.listen(port, () => console.log(`🔥 Server is running in PORT ${port}`))
