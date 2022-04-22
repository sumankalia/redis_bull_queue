const sendUserCreationEmail = require("../mail/sendAccountCreationMail");

const emailQueueProcessor = async (job, done) => {
  try {
    const { name, email } = job.data.user;
    console.log({ name });
    //send confirmation email
    await sendUserCreationEmail({
      name,
      email,
    });

    done();
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = emailQueueProcessor;
