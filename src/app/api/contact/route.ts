import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    try {
        const { name, email, message, company } = await req.json();

        // basic validation
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: "Missing fields" },
                { status: 400 }
            );
        }

        // length limits
        if (name.length > 100 || message.length > 2000) {
            return NextResponse.json(
                { error: "Input too long" },
                { status: 400 }
            );
        }

        // email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: "Invalid email" },
                { status: 400 }
            );
        }

        if (company) {
            return NextResponse.json({ error: "Bot detected" }, { status: 400 });
        }

        const data = await resend.emails.send({
            from: "Portfolio Contact <onboarding@resend.dev>",
            to: ["evanshen95@gmail.com"],
            subject: `New message from ${name}`,
            replyTo: email,
            html: `
                <h3>New Contact Message</h3>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong></p>
                <p>${message}</p>
            `
        });

        return NextResponse.json(data);

    } catch (error) {
        return NextResponse.json(
            { error: "Failed to send message" },
            { status: 500 }
        );
    }
}