import nodemailer from 'nodemailer';

export async function sendMail({
 to,
 name,
 subject,
 body
}: any) {
 const { SMTP_PASSWORD, SMTP_EMAIL } = process.env;

 const transport = nodemailer.createTransport({
  service: "gmail",
  auth: {
   user: SMTP_EMAIL,
   pass: SMTP_PASSWORD
  }
 });

 try {
  const testResult = await transport.verify()
  console.log(testResult);
 } catch (error) {
  console.error('Error occurred while connecting to the SMTP server:', error);
  return;
 }

 try {
  const sendResult = await transport.sendMail({
   from: SMTP_EMAIL,
   to,
   subject,
   html: body
  })
  console.log(sendResult);

 } catch (err) {
  console.log(err);
 }

}