const MONGODB_URI =
  "mongodb+srv://sumankalia:Z4uDqnnmiOvlkXVV@cluster0.vjmqg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const REDIS_URI = "127.0.0.1";
const REDIS_PORT = 6379;

const SMTP_HOST = "smtp.mailtrap.io";
const SMTP_PORT = 2525;
const SMTP_AUTH = {
  user: "7bdb11d58e6f7b",
  pass: "07b6a0da9b42fe",
};

module.exports = {
  MONGODB_URI,
  REDIS_URI,
  REDIS_PORT,
  SMTP_HOST,
  SMTP_PORT,
  SMTP_AUTH,
};
