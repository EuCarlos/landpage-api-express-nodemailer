import express, { response } from 'express'
import routesAPI from './routes/routes'
import 'dotenv/config'
import cors from 'cors'

const app = express()
const port = process.env.PORT || 3333

// Config CORS
const allowedOrigins = [`http://localhost:${port}`]
const options: cors.CorsOptions = { origin: allowedOrigins }


app.use(cors(options))
app.use(express.json())

app.use('/', routesAPI)

app.listen(port, () => console.log(`🔥 Server is running in PORT ${port}`))
