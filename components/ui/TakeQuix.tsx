import { QuizArrow, QuizBackgroud, QuizLogo } from "@/utils";
import Image from "next/image";
import Link from "next/link";

const TakeQuiz = () => {
  return (
    <div className=" container relative overflow-hidden rounded-xl max-w-sm md:max-w-full md:w-full p-6 bg-black">
      <div className="absolute inset-0">
        <Image
          src={QuizBackgroud}
          alt="background image"
          className="z-0 object-cover w-full h-full"
          width={1100}
          height={150}
          priority
        />
      </div>

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between rounded-xl space-y-4 md:space-y-0">
        <div className="flex flex-col items-start justify-center rounded-xl space-y-2 px-2">
          <p className="text-white font-Plus-jakarta text-3xl font-medium cursor-pointer">
            Still confused?
          </p>
          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLSek560yqpVAo_JLnyf8BOw88AN4fdUC4XQ0qIQo83VajddFXw/viewform"
            className="flex items-center space-x-1"
          >
            <p className="text-white font-Plus-jakarta text-xl font-medium cursor-pointer">
              Take the Descrip Quiz
            </p>
            <Image
              src={QuizArrow}
              alt="right arrow"
              width={30}
              height={30}
              priority
            />
          </Link>
        </div>
        <Link href="https://docs.google.com/forms/d/e/1FAIpQLSek560yqpVAo_JLnyf8BOw88AN4fdUC4XQ0qIQo83VajddFXw/viewform">
          <Image src={QuizLogo} alt="Logo" width={330} height={75} priority />
        </Link>
      </div>
    </div>
  );
};

export default TakeQuiz;
