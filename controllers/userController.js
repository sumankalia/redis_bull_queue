const User = require("../models/User");
const sendUserCreationEmail = require("../mail/sendAccountCreationMail");
const Queue = require("bull");
const { REDIS_URI, REDIS_PORT } = require("../config/constants");

const emailQueue = new Queue("emailQueue", {
  redis: { port: REDIS_PORT, host: REDIS_URI },
});

exports.create = async (req, res) => {
  const { name, email } = req.body;

  try {
    const user = await User.create({
      name,
      email,
    });

    //send confirmation email
    sendUserCreationEmail({
      name,
      email,
    });

    res.json(user);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};

exports.sendEmailToUsers = async (req, res) => {
  try {
    const users = await User.find();

    // default fifo: true
    users.forEach((user, index) => {
      console.log(user);
      emailQueue
        .add({ user }, { lifo: true, attempts: 1, delay: 4000 })
        .then(() => {
          if (index + 1 === users.length) {
            res.json({ message: "All users added in the queue" });
          }
        });
    });
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};
