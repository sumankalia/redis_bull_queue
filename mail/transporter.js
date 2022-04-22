const nodemailer = require("nodemailer");
const { SMTP_HOST, SMTP_PORT, SMTP_AUTH } = require("../config/constants");

// resolveHostname, port, auth -> User, pass
const transporter = nodemailer.createTransport({
  host: SMTP_HOST,
  port: SMTP_PORT,
  auth: SMTP_AUTH,
});

//checking connection
transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Mail server is running...");
  }
});

module.exports = transporter;
