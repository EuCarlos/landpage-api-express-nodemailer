import 'dotenv/config'
import mailer from 'nodemailer'

function nodemail(name: string, email: string) {
    const transporter = mailer.createTransport({
        host: process.env.HOST_MAIL,
        secure: process.env.SECURE_MAIL,
        auth: {
            user: process.env.USER_MAIL,
            pass: process.env.PASSWORD_MAIL
        },
        tls: {
            rejectUnauthorized: false
        }
    })

    transporter.sendMail({
            from: process.env.NAME_MAIL +  ' <' + process.env.USER_MAIL + '>',
            to: [email],
            subject: '[LandPage Carlos Alves]: Seu E-book chegou - Baixe o agora mesmo',
            text: `Olá ${name}, seu e-book acabou de chegar baixe ele agora`,
            html: '<p>Esse é um email de teste</p>'
    })
}

export = nodemail