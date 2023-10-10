import nodemailer from 'nodemailer'

export default function sendEmail(req, res) {
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: process.env.HOST_EMAIL,
    port: process.env.PORT_EMAIL,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.USER_EMAIL,
      pass: process.env.PASS_EMAIL
    }
  });

  // send mail with defined transport object
  transporter.sendMail({
    from: "Tunateleco tunateleco@gmail.com", 
    to: "juasosua@gmail.com", 
    replyTo: `${req.body.email}`,
    subject: "¡Otro contacto!", // Subject line
    text: req.body.message,
    html: `<b>${req.body.name}</b><br />${req.body.message}<br />${req.body.telf}`, // html body
  })
  .then((response) => {res.send(response)})
  .catch((error) => {res.send(error)});
}