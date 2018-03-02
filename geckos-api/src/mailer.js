import nodemailer from 'nodemailer';

const from = '"Geckos Movie" <info@domain.com>';

function setup() {
  return nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD
    }
  });
}

export function sendConfirmationEmail(user) {
  const transport = setup();
  const email = {
    from,
    to: user.email,
    subject: 'Geckos Subject',
    text: `
      Please confirm your email.

      ${user.generateConfirmationURL()}
    `
  };

  transport.sendMail(email);
}

export function sendResetPasswordEmail(user) {
  const transport = setup();
  const email = {
    from,
    to: user.email,
    subject: 'Reset Password',
    text: `
      To reset password, follow the link below

      ${user.generateResetPasswordLink()}
    `
  };

  transport.sendMail(email);
}
