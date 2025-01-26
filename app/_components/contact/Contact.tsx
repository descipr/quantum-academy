import { dm_sans } from "@/app/font";
import { advanced } from "@/utils";
import Image from "next/image";
import { MdEmail } from "react-icons/md"; // Email icon
import { FaWhatsapp } from "react-icons/fa"; // WhatsApp icon

function Contact() {
  return (
    <div className="w-full max-w-6xl h-[40vh] md:h-[55vh] mb-8 mx-auto relative">
      {/* Background Image */}
      <Image
        src={advanced}
        alt="Your Image"
        layout="fill"
        objectFit="cover"
        priority
        className="absolute inset-0"
      />
      {/* White Overlay */}
      <div className="absolute inset-0 bg-white opacity-80"></div>
      {/* Text and Buttons */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        <h2
          className={`text-3xl md:text-5xl font-semibold text-center text-blue-teal mb-6 ${dm_sans.className}`}
        >
          Start Your AI Journey Today!
        </h2>
        <div className="flex gap-4">
          {/* Contact Us Button */}
          
          {/* Email Button */}
          <button
            className="flex items-center gap-2 bg-blue-teal text-white  font-bold py-2 px-6 rounded"
            onClick={() => (window.location.href = "bart.pietruszka@refocus-ai.com")}
          >
            <MdEmail size={20} /> Email us
          </button>
          {/* WhatsApp Button */}
          <button
            className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded"
            onClick={() =>
              window.open("https://wa.me/+971569553558 ", "_blank") // Replace with your WhatsApp number
            }
          >
            <FaWhatsapp size={20} /> WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
