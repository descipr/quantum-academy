import React from 'react';
import Image from 'next/image';
import { ArrowIcon, CalenderIcon} from '@/utils';
import Link from 'next/link';
import { CourseCardProps } from '@/constants';

const CourseCard: React.FC<CourseCardProps> = ({ imageSrc, title, date }) => {
    return (
        <div className="flex flex-col h-full overflow-hidden bg-white rounded-xl shadow-md">
            <div className="relative h-52 w-full">
                <Image
                    src={imageSrc}
                    alt={title}
                    width={399}
                    height={250}
                    className="object-cover w-full h-full"
                    priority
                />
            </div>
            <div className="flex flex-col justify-between flex-grow p-4 space-y-4">
                <div className="flex flex-col ">
                    <h3 className="mb-2 md:text-3xl text-2xl font-bold text-black-primary font-Plus-jakarta">{title}</h3>
                    <div className="flex items-center mb-4 space-x-2 text-gray-500">
                        <Image src={CalenderIcon} alt="Calendar Icon" width={18} height={18} />
                        <span className=" text-sm md:text-md font-Plus-jakarta font-normal">{date}</span>
                    </div>
                </div>
                <Link href={`/courses/${title}`} passHref className="mt-auto inline-block" target='_blank'>
                    <button className="flex items-center justify-center w-full px-4 py-2 space-x-4 text-white bg-[#208817] rounded cursor-pointer hover:bg-green-primary transition-all hover:text-black-primary">
                        <span className='text-sm md:text-lg '>Enroll Now</span>
                        <Image src={ArrowIcon} alt="Arrow Icon" width={32} height={32} />
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default CourseCard;
