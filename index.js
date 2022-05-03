const nodemailer = require('nodemailer')

let transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'Otha Schoen',
        pass: 'P7RuJ8vW9e2jZC83es'
    }
})

transporter.sendMail({
    from: 'Otha Schoen <xozocv55oimmhvnw@ethereal.email>',
    to: 'teged97195@wowcg.com',
    subject: 'Teste - envio de e-mail',
    text: 'Olá! Estou testando o Nodemailer...', 
    html: "Para mais informações, acessar: <a href='https://nodemailer.com/about/>Nodemailer.com</a>'."
}).then(message => {
    console.log(message)
}).catch(err => {
    console.log(err)
})