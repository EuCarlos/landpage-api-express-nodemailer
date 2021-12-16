const router = require('express').Router()

router.get('/', (req, res) => {
    return res.json({ 
        message: "Welcome to my API",
        author: "Carlos Alves",
        repo_link:  "https://github.com/EuCarlos/landpage-api-express-nodemailer",
        website: "https://carlosalves.now.sh"
    })
})

router.get('/subscribe', (req, res) => {
    return res.json({
        message: "Submit"
    })
})

module.exports = router