"use client";

import { useState } from "react";
import { EmailMessageDetails, sendEmail } from "@/lib";

interface ContactInfo {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

export default function Contact() {
  const [contactInfo, setContactInfo] = useState<ContactInfo>({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [isFormValid, setIsFormValid] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setContactInfo({
      ...contactInfo,
      [e.target.name]: e.target.value,
    });
    setIsFormValid(
      contactInfo.firstName.trim() !== '' && 
      contactInfo.lastName.trim() !== '' &&
      contactInfo.email.trim() !== '' &&
      contactInfo.message.trim() !== ''
    );
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement | HTMLButtonElement | MouseEvent>) => {
    e.preventDefault();
    if (isFormValid) {
      const email_obj: EmailMessageDetails = {
        firstName: contactInfo.firstName,
        lastName: contactInfo.lastName,
        from: contactInfo.email,
        text: contactInfo.message,
      };
      const email = sendEmail(email_obj);
      email.then((res) => {
        if (res.status === 200) {
          alert("Email sent successfully!");
        } else {
          alert("Email failed to send. Please try again.");
        }
      });
    }
  }

  return (
    <>
      <main className="flex flex-grow justify-center items-center text-orange-200">
        <form onSubmit={handleSubmit}
              className="flex flex-col border-b-2 border-r-2 md:border-r-0 md:border-l-2  
                        border-sky-200 p-2 sm:p-7 rounded-lg shadow-lg shadow-black">
          <div className="flex flex-col pb-3 sm:w-3/4">
            <label htmlFor="firstName">First Name</label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              value={contactInfo.firstName}
              onChange={handleChange}
              className="text-slate-900 rounded-lg font-bold"
            />
          </div>
          <div className="flex flex-col pb-3 sm:w-3/4">  
            <label htmlFor="lastName">Last Name</label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              value={contactInfo.lastName}
              onChange={handleChange}
              className="text-slate-900 rounded-lg font-bold"
            />
          </div>
          <div className="flex flex-col pb-3 sm:w-3/4">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={contactInfo.email}
              onChange={handleChange}
              className="text-slate-900 rounded-lg font-bold"
            />
          </div>
          <div className="flex flex-col pb-3 sm:w-full">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={contactInfo.message}
              onChange={handleChange}
              className="text-slate-900 rounded-lg font-bold w-full"
            />
          </div>
          <button type="submit"
                  disabled={!isFormValid}
                  onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => handleSubmit(e)}
                  className="border-b-2 border-r-2 md:border-r-0 md:border-l-2  
                                        border-sky-200 text-white hover:text-orange-200 mt-3 p-3 
                                        text-lg align-center font-bold rounded-lg bg-slate-950 
                                        shadow-md shadow-slate-950 w-1/2">
            Submit
          </button>
        </form>
      </main>
    </>
  )
}
