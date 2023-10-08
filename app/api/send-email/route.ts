import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { body, validationResult } from 'express-validator';

interface EmailMessageDetails {
  from: string;
  firstName: string;
  lastName: string;
  text: string;
}

export const POST = async (req: NextRequest) => {
  const req_body: EmailMessageDetails | any = {
    firstName: req.nextUrl.searchParams.get("firstName"),
    lastName: req.nextUrl.searchParams.get("lastName"),
    from: req.nextUrl.searchParams.get("from"),
    text: req.nextUrl.searchParams.get("text"),
  };
  console.log(req.nextUrl.searchParams);
  console.log(req_body);
  
  // Validate request
  if (req_body.from.length < 5) {
    return NextResponse.json(
      {message: "No email from provided."},
      {status: 400}
    );
  } 
  if (req_body.firstName.length < 2) {
    return NextResponse.json(
      {message: "No first name provided."},
      {status: 400}
    );
  }
  if (req_body.lastName.length < 2) {
    return NextResponse.json(
      {message: "No last name provided."},
      {status: 400}
    );
  }
  if (req_body.text.length < 2) {
    return NextResponse.json(
      {message: "No text provided."},
      {status: 400}
    );
  }

  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.MY_EMAIL,
        pass: process.env.MY_PASSWORD,
      },
    });

    const message = {
      from: req_body.from,
      to: process.env.MY_EMAIL,
      subject: `Message from ${req_body.firstName} ${req_body.lastName} through ZichKoding Portfolio`,
      text: req_body.text,
    };

    const info = await transporter.sendMail(message);

    console.log(`Message sent: ${info.messageId}`);
    return NextResponse.json(
      {message: "Email sent successfully."},
      {status: 200}
    );
  } catch (error: any) {
    console.error(`Error occurred. ${error.message}`);
    return NextResponse.json(
      {message: "Error occurred while sending email. Please try again later."},
      {status: 500}
    );
  }
};