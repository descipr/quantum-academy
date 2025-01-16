import { dm_sans } from '@/app/font';
import { advanced } from '@/utils';
import Image from 'next/image';

function Contact() {
    return (
        <div className="w-full max-w-6xl h-[55vh] mb-8 mx-auto">
            <div className="relative w-full h-full bg-white opacity-20">
                <Image
                    src={advanced}
                    alt="Your Image"
                    layout="fill"
                    objectFit="cover"
                    priority
                    className="opacity-55" // Adjusted opacity directly on the image
                />
                <div
                    className="z-50 absolute inset-0 bg-black/50 flex flex-col items-center justify-center"
                >
                    <h2 className={`text-3xl md:text-5xl font-se text-left text-blue-teal mb-12 ${dm_sans.className}`}>
                        Experience the Quantum Academy Difference
                    </h2>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded">
                        Contact Us
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Contact;
