import { sendMail } from "@/lib/mail"

export const send = async () => {
 "use server"
 await sendMail({
  to: "m40111984@gmail.com",
  name: "Med",
  subject: "22test Contact form",
  body: `<h1>Hello, I'm Med. I would like to contact you about your website.`
 })
}