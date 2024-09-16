import { NextResponse } from "next/server";
import { sendMail } from "@/lib/mail";

export async function POST(req: Request) {
    const { fullname, companyname, phone, email, bio, servicename } = await req.json();

    try {
        await sendMail({
            to: "m40111984@gmail.com",
            name: fullname,
            subject: `New Contact Form Submission from ${fullname}`,
            body: `
                <h1>Contact Form Submission</h1>
                <p><strong>Full Name:</strong> ${fullname}</p>
                <p><strong>Company Name:</strong> ${companyname}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Service Name:</strong> ${servicename}</p>
                <p><strong>Bio:</strong> ${bio}</p>
            `,
        });
        return NextResponse.json({ message: "Email sent successfully!" });
    } catch (error) {
        return NextResponse.json({ message: "Error sending email." }, { status: 500 });
    }
}
