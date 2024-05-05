import nodemailer from 'nodemailer'
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
){
  res.setHeader('Access-Control-Allow-Credentials', 'true')
  res.setHeader('Access-Control-Allow-Origin', 'https://tel101.vercel.app/api')
  res.setHeader('Access-Control-Allow-Methods', 'GET,DELETE,PATCH,POST,PUT')
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  )

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
  console.log("mail");

  // send mail with defined transport object
  transporter.sendMail({
    from: "tunateleco@gmail.com", 
    to: process.env.TUNA_EMAIL, 
    replyTo: `${req.body.email}`,
    subject: "¡Otro contacto!", // Subject line
    text: req.body.message,
    html: `<b>Nombre: ${req.body.name}</b><br />Mensaje: ${req.body.message}<br />Correo: ${req.body.email} </b><br />Teléfono: ${req.body.telf}`, // html body
  })
  .then((response) => {res.send(response)})
  .catch((error) => {res.send(error)});
}