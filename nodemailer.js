const nodemailer = require("nodemailer");

async function sendMail() {
const transporter = nodemailer.createTransport({
  tls: {
    rejectUnauthorized: false
  },
  host: "smtp.gmail.com",
  secure: true, // true for port 465, false for other ports
  port: 465,
  auth: {
      user: 'miguelinfinix21@gmail.com',
      pass: 'wbkaglnawlhqfygj'
  },
});

// async..await is not allowed in global scope, must use a wrapper

  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: 'miguelinfinix21@gmail.com', // sender address
    to: "mo5923122@gmail.com", // list of receivers
    subject: "Este es un nuevom mail", // Subject line
    text: "Hello man", // plain text body
    html: "<b>Hello man</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
}

sendMail();
