"use client";
import React, { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";  

const ContactForm: React.FC = () => {
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const router = useRouter(); 

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    
    if (!fullName || !phoneNumber || !email) {
      setError("All fields are required.");
      return;
    }

    if (!/^\d{10}$/.test(phoneNumber)) {
      setError("Please enter a valid 10-digit phone number.");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setError("");

    try {
      const response = await fetch("/api/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ fullName, phoneNumber, email, message }),
      });

      if (response.ok) {
        
        setFullName("");
        setPhoneNumber("");
        setEmail("");
        setMessage("");

        
        router.push("/thankyou");
      } else {
        alert("Failed to send request. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting the form", error);
    }
  };

  return (
    <form
      className="flex flex-col space-y-4 bg-white p-4 md:p-6 rounded shadow-md w-full md:w-[60%] items-start"
      onSubmit={handleSubmit}
    >
      <h3 className="text-lg font-semibold text-center w-full">Contact Us</h3>
      {error && <p className="text-red-500 text-center w-full">{error}</p>}
      <input
        type="text"
        placeholder="Name*"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
        className="border-b-2 border-gray-300 p-2 rounded w-full"
      />
      <input
        type="tel"
        placeholder="Phone*"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        className="border-b-2 border-gray-300 p-2 rounded w-full"
      />
      <input
        type="email"
        placeholder="Email*"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border-b-2 border-gray-300 p-2 rounded w-full"
      />
      <textarea
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="border-b-2 border-gray-300 p-2 rounded w-full"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 w-full md:w-auto"
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;